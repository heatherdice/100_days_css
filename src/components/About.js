import React from "react";
import "../styles/About.css";
import cssLogo from "../assets/images/cssLogo.ico";

export default function About() {
    return (
        <>
            <h2 className="about-title">About</h2>
            <div className="about">
                <p className="about-info">
                    As a frontend developer, I am always looking to improve my skills in frontend languages. That's why, when I found the <a href="https://100dayscss.com/about/">100 Days CSS</a> challenge, I jumped at the opportunity! This challenge provides small CSS projects on the website for developers to reproduce. Some of the challenges involve animations, while others involve the creation of intricate shapes and patterns. While the intention of this challenge may be to replicate one project a day, my plan is to make contributions to various projects over a number of days. After all, I have other projects going on as well! As I complete projects, they will be displayed on this site. Check in regularly for updates!
                </p>
                <img src={cssLogo} alt="css logo" className="css-logo" />
            </div>
        </>
    )
}