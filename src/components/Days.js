import React, { useState } from "react";
import "../styles/Days.css";
import dayComponents from "./dayComponents";
import Pagination from "./Pagination";

const itemsPerPage = 10;

export default function Days() {
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = dayComponents.slice(startIndex, endIndex);

    return (
        <>
            <h2 className="days-title">Days</h2>
            <div className="page-container">
                <div className="grid-wrapper">
                    {currentItems.map(({ component: DayComponent, title }, index) => (
                        <div key={index} className="grid-rows">
                            <div className="grid-blocks">
                                <h3 className="day-heading">{title}</h3>
                                <DayComponent />
                            </div>
                        </div>
                    ))}
                </div>

                <Pagination
                    totalItems={dayComponents.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    )
}