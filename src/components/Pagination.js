import React, { useState, useEffect } from "react";
import "../styles/Pagination.css";

export default function Pagination({ totalItems, itemsPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(0, currentPage - 2);
        let end = Math.min(totalPages - 1, start + maxVisible - 1);

        if (end - start < maxVisible - 1) {
            start = Math.max(0, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <nav aria-label="Pagination" className="pag-container">
            <button 
                onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0}
                className = "pg-btn"
            >
                Prev
            </button>

            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    style={{ fontWeight: page === currentPage ? "bold" : "normal" }}
                    className = "pg-btn"
                >
                    {page + 1}
                </button>
            ))}

            <button 
                onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}
                className="pg-btn"
            >
                Next
            </button>
        </nav>
    )
}
