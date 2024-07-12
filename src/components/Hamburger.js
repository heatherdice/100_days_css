import React, { useState } from "react";
import "../styles/Hamburger.css";

export default function Hamburger({ onClick }) {
    // state variables determining whether or not menu is open
    const [isOpen, setIsOpen] = useState(false);

    // change shape from hamburger to x or vice versa
    const handleClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        if (onClick) onClick(event);
    };

    return (
        <div className={`hamburger ${isOpen ? 'animation-to-x' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
            <div className="top-line" />
            <div className="middle-line" />
            <div className="bottom-line" />
        </div>
    )
}