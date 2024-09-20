import React from "react";
import "../../styles/dayStyles/Day10.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Day10() {
    return (
        <div className="day-container container-color10">
            
            {/* clock face */}
            <div className="day10-circles day10-outer-circle">
                <div className="day10-circles moving-circle">
                    <div className="day10-circles dotted-circle">

                        <div className="date">
                            MON 15 JAN 2015
                        </div>

                        <div className="time">
                            11:42
                        </div>

                        <div className="health-stats">
                            <div className="health-stats-row">
                            <span className="heart-rate">
                                <FontAwesomeIcon 
                                    icon={faHeart} className="heart"
                                />
                                81
                            </span>

                            <span className="kcal"> 1248 KCAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}