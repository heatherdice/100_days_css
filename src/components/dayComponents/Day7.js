import React, { useRef } from "react";
import "../../styles/dayStyles/Day7.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGaugeHigh, faUser, faBell, faComments, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Day7() {
    // create reference for search icon
    const searchInputRef = useRef(null);

    // toggle search input's active class
    const handleSearchIconClick = () => {
        searchInputRef.current.classList.toggle("active-search-input");
    };

    return (
        <div className="day-container container-color7">
            <div className="day7-card">

                {/* card header */}
                <div className="day7-card-header">

                    {/* menu icon w/ notification dot */}
                    <div className="menu-icon">
                        <div className="menu-top" />
                        <div className="menu-bottom" />
                        <div className="menu-circle" />
                    </div>

                    {/* notifications title */}
                    <span className="day7-title">Notifications</span>

                    {/* search bar */}
                    <input type="text" className="search-input" placeholder="Search ..." ref={searchInputRef} />

                    {/* search icon */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass" onClick={handleSearchIconClick} />

                </div>

                {/* card content */}
                <div className="notifications">
                    <div className="vertical-line" />

                    <div className="notification-text-container">
                        <div>
                            <div className="notification-circle" />

                            <span className="times">9:24am</span>
                            <br />
                            <p className="individual-notifications">
                                <b>John Walker</b> posted a photo on your wall.
                            </p>
                        </div>

                        <div>
                            <div className="notification-circle" />

                            <span className="times">8:19am</span>
                            <br />
                            <p className="individual-notifications">
                                <b>Alice Parker</b> commented on your last post.
                            </p>
                        </div>

                        <div>
                            <div className="notification-circle" />

                            <span className="times">Yesterday</span>
                            <br />
                            <p className="individual-notifications">
                                <b>Luke Wayne</b> added you as a friend.
                            </p>
                        </div>
                    </div>
                </div>

                {/* notification menu */}
                <div className="day7-notification-menu">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGaugeHigh} className="side-menu-icons" />
                            Dashboard
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUser} className="side-menu-icons" />
                            Profile
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBell} className="side-menu-icons" />
                            Notifications
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faComments} className="side-menu-icons" />
                            Messages
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGear} className="side-menu-icons" />
                            Settings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
