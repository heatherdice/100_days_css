import React from "react";
import "../../styles/dayStyles/Day6.css";
import profilePhoto from "../../assets/images/profilePhoto.jpeg";

export default function Day6() {
    return (
        <div className="day-container container-color6">
            {/* info card */}
            <div class="info-card">
                {/* left column */}
                <div class="left-column">
                    
                    {/* image w/ circle animations */}
                    <div class="circle-container">
                        <div class="outer-photo-circle"></div>
                        <div class="inner-photo-circle"></div>
                        <img src={profilePhoto} className="profile-photo" alt="Heather Dice" />
                    </div>

                    {/* section under photo */}
                    <div class="under-photo">
                        {/* name & title */}
                        <span class="name">Heather Dice</span>
                        <span class="title">Frontend Web Developer</span>

                        {/* buttons */}
                        <button className="follow-msg-btns">Follow</button>
                        <button className="follow-msg-btns">Message</button>
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

        </div>

    )
}