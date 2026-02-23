'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SERVICES_STEPS } from '@/shared/config/content';

export function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const steps = gsap.utils.toArray<HTMLElement>('.service-step');

        steps.forEach((step, i) => {
            gsap.from(step, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: step,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(step.querySelector('.step-number'), {
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1 + 0.2,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: step,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });

    }, { scope: sectionRef });

    return (
        <section className="py-32 px-6" id="services" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-16">
                    {SERVICES_STEPS.map((step, i) => (
                        <div key={i} className="service-step space-y-6">
                            <span className="step-number font-display text-5xl italic text-primary inline-block">{step.number}</span>
                            <h3 className="text-2xl font-semibold">{step.title}</h3>
                            <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
