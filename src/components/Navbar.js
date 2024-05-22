import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
// import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import cssLogo from "../assets/images/cssLogo.ico";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

export default function Navbar() {
    // determine screen size on load, set to variable name
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    // mobile menu open state, initial value set to closed
    const [dropdownOpen, setDropdownOpen] = useState("closed");

    // delay handleResize function until 300ms after last resize event, preventing constant function calls
    const handleResize = useCallback(_.debounce(() => {
        // determine screen type upon resizing
        setScreenType(window.innerWidth <= 600 ? 'mobile' : 'desktop');
        // test
        console.log(screenType);

        // close dropdown on resize
        if(dropdownOpen != "closed") {
            setDropdownOpen("closed");
        }
    }, 300), [screenType, dropdownOpen]); // ensure latest state values are used

    // run eventListeners when handleResize is called
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);
    
    // open/close mobile menu
    const toggleDropdown = () => {
        setDropdownOpen(prevState => prevState === "closed" ? "open" : "closed");
    };

    const navLinks = [
        {
            link:'/about',
            title: 'About'
        },
        {
            title: 'Days',
            dropdown: true,
            subLinks: [
                {link: '/1-10', title: 'Days 1-10'},
                {link: '/11-20', title: 'Days 11-20'},
                {link: '/21-30', title: 'Days 21-30'},
                {link: '/31-40', title: 'Days 31-40'},
                {link: '/41-50', title: 'Days 41-50'},
                {link: '/51-60', title: 'Days 51-60'},
                {link: '/61-70', title: 'Days 61-70'},
                {link: '/71-80', title: 'Days 71-80'},
                {link: '/81-90', title: 'Days 81-90'},
                {link: '/91-100', title: 'Days 91-100'}        
            ]
        },
        {
            link: '/learn-more',
            title: 'Learn More'
        }
    ]

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={cssLogo} alt="css logo" className="css-logo-navbar" />
                    <span className="navbar-title">100 Days of CSS</span>
                </div>
                {screenType === 'desktop' ? (
                    <ul className="desktop-nav">
                        {navLinks.map((navbar) =>
                            <li key={navbar.title} className="desktop-navbar-links">
                                <a to={navbar.link}>
                                    {navbar.title}
                                </a>
                            </li>
                        )}
                    </ul>
                ) : (
                    // triggers toggleDropdown function onCLick
                    <Hamburger onClick={toggleDropdown} />
                )}
            </nav>
            {/* when dropdown is open, render component */}
            {dropdownOpen === "open" && (
                <Dropdown navLinks={navLinks} isOpen={dropdownOpen} />
            )}
        </>
    )
}