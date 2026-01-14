"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        const update = (time: number) => {
            // @ts-expect-error - lenis types are incompatible with recent React versions
            lenisRef.current?.lenis?.raf(time * 1000);
        };

        // 1. Bind GSAP Ticker to Lenis
        gsap.ticker.add(update);

        // 2. Disable GSAP lag smoothing (critical for scroll sync)
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            autoRaf={false} /* CRITICAL FIX: Stops the double-loop "hard" feeling */
            options={{
                lerp: 0.12, // Slightly lighter than 0.1
                duration: 1.2,
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 2, // Ensure 1:1 scroll ratio
                touchMultiplier: 3, // Better touch response
            }}
        >
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {children as any}
        </ReactLenis>
    );
}
