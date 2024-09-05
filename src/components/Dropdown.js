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
        // note: for some reason, this class setting is important, even though it is also written in Navbar.js. Here, the ternary triggers the appearance of the dropdown menu. in Navbar.js, the ternary properly triggers the animations. even though the ternary appears to have the same functionaity in both files. need to look into this further... 
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