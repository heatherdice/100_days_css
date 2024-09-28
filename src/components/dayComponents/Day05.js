import React, { useState, useEffect } from "react";
import "../../styles/dayStyles/Day05.css";

export default function Day05() {
    const [screenType, setScreenType] = useState(getScreenType());

    function getScreenType() {
        const width = window.innerWidth;
        return width <= 600
            ? 'mobile'
            : width <= 945
            ? 'tablet'
            : 'desktop';
    };

    const handleResize = () => setScreenType(getScreenType());

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getViewBox = () => {
        switch (screenType) {
            case 'mobile' :
                return "0 10 260 70";
            case 'tablet' :
                return "-3 10 265 70";
            default:
                return "0 0 260 90"
        }
    };

    const redPointsData = [
        { x: 9, y: 46, value: 458 },
        { x: 50, y: 12, value: 812 },
        { x: 90, y: 23, value: 746 },
        { x: 130, y: 11, value: 877 },
        { x: 171, y: 38, value: 517 },
        { x: 211, y: 48, value: 434 },
        { x: 251, y: 19, value: 458 },
    ];

    const bluePointsData = [
        { x: 9, y: 61, value: 26 },
        { x: 50, y: 50, value: 41 },
        { x: 90, y: 65, value: 22 },
        { x: 130, y: 55, value: 36 },
        { x: 171, y: 61, value: 25 },
        { x: 211, y: 74, value: 13 },
        { x: 251, y: 64, value: 20 },
    ];

    const renderPoints = (points) => 
        points.map((point, index) => (
            <foreignObject
                key={index}
                x={point.x - 3} // center point horizontally
                y={point.y - 30} // position popup above the point
                width="30"
                height="30"
            >
                <div className="point">
                    <div className="popup-bubble">{point.value}</div>
                </div>
            </foreignObject>
        ));
    

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
                    <svg viewBox={getViewBox()} className="polyline-container" preserveAspectRatio="xMinYMin meet">

                        {/* red line */}
                        <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19" className="red-line" />

                        {/* red points */}
                        <g className="points">
                            {renderPoints(redPointsData)}
                        </g>

                        {/* blue line */}
                        <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64" className="blue-line" />
                        
                        {/* blue points */}
                        <g className="points">
                            {renderPoints(bluePointsData)}
                        </g>
                    </svg>

                    {/* weekdays */}
                    <div className="weekdays">
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                        <span>SUN</span>
                    </div>
                </div>

            </div>
        </div>
    )
}