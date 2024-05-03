import React, { useEffect, useState } from "react";
import "../styles/Dropdown.css";

// @TODO: dropdown needs to open up below navbar

export default function Dropdown({ props }) {
    // set initial dropdown state to false
    const [dropdown, setDropdown] = useState(false);

    // close dropdown on resize
    useEffect(() => {
        //handle window resize, close dropdown if open when window size changes
        const handleResize = () => {
            if (dropdown) {
                setDropdown(false);
            }
        };
        // attach event listner
        window.addEventListener('resize', handleResize);

        // cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dropdown]);

    return (
        // <div className="dropdown static">
            <ul className="dropdown-links">
                {props.map((link, index) => (
                    <li key={index} className="link-items">
                        <a to={link.link}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        // </div>
    );
};