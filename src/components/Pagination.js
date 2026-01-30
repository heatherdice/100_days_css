import React, { useState } from "react";
import "../styles/Pagination.css";

export default function Pagination({ totalItems, itemsPerPage = 10 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <nav aria-label="Pagination" className="pag-container">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>

            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    style={{ fontWeight: page === currentPage ? "bold" : "normal" }}
                >
                {page}
                </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </nav>
    )
}
