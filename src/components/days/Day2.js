import React, { useState } from "react";
import "../../styles/dayStyles/Day2.css";

export default function Day2() {
    const [isX, setIsX] = useState(false);

    const toggleX = () => {
        setIsX(!isX);
        console.log("Clicked");
        console.log(isX);
    };

    const toggleHamburger = () => {
        setIsX(false);
    }
    
    return (
        // green box container
        <div className="day2-container">
            
            {/* hamburger menu */}
            <div className={`day2-hamburger ${isX ? 'animate-X' : 'static-hamburger'}`} onClick={toggleX}>
                <div className="day2-top-line" />
                <div className="day2-middle-line" />
                <div className="day2-bottom-line" />
            </div>
        </div>
    
    )
}