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
        const x = (e.clientX / clientWidth) * 2 - 1;
        const y = (e.clientY / clientHeight) * 2 - 1;
        setMousePos({ x, y });
    };

    useEffect(() => {
        smoothX.set(mousePos.x);
        smoothY.set(mousePos.y);
    }, [mousePos, smoothX, smoothY]);

    const bgX = useTransform(smoothX, [-1, 1], ["2%", "-2%"]);
    const bgY = useTransform(smoothY, [-1, 1], ["2%", "-2%"]);

    return (
        <section
            ref={containerRef}
            className={`hero-section hero-reveal-mask ${visible ? "revealed" : ""}`}
            onMouseMove={handleMouseMove}
        >
            {/* Dark premium film grain overlay */}
            <div className="premium-grain-overlay" />

            {/* Parallax Background */}
            <div className={`hero-parallax-wrapper ${visible ? "animate-bg" : ""}`}>
                <motion.div
                    className="hero-bg"
                    style={{ x: bgX, y: bgY, scale: 1.05 }}
                >
                    <img src="/hero.png" alt="High contrast monochrome interior" />
                </motion.div>
                <div className="hero-overlay" />
            </div>
        </section>
    );
}
