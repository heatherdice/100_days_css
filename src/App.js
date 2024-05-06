import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Days from "./components/Days";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Days />
            <footer>
                <p className="footer-text">
                    <a href="https://github.com/heatherdice/100_days_css">Code</a> by Heather Dice
                </p>
            </footer>
        </div>
    );
}