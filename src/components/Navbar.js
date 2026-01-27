import React, { useState, useLayoutEffect, useEffect, useCallback } from "react";
import _ from "lodash";
import { Link } from 'react-scroll';
import "../styles/Navbar.css";
import cssLogo from "../assets/images/cssLogo.ico";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

export default function Navbar() {
    // determine screen size on load, set to variable name
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    // mobile menu open states, initial values set to closed
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // dropdown toggle function
    const toggleDropdown = () => {
        setHasInteracted(true);
        setDropdownOpen(!dropdownOpen);
    }

    const handleResize = () => {
        const newScreenType = window.innerWidth <= 600 ? 'mobile' : 'desktop';
        setScreenType(newScreenType);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const navLinks = [
        {link:'about', title: 'About'},
        {link: 'days', title: 'Days'},
        {link: 'learn-more', title: 'Learn More'}
    ];

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
                                <Link 
                                    to={navbar.link} 
                                    smooth={true} 
                                    duration={500}
                                >
                                    {navbar.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                ) : (
                    // triggers toggleDropdown function onClick
                    <>
                        <Hamburger onClick={toggleDropdown} />
                    </>
                )}
            </nav>

            {screenType === 'mobile' && (
                <Dropdown 
                    navLinks={navLinks} 
                    isOpen={dropdownOpen}
                    hasInteracted={hasInteracted}
                    linkClick={toggleDropdown}
                />
            )}
        </>
    )
}