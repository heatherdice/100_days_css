import React from "react";
import "../../styles/dayStyles/Day06.css";
import profilePhoto from "../../assets/images/profilePhoto.jpeg";

export default function Day06() {
    return (
        <div className="day-container container-color6">
            {/* info card */}
            <div className="info-card">
                {/* left column */}
                <div className="left-column">
                    
                    {/* image w/ circle animations */}
                    <div className="circle-container">
                        <div className="outer-photo-circle"></div>
                        <div className="inner-photo-circle"></div>
                        <img src={profilePhoto} className="profile-photo" alt="Heather Dice" />
                    </div>

                    {/* section under photo */}
                    <div className="under-photo">
                        {/* name & title */}
                        <span className="name">Heather Dice</span>
                        <span className="title">Frontend Web Developer</span>

                        {/* buttons */}
                        <button className="follow-msg-btns">Follow</button>
                        <button className="follow-msg-btns">Message</button>
                    </div>

                </div>

                {/* right column */}
                <div className="right-column">
                    <div className="row">
                        <span className="numbers">523</span>
                        <span className="categories">Posts</span>    
                    </div>
                    <div className="row">
                        <span className="numbers">1387</span>
                        <span className="categories">Likes</span>    
                    </div>
                    <div className="row">
                        <span className="numbers">146</span>
                        <span className="categories">Followers</span>    
                    </div>
                </div>
            </div>

        </div>

    )
}