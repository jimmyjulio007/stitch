'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/shared/config/content';

export function FaqSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    useGSAP(() => {
        if (!sectionRef.current) return;

        gsap.from('.faq-title', {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-title',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        gsap.from('.faq-item', {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-item',
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
        });
    }, { scope: sectionRef });

    const toggleFaq = (index: number) => {
        const item = document.querySelector(`.faq-content-${index}`);
        const currentActive = activeIndex !== null ? document.querySelector(`.faq-content-${activeIndex}`) : null;

        if (activeIndex === index) {
            // Close current
            gsap.to(item, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
            setActiveIndex(null);
        } else {
            // Close old
            if (currentActive) {
                gsap.to(currentActive, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
            }
            // Open new
            setActiveIndex(index);
            gsap.fromTo(item,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
            );
        }
    };

    return (
        <section className="py-32 px-6" id="faq" ref={sectionRef}>
            <div className="max-w-3xl mx-auto">
                <h2 className="faq-title font-display text-5xl mb-16 text-center">Common Questions</h2>
                <div className="space-y-2">
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className="faq-item border-b border-stone-200 dark:border-slate-800 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex justify-between items-center py-6 text-left cursor-pointer group"
                            >
                                <h4 className="text-xl font-medium group-hover:text-primary transition-colors">{faq.question}</h4>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeIndex === i ? 'rotate-180 text-primary' : ''}`} />
                            </button>
                            <div
                                className={`faq-content-${i} overflow-hidden`}
                                style={{ height: i === 0 ? 'auto' : 0, opacity: i === 0 ? 1 : 0 }}
                            >
                                <div className="pb-8 text-stone-600 dark:text-slate-400 leading-relaxed text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
