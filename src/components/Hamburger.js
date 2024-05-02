import React, { useEffect, useState } from "react";
import "../styles/Hamburger.css";
import Dropdown from "./Dropdown";

export default function Hamburger({ props }) {

    // toggle classes for animations on hamburger click
    useEffect(() => {
        // select DOM element
        const menu = document.querySelector(".hamburger");

        // onclick, remove static class & add animation class; if animation class is already present, remove it
        const handleClick = () => {
            menu.classList.remove("static");
            menu.classList.toggle("animation");
        };

        // add event listener when component mounts
        menu.addEventListener("click", handleClick);

        // remove event listener when component unmounts
        return () => {
            menu.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <div className="hamburger static" onClick={props}>
                <div className="top-line" />
                <div className="middle-line" />
                <div className="bottom-line" />
            </div>
        </>
    )
}