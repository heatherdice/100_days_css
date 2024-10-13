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

    // generate crater & raindrop divs
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

    return (
        <div ref={ref} className="day-container container-color9">
            
            {/* top 3/4 w/ weather animation */}
            <div className="weather-picture">
                <div className={`moon ${animate ? ' animate' : ''}`}>
                    {craters}
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