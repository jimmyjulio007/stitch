'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FEATURES } from '@/shared/config/content';

export function UnmatchedFeaturesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        gsap.from('.features-title', {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            },
        });

        gsap.from('.feature-card', {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: '.feature-card',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    }, { scope: sectionRef });

    return (
        <section className="bg-stone-900 dark:bg-slate-950 py-32 px-6 text-white rounded-t-[3rem] md:rounded-t-[5rem]" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <h2 className="features-title font-display text-5xl md:text-7xl mb-24 text-center">Unmatched creative power.</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
                    {FEATURES.map(({ Icon, title, desc }) => (
                        <div key={title} className="feature-card space-y-4">
                            <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                            <h4 className="text-xl font-medium">{title}</h4>
                            <p className="text-stone-400 font-light">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
