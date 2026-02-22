"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation({ onComplete }) {
    // Animation phases: init → grid → reveal → transition → complete
    const [phase, setPhase] = useState("init");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("grid"), 200);
        const t2 = setTimeout(() => setPhase("reveal"), 1000);
        const t3 = setTimeout(() => setPhase("transition"), 2800);
        const t4 = setTimeout(() => {
            setPhase("complete");
            onComplete?.();
        }, 4300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onComplete]);

    const cinematicEase = "cubic-bezier(0.76, 0, 0.24, 1)";
    const isTransitioning = phase === "transition" || phase === "complete";
    const isComplete = phase === "complete";

    return (
        <>
            {/* ===== BLACK OVERLAY (Wipes upward to reveal hero) ===== */}
            <div
                className="intro-black-overlay"
                style={{
                    transitionTimingFunction: cinematicEase,
                    clipPath: isTransitioning
                        ? "inset(0 0 100% 0)"
                        : "inset(0 0 0 0)",
                }}
            >
                {/* Subtle Architectural Grid Lines */}
                <div
                    className={`intro-grid-line intro-grid-v1 ${phase !== "init" ? "animate" : ""}`}
                    style={{ transitionTimingFunction: cinematicEase }}
                />
                <div
                    className={`intro-grid-line intro-grid-v2 ${phase !== "init" ? "animate" : ""}`}
                    style={{ transitionTimingFunction: cinematicEase }}
                />
                <div
                    className={`intro-grid-line intro-grid-h1 ${phase !== "init" ? "animate" : ""}`}
                    style={{ transitionTimingFunction: cinematicEase }}
                />
            </div>

            {/* ===== SUBTITLE (ARCHITECTURE + INTERIORS) ===== */}
            <div
                className="intro-subtitle-wrapper"
                style={{
                    transitionTimingFunction: cinematicEase,
                    opacity:
                        phase === "reveal"
                            ? 1
                            : 0,
                    transform:
                        phase === "reveal"
                            ? "translate(-50%, 0)"
                            : "translate(-50%, 8px)",
                    pointerEvents: "none",
                }}
            >
                <span className="intro-subtitle-text">
                    ARCHITECTURE &nbsp;+&nbsp; INTERIORS
                </span>
            </div>

            {/* ===== LOGO TEXT (Transitions from center to header) ===== */}
            <h1
                className="intro-logo-text"
                style={{
                    transitionTimingFunction: cinematicEase,
                    willChange: "top, left, transform, font-size, letter-spacing",

                    // Position: center → header top-left
                    ...(isTransitioning
                        ? {
                            top: "var(--header-row-center)",
                            left: "clamp(1.5rem, 4vw, 3rem)",
                            transform: "translate(0, -50%) scaleX(1)",
                            fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                            letterSpacing: "0.08em",
                        }
                        : {
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) scaleX(${phase === "init" || phase === "grid"
                                    ? 1.08
                                    : 1
                                })`,
                            fontSize: "clamp(2rem, 6vw, 5rem)",
                            letterSpacing: "0.12em",
                        }),

                    // Clip-path reveal (left-to-right)
                    clipPath:
                        phase === "init" || phase === "grid"
                            ? "inset(0 100% 0 0)"
                            : "inset(0 0 0 0)",
                }}
            >
                <span className="logo-part-design">design</span>
                <span className="logo-part-boxx">boxx</span>
                <span className="logo-part-studios">studios</span>
            </h1>
        </>
    );
}
