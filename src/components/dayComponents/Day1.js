import React from "react";
import "../../styles/dayStyles/Day1.css";

export default function Day1() {
    return (
        // blue box container
        <div className="day-container container-color1">

            {/* 100 */}
            <div className="numbers">
                <div className="one-flag" />
                <div className="one-stem" />.
                <div className="circle" />
                <div className="circle-two" />
            </div>

            {/* Days CSS Challenge text */}
            <div className="center">
                <div className="text">
                    <span className="days">DAYS</span>
                    <br />
                    <span className="css-challenge">CSS CHALLENGE</span>
                </div>
            </div>
            
        </div>
    )
}