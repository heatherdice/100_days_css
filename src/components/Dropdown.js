import React from "react";
import "../styles/Dropdown.css";

export default function Dropdown({ navLinks, isOpen }) {
    return (
        <div className={`dropdown ${isOpen ? "open-dropdown" : "close-dropdown"}`}>
            <ul className="dropdown-links">
                {navLinks.map((link, index) => (
                    <li key={index} className="link-items">
                        <a to={link.link}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};