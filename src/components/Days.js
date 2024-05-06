import React from "react";
import "../styles/Days.css";
import Day1 from "./days/Day1";

export default function Days() {
    return (
        <>
            <h2 className="days-title">Days</h2>
            <div className="days-columns">
                <div className="col-1">
                    <h3>Day 1</h3>
                    <Day1 />
                </div>
                <div className="col-2">

                </div>
            </div>
        </>
    )
}