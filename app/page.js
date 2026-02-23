"use client";

import { useState, useCallback } from "react";
import IntroAnimation from "./components/IntroAnimation";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import ProjectCard from "./components/ProjectCard";
import ScrollReveal from "./components/ScrollReveal";
import ParallaxImage from "./components/ParallaxImage";
import Footer from "./components/Footer";
import Link from "next/link";
import { PROJECTS_DATA } from "./data/projects";



export default function Home() {
    const [animationDone, setAnimationDone] = useState(false);

    const handleAnimationComplete = useCallback(() => {
        setAnimationDone(true);
        document.body.classList.add("animation-complete");
    }, []);

    return (
        <>
            {/* Intro Animation — persists as the logo after animation */}
            <IntroAnimation onComplete={handleAnimationComplete} />

            {/* Header (nav only, logo is the animated text) */}
            <Header visible={animationDone} />

            {/* Mobile hamburger menu */}
            <MobileMenu visible={animationDone} />

            {/* Hero Section */}
            <HeroSection visible={animationDone} />

            {/* SELECTED PROJECTS */}
            <section className="content-section content-section--platinum" id="projects">
                <ScrollReveal>
                    <h2>Projects</h2>
                    <p>
                        Each space we design is a dialogue between form and function — where
                        every material, angle, and light source is considered with
                        architectural intent.
                    </p>
                </ScrollReveal>

                <div className="projects-grid">
                    {PROJECTS_DATA.map((project, idx) => (
                        <ScrollReveal key={project.id} delay={idx * 0.1}>
                            <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ProjectCard
                                    title={project.title}
                                    category={project.category}
                                    year={project.year}
                                    imageSrc={project.coverImage}
                                />
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* PARALLAX INTERSTITIAL */}
            <ParallaxImage
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                alt="Studio Interior detail"
                height="60vh"
            />

            {/* OUR STUDIO */}
            <section className="content-section content-section--dark" id="studio">
                <ScrollReveal>
                    <h2>Our Studio</h2>
                    <p style={{ marginBottom: "2rem" }}>
                        Founded on the belief that great design is invisible, Design Boxx
                        Studios creates environments that feel both inevitable and extraordinary.
                        We blur the lines between architecture, interior design, and bespoke
                        object creation.
                    </p>
                    <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                        <span style={{ color: "var(--gold)" }}>Founders:</span> Ar. Akash kalbagilmath &amp; Ar. Hazarath Bilal
                    </p>
                </ScrollReveal>

                <ul className="approach-list">
                    <ScrollReveal delay={0.1} yOffset={20}>
                        <li className="approach-item">
                            <span className="approach-number">01</span>
                            <h3 className="approach-title">Architecture</h3>
                            <p className="approach-desc">Translating concepts into rigorous, functional layouts where light, volume, and flow work in perfect harmony to create iconic structures.</p>
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} yOffset={20}>
                        <li className="approach-item">
                            <span className="approach-number">02</span>
                            <h3 className="approach-title">Interior</h3>
                            <p className="approach-desc">Curating rare materials, textures, and bespoke detailing to shape internal spaces that evoke emotion and elevate the human experience.</p>
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3} yOffset={20}>
                        <li className="approach-item">
                            <span className="approach-number">03</span>
                            <h3 className="approach-title">Construction</h3>
                            <p className="approach-desc">Executing designs with precision and master craftspeople, ensuring flawless translation from architectural vision to tangible reality.</p>
                        </li>
                    </ScrollReveal>
                </ul>
            </section>

            {/* FOOTER */}
            <Footer />
        </>
    );
}
