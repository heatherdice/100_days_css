import React, { useState, useLayoutEffect, useEffect, useCallback } from "react";
import _ from "lodash";
import { Link } from 'react-scroll';
// import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import cssLogo from "../assets/images/cssLogo.ico";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

export default function Navbar() {
    // determine screen size on load, set to variable name
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    // mobile menu open state, initial value set to closed
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // // delay handleResize function until 300ms after last resize event, preventing constant function calls
    // const handleResize = useCallback(_.debounce(() => {
    //     // determine screen type upon resizing
    //     setScreenType(window.innerWidth <= 600 ? 'mobile' : 'desktop');
    //     // test
    //     console.log(screenType);

    //     // close dropdown on resize
    //     if(dropdownOpen) {
    //         setDropdownOpen(false);
    //     }
    // }, 300), [screenType, dropdownOpen]); // ensure latest state values are used

    // // run eventListeners when handleResize is called
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
        
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [handleResize]);
    
    // // open/close mobile menu
    // const toggleDropdown = () => {
    //     setDropdownOpen(prevState => !prevState);
    //     console.log("TOGGLED DROPDOWN");
    // };

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

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }


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

                        {dropdownOpen ? (
                            <Dropdown 
                                navLinks={navLinks} 
                                isOpen={dropdownOpen} linkClick={toggleDropdown}
                                className="open-dropdown" 
                            />
                        ) : (
                            <Dropdown 
                                navLinks={navLinks} 
                                isOpen={dropdownOpen} 
                                linkClick={toggleDropdown}
                                className="close-dropdown" 
                            />
                        )}
                    </>
                )}
            </nav>
        </>
    )
}