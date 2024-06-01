import React from "react";
import "../../styles/dayStyles/Day5.css";

export default function Day5() {
    return (
        <>
            {/* green box container */}
            <div className="day-container container-color5">

                {/* chart header */}
                <div className="chart-header">
                    <div className="top-row">
                        <h2>WEEKLY REPORT</h2>
                        <h4>Revenue</h4>
                    </div>
                    <div className="bottom-row">
                        <h4>01. Feb - 07. Feb</h4>
                        <h2>$3621.79</h2>
                    </div>
                </div>

                {/* chart key */}
                <div className="key">
                    <hr className="key-red" />
                    <h4>Views</h4>
                    <hr className="key-blue" />
                    <h4>Purchases</h4>
                </div>
            </div>
        </>
    )
}