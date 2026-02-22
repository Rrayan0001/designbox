"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, category, imageSrc, year }) {
    return (
        <motion.div
            className="project-card"
            whileHover="hover"
            initial="initial"
        >
            <div className="project-card-image-wrapper">
                <motion.img
                    src={imageSrc}
                    alt={title}
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                />

                {/* Reveal Overlay on Hover */}
                <motion.div
                    className="project-card-overlay"
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="overlay-content">
                        <span className="project-year">{year}</span>
                        <div className="project-icon-wrapper">
                            <ArrowUpRight size={28} strokeWidth={1.5} color="#fff" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="project-card-meta">
                <h3 className="project-title">{title}</h3>
                <span className="project-category">{category}</span>
            </div>
        </motion.div>
    );
}
