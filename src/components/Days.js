import React, { useState } from "react";
import "../styles/Days.css";
import Day1 from "./days/Day1";
import Day2 from "./days/Day2";

export default function Days() {
    return (
        <>
            <h2 className="days-title">Days</h2>
            <div className="days-columns">
                <h3 className="day-heading">Day 1</h3>
                <div className="col-1">
                    <Day1 />
                </div>
                <h3 className="day-heading">Day 2</h3>
                <div className="col-2">
                    <Day2 />
                </div>
            </div>
        </>
    )
}