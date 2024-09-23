import React from "react";
import "../../styles/dayStyles/Day08.css";

export default function Day08() {
    const dots = Array.from({ length: 8 }, (_, i) => {
        const rotation = Math.random() * 300; // Random rotation for each dot
        const animationDuration = 2.5 + (i + 1) / 5; // Varies with index
        const transformOrigin = `${38 - (i + 1) * 3}px ${38 - (i + 1) * 3}px`;
    
        const style = {
            position: 'absolute',
            top: '1em',
            left: '1em',
            width: '3em',
            height: '3em',
            transform: `rotate(${rotation}deg)`,
            animation: `rotate ${animationDuration}s ease-in-out ${(i + 1) / 5}s infinite`,
            // filter: 'blur(5px)',
            transformOrigin,
        };
    
        return (
            <div key={`dot-${i + 1}`} className={`dot-${i + 1}`} style={style}>
                <div style={{
                    position: 'absolute',
                    display: 'block',
                    width: '3em',
                    height: '3em',
                    background: '#fff',
                    borderRadius: '50%',
                }} />
            </div>
        );
    });
    
    const spots = Array.from({ length: 10 }, (_, i) => {
        const rotation = Math.random() * 300; // Random rotation for each spot
        const size = 7 + (i + 1); // Size increases with index
        const animationDuration = 3.5 + (i + 1) / 5; // Varies with index
        const transformOrigin = `${60 - (i + 1) * 2}px ${60 - (i + 1) * 2}px`;
    
        const style = {
            position: 'absolute',
            // top: '1em',
            // left: '1em',
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
            animation: `rotate ${animationDuration}s ease-in-out ${(i + 1) / 5}s infinite`,
            // filter: 'blur(3px)',
            transformOrigin,
        };
    
        return (
            <div key={`spot-${i + 1}`} className={`spot-${i + 1}`} style={style}>
                <div style={{
                    position: 'absolute',
                    display: 'block',
                    width: `${size}px`,
                    height: `${size}px`,
                    background: '#fff',
                    borderRadius: '50%',
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