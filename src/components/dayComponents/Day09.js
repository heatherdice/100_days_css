import React, { useState } from "react";
import "../../styles/dayStyles/Day09.css";
import { useInView } from "react-intersection-observer";

export default function Day09() {
    // use intersection-observer api to trigger animations on render
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    const [animate, setAnimate] = useState(false);

    React.useEffect(() => {
        // toggle to reset animation
        if (inView) {
            setAnimate(false);
            requestAnimationFrame(() => setAnimate(true));
        }
    }, [inView])

    // generate crater divs with randomized styling for width, height, top, and left attributes
    const craters = Array.from({ length: 11 }, (_, i) => {
        const size = (Math.random() * 0.4 + 0.2).toFixed(2);
        const top = (Math.random() * 80 + 10).toFixed(1);
        const left = (Math.random() * 80 + 10).toFixed(1);

        const style = {
            width: `${size}em`,
            height: `${size}em`,
            top: `${top}%`,
            left: `${left}%`,
        };

        return <div key={`crater-${i + 1}`} className="crater" style={style} />
    });

    // rain generation with established number of columns and size names
    const columns = 10;
    const sizes = ["big", "medium", "small"];

    // durations for the animation for each size of raindrops
    const baseDurations = {
        big: 0.7,
        medium: 1.3,
        small: 1.9
    };

    // generate raindrop elemens for each column, flatten into arr for React rendering
    // Array.from({ length: columns }) -> creates arr w/ columns number of elements (in this case, arr w/ 10 elements)
    // .flatMap() -> map over arr & flatten to non-nested arr
    // (_, columnIndex) -> ("I don't care about this value", index of the column)
    // sizes.map((size) => ...) -> produce 3 sizes of raindrop (big, medium, small) per column
    // without this process, would create a nested arr, which React doesn't like
    const raindrops = animate
        ? Array.from({ length: columns }).flatMap((_, columnIndex) => sizes.map((size) => {
            // set horizontal position of each raindrop, creates even spacing
            const left = -15 + columnIndex * 39;

            // set duration starting at baseline duration, add up to 0.2s of variation so rain starts at different times rather than all at once
            const duration = 
                baseDurations[size] + Math.random() * 0.2;
            const delay = Math.random() * 2;

            // render
            return (
                <div
                    key={`drop-${columnIndex}-${size}-${Math.random()}`}
                    className={`drop ${size}`}
                    style={{
                        left: `${left}px`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`
                    }}
                />
            );
        })
    )
    : null;

    return (
        <div ref={ref} className="day-container container-color9">
            
            {/* top 3/4 w/ weather animation */}
            <div className="weather-picture">

                {/* moon */}
                <div className={`moon ${animate ? ' animate' : ''}`}>
                    {craters}
                </div>

                {/* raindrops */}
                {raindrops}

                {/* hills */}
                <div>
                    <div className="all-hills bg-hills hill-bg-1" />
                    <div className="all-hills bg-hills hill-bg-2" />
                    <div className="all-hills fg-hills hill-fg-1" />
                    <div className="all-hills fg-hills hill-fg-2" />
                    <div className="all-hills fg-hills hill-fg-3" />
                </div>

            </div>
            
            {/* bottom 1/4 w/ weather stats */}
            <div className="weather-stats">
                <div className="temp">12°</div>

                <div className="wind-humidity">
                    Wind: E 7km/h
                    <br/>
                    Humidity: 87%
                </div>

                <div className="forecast">
                    <div className="forecast-days">
                        TUE
                        <br/>
                        WED
                    </div>

                    <div className="forecast-temps">
                        21° / 9°
                        <br/>
                        23° / 10°
                    </div>
                </div>
            </div>
        </div>
    )
}