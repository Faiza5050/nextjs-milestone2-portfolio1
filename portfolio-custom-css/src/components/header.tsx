"use client";

import { useState } from "react";
import "../style/header.css";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <h1 className="default">Faiza Kanwal</h1>
                <h1 className="hover">Front-end Developer</h1>
            </div>
            <div className="header1">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={isMenuOpen ? "line open" : "line"}></div>
                    <div className={isMenuOpen ? "line open" : "line"}></div>
                    <div className={isMenuOpen ? "line open" : "line"}></div>
                </div>

                <ul className={`link ${isMenuOpen ? "open" : ""}`}>
                    <li>
                        <Link className="nav" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav" href="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav" href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;
