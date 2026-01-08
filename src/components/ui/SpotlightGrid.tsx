"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export function SpotlightGrid() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Grid - Faint */}
            <div
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
                style={{ backgroundSize: '30px 30px' }}
            />

            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center transition-opacity duration-300"
                style={{
                    backgroundSize: '30px 30px',
                    maskImage: `radial-gradient(350px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(350px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    opacity: 0.15
                }}
            />

            {/* Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>
    );
}
