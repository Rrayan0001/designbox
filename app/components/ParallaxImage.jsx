"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({
    src,
    alt,
    className = "",
    speed = 0.2, // A value between 0.1 and 0.5 is usually best
    height = "100vh"
}) {
    const ref = useRef(null);

    // Track scroll progress within the boundaries of this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to a Y translation percentage
    // e.g. from -20% to 20%
    const yTransform = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    return (
        <div ref={ref} className={`parallax-container ${className}`} style={{ height }}>
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y: yTransform,
                    scale: 1 + speed, // Scale up slightly so the image doesn't show edges during parallax
                }}
                className="parallax-img"
            />
        </div>
    );
}
