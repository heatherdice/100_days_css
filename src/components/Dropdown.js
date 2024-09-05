import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Dropdown.css";

export default function Dropdown({ navLinks, isOpen, linkClick }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setDropdownOpen(prevState => !prevState);
        console.log("TOGGLED DROPDOWN");
        if (linkClick) onClick(event);
    };


    return (
        <div className={`dropdown ${isOpen ? "open-dropdown" : "close-dropdown"}`}>
            <ul className="dropdown-links">
                {navLinks.map((link, index) => (
                    <li key={index} className="link-items" onClick={linkClick}>
                        <Link 
                            to={link.link}
                            smooth={true}
                            duration={500}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};