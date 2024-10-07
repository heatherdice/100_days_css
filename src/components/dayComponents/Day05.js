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

    // svg viewbox positioning for each screen size
    const viewBoxes = {
        mobile: "0 10 260 70",
        tablet: "-3 10 265 70",
        desktop: "0 0 260 90",
    };

    // return appropriate svg viewbox based on screen size
    const getViewBox = () => viewBoxes[screenType] || viewBoxes.desktop;

    // points positioning in line graph
    const pointsData = [
        { x: 9, y: 73, value: 458, color: 'red' },
        { x: 51, y: 39, value: 812, color: 'red' },
        { x: 90, y: 50, value: 746, color: 'red' },
        { x: 130, y: 38, value: 877, color: 'red' },
        { x: 171, y: 64, value: 517, color: 'red' },
        { x: 211, y: 74, value: 434, color: 'red' },
        { x: 251, y: 45, value: 458, color: 'red' },
        { x: 9, y: 88, value: 26, color: 'blue' },
        { x: 50, y: 78, value: 41, color: 'blue' },
        { x: 90, y: 92, value: 22, color: 'blue' },
        { x: 130, y: 82, value: 36, color: 'blue' },
        { x: 171, y: 88, value: 25, color: 'blue' },
        { x: 211, y: 101, value: 13, color: 'blue' },
        { x: 251, y: 91, value: 20, color: 'blue' },
    ];

    // weekdays below data points
    const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const renderWeekdays = () =>
        weekdays.map((day, index) => <span key={index}>{day}</span>);

    // render points on line graph
    const renderPoints = () => 
        pointsData.map((point, index) => (
            <foreignObject
                key={index}
                x={point.x - 3} // center point horizontally
                y={point.y - 30} // position popup above the point
                width="30"
                height="30"
            >
                <div className={`points ${point.color}`}>
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
                            {renderPoints()}
                        </g>

                        {/* blue line */}
                        <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64" className="blue-line" />
                        
                        {/* blue points */}
                        <g className="blue-points">
                            {renderPoints()}
                        </g>
                    </svg>

                    {/* weekdays */}
                    <div className="weekdays">
                        {renderWeekdays()}
                    </div>
                </div>

            </div>
        </div>
    )
}