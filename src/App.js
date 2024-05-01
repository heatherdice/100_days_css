import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <footer>
            <p>
                <a href="https://github.com/heatherdice/100_days_css">Code</a> by Heather Dice
            </p>
            </footer>
        </div>
    );
}