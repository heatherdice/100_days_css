import React, { useEffect } from "react";
import "../../styles/dayStyles/Day2.css";

export default function Day2({ onClick }) {
    // toggle classes for animations on hamburger click
    useEffect(() => {
        // select DOM element
        const menu = document.querySelector(".day2-hamburger");

        // change shape from hamburger to x or vice versa
        const handleClick = () => {
            menu.classList.remove("static-hamburger");
            menu.classList.toggle("animate-X");
        };

        // add event listener when component mounts
        menu.addEventListener("click", handleClick);

        // remove event listener when component unmounts
        return () => {
            menu.removeEventListener("click", handleClick);
        }
    }, []);
    
    return (
        // green box container
        <div className="day2-container">
            
            {/* hamburger menu */}
            <div className="day2-hamburger static-hamburger" onClick={onClick}>
                <div className="day2-top-line" />
                <div className="day2-middle-line" />
                <div className="day2-bottom-line" />
            </div>
        </div>
    
    )
}