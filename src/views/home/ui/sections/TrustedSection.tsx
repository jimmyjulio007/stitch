'use client';

import { useFadeIn } from "@/shared/lib/hooks/useFadeIn";
import { TRUSTED_BRANDS } from "@/shared/config/content";

export function TrustedSection() {
    const sectionRef = useFadeIn({ duration: 0.8 });

    return (
        <section className="py-12 border-y border-stone-200 dark:border-slate-800" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-slate-500 mb-8">
                    Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                    {TRUSTED_BRANDS.map(({ Icon, label }) => (
                        <div key={label} className="flex items-center gap-2.5 text-stone-400 dark:text-slate-500 hover:text-stone-700 dark:hover:text-slate-300 transition-colors">
                            <Icon className="w-7 h-7" strokeWidth={1.5} />
                            <span className="text-sm font-semibold tracking-wide">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
