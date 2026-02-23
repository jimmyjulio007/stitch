'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/shared/config/content';

export function PricingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        tl.from('.pricing-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        })
            .from('.pricing-card', {
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            }, '-=0.4');

    }, { scope: sectionRef });

    return (
        <section className="py-32 px-6" id="pricing" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <div className="pricing-header text-center mb-20">
                    <h2 className="font-display text-6xl md:text-7xl mb-6">Simple, exclusive pricing.</h2>
                    <p className="text-stone-500 dark:text-slate-400">Membership seats are limited to ensure highest quality output.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {PRICING_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card p-12 rounded-[2rem] flex flex-col transition-all duration-300 relative overflow-hidden ${plan.featured
                                    ? 'bg-stone-900 dark:bg-slate-950 text-white pricing-card-glow'
                                    : 'bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 hover:border-primary/50 shadow-sm'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 right-0 bg-primary px-6 py-2 rounded-bl-2xl text-sm font-bold uppercase tracking-widest text-white">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                    <p className={plan.featured ? 'text-stone-400' : 'text-stone-500 dark:text-slate-400'}>
                                        {plan.desc}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-display">${plan.price}</span>
                                    <span className={`block text-sm uppercase tracking-widest ${plan.featured ? 'text-stone-500' : 'text-stone-400'}`}>
                                        per month
                                    </span>
                                </div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                className={`w-full text-center py-4 rounded-xl font-bold transition-all cursor-pointer ${plan.featured
                                        ? 'bg-primary text-white hover:opacity-90'
                                        : 'border-2 border-accent-light dark:border-accent-dark hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-black'
                                    }`}
                                href="#pricing"
                            >
                                {plan.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

