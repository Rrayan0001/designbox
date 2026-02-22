"use client";

import { useEffect, useState } from "react";

export default function MobileMenu({ visible }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            // Restore based on animation state
            if (document.body.classList.contains("animation-complete")) {
                document.body.style.overflow = "auto";
            }
        }
        return () => {
            if (document.body.classList.contains("animation-complete")) {
                document.body.style.overflow = "auto";
            }
        };
    }, [menuOpen]);

    return (
        <>
            {/* Hamburger button — rendered outside header at its own z-index */}
            <button
                className={`hamburger ${menuOpen ? "active" : ""} ${visible ? "visible" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
            </button>

            {/* Overlay — click to close */}
            <div
                className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-out drawer */}
            <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-menu-logo">
                        <span className="logo-part-design">design</span>
                        <span className="logo-part-boxx">boxx</span>
                        <span className="logo-part-studios">studios</span>
                    </span>
                    <button
                        className="mobile-menu-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>
                <ul className="mobile-menu-nav">
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#studio" onClick={handleLinkClick}>Studio</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}
