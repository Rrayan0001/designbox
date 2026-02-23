"use client";

import { useEffect, useState } from "react";

export default function Header({ visible, showStaticLogo = false }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-header ${visible ? "visible" : ""} ${scrolled ? "scrolled" : ""}`}>
            {/* Logo space — the IntroAnimation text flies into this area, or statically rendered on inner pages */}
            <div className={`header-logo-placeholder ${showStaticLogo ? "has-static-logo" : ""}`}>
                {showStaticLogo && (
                    <a href="/" className="header-static-logo">
                        <span className="logo-part-design">design</span>
                        <span className="logo-part-boxx">boxx</span>
                        <span className="logo-part-studios">studios</span>
                    </a>
                )}
            </div>
            <nav className="header-nav-desktop">
                <ul className="header-nav">
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#studio">Studio</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
