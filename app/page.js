"use client";

import { useState, useCallback } from "react";
import IntroAnimation from "./components/IntroAnimation";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

export default function Home() {
    const [animationDone, setAnimationDone] = useState(false);

    const handleAnimationComplete = useCallback(() => {
        setAnimationDone(true);
        document.body.classList.add("animation-complete");
    }, []);

    return (
        <>
            {/* Intro Animation Overlay */}
            {!animationDone && (
                <IntroAnimation onComplete={handleAnimationComplete} />
            )}

            {/* Header */}
            <Header visible={animationDone} />

            {/* Hero Section */}
            <HeroSection visible={animationDone} />

            {/* Additional content sections for scrolling context */}
            <section className="content-section" id="projects">
                <h2>Selected Projects</h2>
                <p>
                    Each space we design is a dialogue between form and function — where
                    every material, angle, and light source is considered with
                    architectural intent.
                </p>
            </section>

            <section
                className="content-section"
                id="studio"
                style={{ background: "#000", color: "#fff" }}
            >
                <h2>Our Studio</h2>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Founded on the belief that great design is invisible, Design Box
                    creates environments that feel both inevitable and extraordinary.
                </p>
            </section>

            <section className="content-section" id="contact">
                <h2>Get in Touch</h2>
                <p>
                    Let us bring your vision to life. Reach out to discuss your next
                    project.
                </p>
            </section>
        </>
    );
}
