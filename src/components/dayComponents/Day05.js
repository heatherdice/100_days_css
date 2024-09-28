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

    console.log(screenType);

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
                        <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19" className="red-line" />
                        <div className="points">
                            <div className="point-1">
                                <div className="popup-bubble">
                                    458
                                </div>
                            </div>
                            <div className="point-2">
                                <div className="popup-bubble">
                                    812
                                </div>
                            </div>
                            <div className="point-3">
                                <div className="popup-bubble">
                                    746
                                </div>
                            </div>
                            <div className="point-4">
                                <div className="popup-bubble">
                                    877
                                </div>
                            </div>
                            <div className="point-5">
                                <div className="popup-bubble">
                                    517
                                </div>
                            </div>
                            <div className="point-6">
                                <div className="popup-bubble">
                                    434
                                </div>
                            </div>
                            <div className="point-7">
                                <div className="popup-bubble">
                                    458
                                </div>
                            </div>

                        </div>
                        <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64" className="blue-line" />
                        <div className="points">
                        <div className="point-1">
                                <div className="popup-bubble">
                                    26
                                </div>
                            </div>
                            <div className="point-2">
                                <div className="popup-bubble">
                                    41
                                </div>
                            </div>
                            <div className="point-3">
                                <div className="popup-bubble">
                                    22
                                </div>
                            </div>
                            <div className="point-4">
                                <div className="popup-bubble">
                                    36
                                </div>
                            </div>
                            <div className="point-5">
                                <div className="popup-bubble">
                                    25
                                </div>
                            </div>
                            <div className="point-6">
                                <div className="popup-bubble">
                                    13
                                </div>
                            </div>
                            <div className="point-7">
                                <div className="popup-bubble">
                                    20
                                </div>
                            </div>
                        </div>
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