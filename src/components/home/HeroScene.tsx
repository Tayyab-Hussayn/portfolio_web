"use client";

import { useEffect, useRef } from "react";
// We'll import it dynamically or assume it's available after install. 
// If TypeScript complains, we might need a @ts-ignore or declaration.
// Based on the HTML, it exports a default function.

export function HeroScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const instanceRef = useRef<any>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let mounted = true;

        const init = async () => {
            try {
                // Dynamic import to avoid SSR issues and potential build time errors if the lib relies on window
                const module = await import("threejs-components/build/cursors/tubes1" as any);
                const TubesCursor = module.default;

                if (mounted && canvasRef.current) {
                    instanceRef.current = TubesCursor(canvasRef.current, {
                        tubes: {
                            colors: ["#2d1b4e", "#453478", "#6c5ce7"], // Darker colors for contrast on light bg
                            lights: {
                                intensity: 200,
                                colors: ["#21d4fd", "#6c5ce7", "#3498db", "#ffffff"]
                            }
                        }
                    });
                }
            } catch (error) {
                console.error("Failed to load 3D scene:", error);
            }
        };

        init();

        return () => {
            mounted = false;
            if (instanceRef.current && typeof instanceRef.current.dispose === "function") {
                instanceRef.current.dispose();
            }
        };
    }, []);

    const handleCanvasClick = () => {
        if (instanceRef.current) {
            // Random colors generator
            const randomColors = (count: number) => {
                return new Array(count)
                    .fill(0)
                    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
            };

            const newTubeColors = randomColors(3);
            const newLightColors = randomColors(4);

            if (instanceRef.current.tubes?.setColors) instanceRef.current.tubes.setColors(newTubeColors);
            if (instanceRef.current.tubes?.setLightsColors) instanceRef.current.tubes.setLightsColors(newLightColors);
        }
    };

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 w-full h-full cursor-pointer"
            onClick={handleCanvasClick}
        />
    );
}
