import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <h3 className="heading-nav"><a href="/">Nk.</a></h3>

            <div className="menu-icon" onClick={() => setOpen(!open)}>
                <div className={`bar ${open ? "change" : ""}`}></div>
                <div className={`bar ${open ? "change" : ""}`}></div>
                <div className={`bar ${open ? "change" : ""}`}></div>
            </div>

            <ul className={open ? "nav-links active" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );

}
export default Header;