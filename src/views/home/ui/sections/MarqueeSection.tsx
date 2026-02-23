'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MARQUEE_TEXT = [
    "High-end Branding",
    "Digital Strategy",
    "Product Design",
    "Visual Identity",
    "Art Direction",
    "UI/UX Design",
    "Interaction Design",
    "Creative Development"
];

export function MarqueeSection() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!marqueeRef.current) return;

        const content = marqueeRef.current.querySelector('.marquee-content');
        if (!content) return;

        const totalWidth = content.clientWidth;

        gsap.to(content, {
            x: -totalWidth / 2,
            duration: 30,
            repeat: -1,
            ease: "none"
        });
    }, { scope: marqueeRef });

    return (
        <section className="relative py-24 overflow-hidden select-none bg-stone-900 flex items-center justify-center">
            {/* Slanted Band */}
            <div className="absolute inset-0 bg-primary/95 -rotate-2 scale-110 shadow-2xl z-10 py-10 flex items-center">
                <div ref={marqueeRef} className="w-full overflow-hidden whitespace-nowrap">
                    <div className="marquee-content inline-block">
                        {[...MARQUEE_TEXT, ...MARQUEE_TEXT].map((text, i) => (
                            <span
                                key={i}
                                className="inline-block px-12 text-white font-display text-5xl md:text-7xl font-bold uppercase italic tracking-tighter"
                            >
                                {text}
                                <span className="ml-12 opacity-30">/</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Static Band Background */}
            <div className="absolute inset-0 bg-stone-800 rotate-1 scale-110 opacity-50"></div>
        </section>
    );
}
