'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFadeIn } from "@/shared/lib/hooks/useFadeIn";
import { AnimatedSVGDecor } from "@/shared/ui/AnimatedSVGDecor";

export function HeroSection() {
    const containerRef = useFadeIn({ stagger: 0.1, y: 30 });
    const limitlessRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!limitlessRef.current) return;

        // Initialize with empty text but maintain layout if needed 
        // Or just clear it and type it.
        const target = limitlessRef.current;
        const fullText = "limitless";

        // Preserve height by keeping text but hiding it visually during initialization if needed
        // GSAP TextPlugin will handle the reveal
        target.innerText = "";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "top 90%",
            }
        });

        tl.to(target, {
            duration: 1.5,
            text: fullText,
            ease: "none",
            delay: 0.5,
        });

    }, { scope: containerRef });

    return (
        <header className="pt-40 pb-20 px-6 hero-glow relative overflow-hidden">
            <AnimatedSVGDecor />
            <div className="max-w-7xl mx-auto text-center" ref={containerRef}>
                <h1 className="font-display text-7xl md:text-9xl leading-[0.9] mb-8 tracking-tighter">
                    Elevating brands with <br />
                    <span
                        ref={limitlessRef}
                        className="font-handwriting text-primary inline-block min-w-[200px]"
                    >
                        limitless
                    </span> design.
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-stone-600 dark:text-slate-400 font-light leading-relaxed mb-12">
                    A premium design subscription for forward-thinking brands. One flat monthly fee. Unlimited requests. Expertly crafted in days, not weeks.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="bg-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform pricing-card-glow cursor-pointer" href="#pricing">
                        View Plans
                    </a>
                    <a className="px-10 py-5 rounded-full border border-stone-300 dark:border-slate-700 text-lg font-semibold hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer" href="#work">
                        Explore Our Work
                    </a>
                </div>
            </div>
        </header>
    );
}
