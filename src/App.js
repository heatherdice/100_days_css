import React, { useEffect, useState } from "react";
import "./App.css";
import { Element } from 'react-scroll';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Days from "./components/Days";

export default function App() {
    // set initial alert state to true
    const [showAlert, setShowAlert] = useState(true);

    // only run alert on component mount
    useEffect(() => {
        if(showAlert) {
            alert("Welcome! Please note that this page is currently under construction. As a result, you might experience some bugs. Rest assured, they're being squashed! Thanks for your patience!");
            setShowAlert(false);
        }
    }, []);
    
    return (
        <div className="App">
            <Navbar />
            <Hero />
            
            <Element name="about">
                <About />
            </Element>

            <Element name="days">
                <Days />
            </Element>

            <Element name="learn-more">
                <footer>
                    <p className="footer-text">
                        <a href="https://github.com/heatherdice/100_days_css">Code</a> by Heather Dice
                    </p>
                </footer>
            </Element>
        </div>
    );
}