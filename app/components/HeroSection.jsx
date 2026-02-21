"use client";

export default function HeroSection({ visible }) {
    return (
        <section className={`hero-section hero-reveal-mask ${visible ? "revealed" : ""}`}>
            <div className="hero-bg">
                <img src="/hero.png" alt="Luxury minimalist interior design" />
            </div>
            <div className="hero-overlay" />
            <div className={`hero-content ${visible ? "visible" : ""}`}>
                <h1 className="hero-tagline">Crafting Spaces That Inspire</h1>
                <p className="hero-subtitle">
                    Where architecture meets artistry — minimal interiors designed with
                    precision, warmth, and timeless elegance.
                </p>
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </div>
            </div>
        </section>
    );
}
