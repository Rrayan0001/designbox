"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function HeroSection({ visible }) {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Smooth springs for mouse movement
    const smoothX = useSpring(0, { stiffness: 40, damping: 20 });
    const smoothY = useSpring(0, { stiffness: 40, damping: 20 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;
        // Normalize coordinates from -1 to 1 based on screen size
        const x = (e.clientX / clientWidth) * 2 - 1;
        const y = (e.clientY / clientHeight) * 2 - 1;
        setMousePos({ x, y });
    };

    useEffect(() => {
        smoothX.set(mousePos.x);
        smoothY.set(mousePos.y);
    }, [mousePos, smoothX, smoothY]);

    // Background image moves opposite to mouse by a subtle amount (e.g. max 5%)
    const bgX = useTransform(smoothX, [-1, 1], ["2%", "-2%"]);
    const bgY = useTransform(smoothY, [-1, 1], ["2%", "-2%"]);

    // Editorial Tagline Array (Massive lines)
    const lines = ["CRAFTING", "SPACES", "THAT INSPIRE"];

    const lineVariants = {
        hidden: { y: "110%", rotateZ: 2 },
        visible: {
            y: "0%",
            rotateZ: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className={`hero-section hero-reveal-mask ${visible ? "revealed" : ""}`}
            onMouseMove={handleMouseMove}
        >
            {/* Dark premium film grain overlay */}
            <div className="premium-grain-overlay" />

            {/* Brutalist Architectural Accents */}
            <motion.div
                className="hero-abstract-line"
                initial={{ scaleY: 0 }}
                animate={visible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Parallax Background wrapped in a slightly scaled up div to hide empty edges */}
            <div className={`hero-parallax-wrapper ${visible ? "animate-bg" : ""}`}>
                <motion.div
                    className="hero-bg"
                    style={{ x: bgX, y: bgY, scale: 1.05 }}
                >
                    <img src="/hero.png" alt="High contrast monochrome interior" />
                </motion.div>
                <div className="hero-overlay" />
            </div>

            <div className="hero-content">
                <div style={{ marginBottom: "2rem" }}>
                    {lines.map((text, idx) => (
                        <span className="hero-line-mask" key={idx}>
                            <motion.span
                                className="hero-tagline"
                                variants={lineVariants}
                                initial="hidden"
                                animate={visible ? "visible" : "hidden"}
                                transition={{ delay: 0.8 + (idx * 0.15) }}
                            >
                                {text}
                            </motion.span>
                        </span>
                    ))}
                </div>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, x: -20 }}
                    animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Where architecture meets the void. Minimal interiors designed with
                    absolute precision and stark geometry.
                </motion.p>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={visible ? { opacity: 0.6 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                >
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </motion.div>
            </div>
        </section>
    );
}
