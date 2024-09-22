import React from "react";
import "../../styles/dayStyles/Day08.css";

export default function Day08() {
    const dots = Array.from({ length: 8 }, (_, i) => (
        <div key={`dot-${i + 1}`} className={`dot-${i + 1}`} />
    ));

    const spots = Array.from({ length: 10 }, (_, i) => (
        <div key={`spots-${i + 1}`} className={`spots-${i + 1}`} />
    ));

    return (
        <div className="day-container container-color8">
            <div className="ball">
                <div className="white-center">
                    {dots}
                    {spots}
                </div>
            </div>
        </div>
    )
}