import React, { useState } from "react";
import "../../styles/dayStyles/Day2.css";

export default function Day2() {
    const [isX, setIsX] = useState(false);

    const toggleX = () => {
        setIsX(!isX);
        console.log("Clicked");
        console.log(isX);
    };

    // toggle classes for animations on hamburger click
    // useEffect(() => {
    //     // select DOM element
    //     const hamburger = document.querySelector(".day2-hamburger");

    //     // onclick, remove static class & add animation class; if animation class is already present, remove it
    //     const handleHamburgerClick = () => {
    //         hamburger.classList.remove("static-hamburger");
    //         hamburger.classList.toggle("animate-X");
    //     };

    //     // add event listener when component mounts
    //     hamburger.addEventListener("click", handleHamburgerClick);

    //     // remove event listener when component unmounts
    //     return () => {
    //         hamburger.removeEventListener("click", handleHamburgerClick);
    //     }
    // }, []);
    
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