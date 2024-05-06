import React, { useEffect } from "react";
import "../../styles/dayStyles/Day2.css";

export default function Day2() {
    // toggle classes for animations on hamburger click
    const hamburgerAnimation = () => {
        // select DOM element
        const menu = document.querySelector(".day2-hamburger");

        // remove static class & add animation class; if animation class is already present, remove it
        menu.classList.remove("static");
        menu.classList.toggle("animation");
    }

    useEffect(() => {
        const menu = document.querySelector(".day2-hamburger");
        // add event listener when component mounts
        menu.addEventListener("click", hamburgerAnimation);

        // remove event listener when component unmounts
        return () => {
            menu.removeEventListener("click", hamburgerAnimation);
        };
    }, []);
    
    return (
        // green box container
        <div className="day2-container">
            
            {/* hamburger menu */}
            <div className="day2-hamburger static">
                <div className="day2-top-line" />
                <div className="day2-middle-line" />
                <div className="day2-bottom-line" />
            </div>
        </div>
    
    )
}