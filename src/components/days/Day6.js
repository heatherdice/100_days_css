import React from "react";
import "../../styles/dayStyles/Day6.css";

export default function Day6() {
    return (
        // info card
        <div class="card">
            {/* left column */}
            <div class="left-column">
                
                {/* image w/ circle animations */}
                <div class="circle-container">
                    <div class="outer-circle"></div>
                    <div class="inner-circle"></div>
                    <img src="./profilePhoto.jpeg" alt="Heather Dice" />
                </div>

                {/* section under photo */}
                <div class="under-photo">
                    {/* name & title */}
                    <span class="name">Heather Dice</span>
                    <span class="title">Frontend Web Developer</span>

                    {/* buttons */}
                    <button>Follow</button>
                    <button>Message</button>
                </div>

            </div>

            {/* right column */}
            <div class="right-column">
                <div class="row">
                    <span class="numbers">523</span>
                    <span class="categories">Posts</span>    
                </div>
                <div class="row">
                    <span class="numbers">1387</span>
                    <span class="categories">Likes</span>    
                </div>
                <div class="row">
                    <span class="numbers">146</span>
                    <span class="categories">Followers</span>    
                </div>
            </div>
        </div>

    )
}