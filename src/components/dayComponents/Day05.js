import React, { useState, useEffect } from "react";
import "../../styles/dayStyles/Day05.css";

export default function Day05() {
    // set state for screen size
    const [screenType, setScreenType] = useState(getScreenType());

    // determine screen type based on window width
    function getScreenType() {
        const width = window.innerWidth;
        return width <= 600
            ? 'mobile'
            : width <= 945
            ? 'tablet'
            : 'desktop';
    };

    // update screen type when window is resized
    const handleResize = () => setScreenType(getScreenType());

    // add & remmove event listener for resizing
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // return appropriate svg viewbox based on screen size
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

    // points positioning in line graph
    const redPointsData = [
        { x: 9, y: 73, value: 458 },
        { x: 51, y: 39, value: 812 },
        { x: 90, y: 50, value: 746 },
        { x: 130, y: 38, value: 877 },
        { x: 171, y: 64, value: 517 },
        { x: 211, y: 74, value: 434 },
        { x: 251, y: 45, value: 458 },
    ];
    const bluePointsData = [
        { x: 9, y: 88, value: 26 },
        { x: 50, y: 78, value: 41 },
        { x: 90, y: 92, value: 22 },
        { x: 130, y: 82, value: 36 },
        { x: 171, y: 88, value: 25 },
        { x: 211, y: 101, value: 13 },
        { x: 251, y: 91, value: 20 },
    ];

    // render points on line graph
    const renderPoints = (points, colorClass) => 
        points.map((point, index) => (
            <foreignObject
                key={index}
                x={point.x - 3} // center point horizontally
                y={point.y - 30} // position popup above the point
                width="30"
                height="30"
            >
                <div className={`points ${colorClass}`}>
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
                        <g className="red-points">
                            {renderPoints(redPointsData, "red")}
                        </g>

                        {/* blue line */}
                        <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64" className="blue-line" />
                        
                        {/* blue points */}
                        <g className="blue-points">
                            {renderPoints(bluePointsData, "blue")}
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