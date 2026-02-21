"use client";

import { useEffect, useState, useRef } from "react";

export default function IntroAnimation({ onComplete }) {
    const [phase, setPhase] = useState("grid"); // grid → letters → expand → hero-reveal → done
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Phase 1: Grid fades in (handled by CSS), then start letter reveal
        const t1 = setTimeout(() => {
            setAnimate(true);
            setPhase("letters");
        }, 300);

        // Phase 2: After letters are fully revealed, expand
        const t2 = setTimeout(() => {
            setPhase("expand");
        }, 2600);

        // Phase 3: After expand, trigger hero reveal
        const t3 = setTimeout(() => {
            setPhase("hero-reveal");
        }, 3400);

        // Phase 4: Animation done
        const t4 = setTimeout(() => {
            setPhase("done");
            onComplete?.();
        }, 4800);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onComplete]);

    if (phase === "done") return null;

    const text = "DESIGN BOX";
    const letters = text.split("");

    return (
        <>
            {/* Architectural grid overlay */}
            <div
                className="grid-overlay"
                style={
                    phase === "hero-reveal"
                        ? { animation: "gridFadeOut 0.8s var(--ease-smooth) forwards" }
                        : {}
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {/* Vertical lines */}
                    {Array.from({ length: 12 }, (_, i) => {
                        const x = ((i + 1) / 13) * 100;
                        return (
                            <line
                                key={`v-${i}`}
                                className="grid-line"
                                x1={`${x}%`}
                                y1="0"
                                x2={`${x}%`}
                                y2="100%"
                            />
                        );
                    })}
                    {/* Horizontal lines */}
                    {Array.from({ length: 8 }, (_, i) => {
                        const y = ((i + 1) / 9) * 100;
                        return (
                            <line
                                key={`h-${i}`}
                                className="grid-line"
                                x1="0"
                                y1={`${y}%`}
                                x2="100%"
                                y2={`${y}%`}
                            />
                        );
                    })}
                </svg>
            </div>

            {/* Main intro panel */}
            <div
                ref={containerRef}
                className={`intro-container ${phase === "hero-reveal" ? "phase-hero-reveal" : ""}`}
            >
                <div className={`wordmark-wrapper ${phase === "expand" ? "expand" : ""}`}>
                    {/* Sweep line */}
                    <div className={`mask-line ${animate ? "animate" : ""}`} />

                    {/* Letters */}
                    <div className="wordmark">
                        {letters.map((letter, i) => (
                            <span
                                key={i}
                                className={`wordmark-letter ${animate ? "animate" : ""}`}
                                style={letter === " " ? { width: "0.4em" } : {}}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
