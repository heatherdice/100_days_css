import React from "react";
import "../../styles/dayStyles/Day09.css";

export default function Day09() {
    // generate crater & raindrop divs
    const craters = Array.from({ length: 11 }, (_, i) => (
        <div key={`crater-${i + 1}`} className={`crater-${i + 1}`} />
    ));

    return (
        <div className="day-container container-color9">
            
            {/* top 3/4 w/ weather animation */}
            <div className="weather-picture">
                <div className="moon">
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