import React from "react";
import "../../styles/dayStyles/Day5.css";

export default function Day5() {
    return (
        // green box container 
        <div className="day-container container-color5">

            <div className="chart-container">
                {/* chart header */}
                <div className="chart-header">
                    <p className="chart-top-row">
                        <span className="chart-large-text">WEEKLY REPORT</span>
                        <span className="chart-small-text">Revenue</span>
                    </p>
                    <p className="chart-bottom-row">
                        <span className="chart-small-text">01. Feb - 07. Feb</span>
                        <span className="chart-large-text">$3621.79</span>
                    </p>
                </div>

                {/* chart key */}
                <div className="key">
                    <hr className="key-red" />
                    <p className="chart-small-text view-purchase">Views</p>
                    <hr className="key-blue" />
                    <p className="chart-small-text view-purchase">Purchases</p>
                </div>

                {/* chart */}
                <div className="chart-lines">
                    <svg>
                        <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19" className="red-line" />
                        <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64" className="blue-line" />
                    </svg>
                </div>
            </div>
        </div>
    )
}