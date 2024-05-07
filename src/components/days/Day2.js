import React, { useState } from "react";
import "../../styles/dayStyles/Day2.css";

export default function Day2() {
    // set state variables for X shape
    const [isX, setIsX] = useState(false);

    // change state of X shape from true to false or vice versa
    const toggleX = (e) => {
        // prevent event from bubbling up to parent elements
        e.stopPropagation();
        setIsX(!isX);
        
        // test
        console.log("Clicked");
        console.log(isX);
    };
    
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