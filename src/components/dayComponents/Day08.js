import React from "react";
import "../../styles/dayStyles/Day08.css";

export default function Day08() {
    const dots = Array.from({ length: 8 }, (_, i) => {
        const dotsRotation = Math.random() * 300; // Random rotation for each dot
        const dotsAnimationDuration = 2.5 + (i + 1) / 5; // Varies with index
        const dotsOrigin = `${38 - (i + 1) * 3.5}px ${38 - (i + 1) * 3.5}px`;
    
        const dotsStyle = {
            position: 'absolute',
            top: '1em',
            left: '1em',
            width: '4em',
            height: '4em',
            transform: `rotate(${dotsRotation}deg)`,
            animation: `rotate ${dotsAnimationDuration}s ease-in-out ${(i + 1) / 5}s infinite`,
            transformOrigin: dotsOrigin,
            mixBlendMode: 'lighten',
        };
    
        return (
            <div key={`dot-${i + 1}`} className={`dot-${i + 1}`} style={dotsStyle}>
                <div style={{
                    position: 'absolute',
                    display: 'block',
                    width: '3.3em',
                    height: '3em',
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px 5px rgba(20, 20, 20, 0.9), 0 0 30px 10px rgba(0, 0, 0, 0.6)',
                }} />
            </div>
        );
    });
    
    const spots = Array.from({ length: 10 }, (_, i) => {
        const spotsRotation = Math.random() * 300; // Random rotation for each spot
        const spotsSize = 7 + (i + 1); // Size increases with index
        const spotsAnimationDuration = 3.5 + (i + 1) / 5; // Varies with index
        const spotsOrigin = `${56 - (i + 1) * 2}px ${56 - (i + 1) * 2}px`;
    
        const spotsStyle = {
            position: 'absolute',
            width: `${spotsSize}px`,
            height: `${spotsSize}px`,
            transform: `rotate(${spotsRotation}deg)`,
            animation: `rotate ${spotsAnimationDuration}s ease-in-out ${(i + 1) / 5}s infinite`,
            transformOrigin: spotsOrigin,
            mixBlendMode: 'lighten',
        };
    
        return (
            <div key={`spot-${i + 1}`} className={`spot-${i + 1}`} style={spotsStyle}>
                <div style={{
                    position: 'absolute',
                    display: 'block',
                    width: `${spotsSize}px`,
                    height: `${spotsSize}px`,
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px 5px rgba(20, 20, 20, 0.9), 0 0 30px 10px rgba(0, 0, 0, 0.6)',
                }} />
            </div>
        );
    });

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