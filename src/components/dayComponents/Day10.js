import React from "react";
import "../../styles/dayStyles/Day10.css";

export default function Day10() {
    return (
        <div className="day-container container-color10">
            
            {/* clock face */}
            <div className="day10-outer-circle">
                <div className="clock-face">
                    <div className="moving-circle">
                        <div className="dotted-circle">

                            <div className="date">
                                MON 15 JAN 2015
                            </div>

                            <div className="time">
                                11:42
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}