import React from "react";
import { Link } from "react-scroll";
import "../styles/Dropdown.css";

export default function Dropdown({ navLinks, isOpen }) {
    return (
        <div className={`dropdown ${isOpen ? "open-dropdown" : "close-dropdown"}`}>
            <ul className="dropdown-links">
                {navLinks.map((link, index) => (
                    <li key={index} className="link-items">
                        <Link to={link.link} smooth={true} duration={500}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};