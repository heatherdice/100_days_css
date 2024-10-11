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

    // points positioning in line graph, value & color assignment
    const pointsData = [
        { x: 21, y: 52, value: 458, color: 'red' },
        { x: 61, y: 21, value: 812, color: 'red' },
        { x: 101, y: 31, value: 746, color: 'red' },
        { x: 141, y: 20, value: 877, color: 'red' },
        { x: 182, y: 46, value: 517, color: 'red' },
        { x: 222, y: 56, value: 434, color: 'red' },
        { x: 262, y: 27, value: 458, color: 'red' },
        { x: 21, y: 68, value: 26, color: 'blue' },
        { x: 61, y: 59, value: 41, color: 'blue' },
        { x: 101, y: 72, value: 22, color: 'blue' },
        { x: 141, y: 63, value: 36, color: 'blue' },
        { x: 182, y: 69, value: 25, color: 'blue' },
        { x: 222, y: 82, value: 13, color: 'blue' },
        { x: 262, y: 72, value: 20, color: 'blue' },
    ];

    // render points on line graph
    const renderPoints = () => 
        pointsData.map((point, index) => (
            <foreignObject
                key={index}
                x={point.x - 15} // center point horizontally
                y={point.y - 15} // center the point vertically
                width="10"
                height="10"
                style={{ overflow: "visible", pointerEvents: "none" }}
            >
                <div className="points-container">
                    <div className={`points ${point.color}`}>
                        <div className={`popup-bubble ${point.color}`}>{point.value}</div>
                    </div>
                </div>
            </foreignObject>
    ));

    // className & positioning of chart lines
    const chartLines = [
        { points: "9,46 50,12 90,23 130,11 171,38 211,48 251,19", className: "red-line" },
        { points: "9,61 50,50 90,65 130,55 171,61 211,74 251,64", className: "blue-line" },
    ];

    // render chart lines
    const renderLines = () =>
        chartLines.map((line, index) => (
            <polyline key={index} points={line.points} className={line.className} />
        )
    );

    // weekdays below data points
    const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const renderWeekdays = () =>
        weekdays.map((day, index) => 
            <span key={index}>{day}</span>
        );    

    return (
        // green box container 
        <div className="day-container container-color5">

            {/* card for chart */}
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
                    {/* lines & data points */}
                    <svg viewBox={getViewBox()} className="polyline-container" preserveAspectRatio="xMinYMin meet">
                        {renderLines()}
                        <g>{renderPoints()}</g>
                    </svg>

                    {/* weekdays */}
                    <div className="weekdays">{renderWeekdays()}</div>
                </div>
            </div>
        </div>
    )
}