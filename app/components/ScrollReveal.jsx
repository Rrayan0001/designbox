"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollReveal({
    children,
    width = "100%",
    delay = 0,
    yOffset = 40,
    duration = 0.8,
    once = true
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    return (
        <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1] // Beautiful cinematic ease out
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
