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
            // @ts-ignore
            lenisRef.current?.lenis?.raf(time * 1000);
        };

        // Bind GSAP Ticker to Lenis for perfect synchronization
        gsap.ticker.add(update);

        // Disable GSAP's default lag smoothing to prevent conflicts
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                lerp: 0.1, // The "Heaviness" of the scroll (0.1 is standard butter)
                duration: 1.5,
                smoothWheel: true,
            }}
        >
            {children as any}
        </ReactLenis>
    );
}
