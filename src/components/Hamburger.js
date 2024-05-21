import React, { useEffect, useState } from "react";
import "../styles/Hamburger.css";

export default function Hamburger({ onClick }) {
    // toggle classes for animations on hamburger click
    useEffect(() => {
        // select DOM element
        const menu = document.querySelector(".hamburger");

        // change shape from hamburger to x or vice versa
        const handleClick = (event) => {
            event.preventDefault;
            menu.classList.remove("menu");
            menu.classList.toggle("animation-to-x");
        };

        // add event listener when component mounts
        menu.addEventListener("click", handleClick);
        menu.addEventListener("touchend", handleClick, { passive: false });

        // remove event listener when component unmounts
        return () => {
            menu.removeEventListener("click", handleClick);
            menu.removeEventListener("touchend", handleClick);
        };
    }, [onClick]);

    return (
        <>
            <div className="hamburger menu" onClick={onClick} onTouchEnd={onClick}>
                <div className="top-line" />
                <div className="middle-line" />
                <div className="bottom-line" />
            </div>
        </>
    )
}