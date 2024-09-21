import React from "react";
import "../../styles/dayStyles/Day09.css";

export default function Day09() {
    return (
        <div className="day-container container-color9">
            
            {/* weather picture */}
            <div className="weather-picture">

            </div>
            
            {/* weather stats */}
            <div className="weather-stats">
                <div className="temp">12°</div>

                <div className="wind-humidity">
                    Wind: E 7km/h
                    <br/>
                    Humidity: 87%
                </div>
            </div>
        </div>
    )
}