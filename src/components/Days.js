import React from "react";
import "../styles/Days.css";
import Day1 from "./days/Day1";
import Day2 from "./days/Day2";
import Day3 from "./days/Day3";
import Day4 from "./days/Day4";

export default function Days() {
    return (
        <>
            <h2 className="days-title">Days</h2>
            <div className="page-container">
                <div className="grid-rows">
                    <div className="grid-blocks">
                        <h3 className="day-heading">Day 1</h3>
                        <Day1 />
                    </div>
                    <div className="grid-blocks">
                        <h3 className="day-heading">Day 2</h3>
                        <Day2 />
                    </div>
                </div>
                <div className="grid-rows">
                    <div className="grid-blocks">
                        <h3 className="day-heading">Day 3</h3>
                        <Day3 />
                    </div>
                    <div className="grid-blocks">
                        {/* <h3 className="day-heading">Day 4</h3>
                        <Day4 /> */}
                    </div>
                </div>
            </div>
        </>
    )
}