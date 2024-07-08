import React from "react";
import "../../styles/dayStyles/Day7.css";

export default function Day7() {
    return (
        <div className="day-container container-color7">
            <div className="day7-card">
                {/* card header */}
                <div className="day7-card-header">
                    Notifications
                </div>

                <div className="vertical-line" />

                {/* card content */}
                <div className="notifications">

                    <div className="notification-text">
                        <div>
                            <span className="times">9:24am</span>
                            <br />
                            <p>
                                <b>John Walker</b> posted a photo on your wall.
                            </p>
                        </div>

                        <div>
                            <span className="times">8:19am</span>
                            <br />
                            <p>
                                <b>Alice Parker</b> commented on your last post.
                            </p>
                        </div>

                        <div>
                            <span className="times">Yesterday</span>
                            <br />
                            <p>
                                <b>Luke Wayne</b> added you as a friend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
