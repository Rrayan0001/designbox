"use client";

import { useEffect, useState } from "react";

export default function Header({ visible }) {
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
            {/* Logo space — the IntroAnimation text flies into this area */}
            <div className="header-logo-placeholder" />
            <nav className="header-nav-desktop">
                <ul className="header-nav">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#studio">Studio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
