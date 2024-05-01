import React from "react";
// import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    const navLinks = [
        {
            link:'/about',
            title: 'About'
        },
        {
            title: 'Days',
            dropdown: true,
            subLinks: [
                {
                    link: '/1-10',
                    title: 'Days 1-10'
                },
                {
                    link: '/11-20',
                    title: 'Days 11-20'
                },
                {
                    link: '/21-30',
                    title: 'Days 21-30'
                },
                {
                    link: '/31-40',
                    title: 'Days 31-40'
                },
                {
                    link: '/41-50',
                    title: 'Days 41-50'
                },
                {
                    link: '/51-60',
                    title: 'Days 51-60'
                },
                {
                    link: '/61-70',
                    title: 'Days 61-70'
                },
                {
                    link: '/71-80',
                    title: 'Days 71-80'
                },
                {
                    link: '/81-90',
                    title: 'Days 81-90'
                },
                {
                    link: '/91-100',
                    title: 'Days 91-100'
                }        
            ]
        },
        {
            link: '/learn-more',
            title: 'Learn More'
        }
    ]

    return (
        <nav>
            <ul>
                {navLinks.map((navbar) =>
                    <li key={navbar.title}>
                        <a to={navbar.link}>
                            {navbar.title}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}