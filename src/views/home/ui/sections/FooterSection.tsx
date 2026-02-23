'use client';

import { useFadeIn } from "@/shared/lib/hooks/useFadeIn";

export function FooterSection() {
    const fadeRef = useFadeIn({ y: 30 });

    return (
        <footer className="bg-accent-light dark:bg-slate-950 text-white pt-32 pb-12 px-6 rounded-t-[3rem] md:rounded-t-[5rem]" ref={fadeRef}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <h2 className="font-display text-6xl md:text-8xl mb-12">Let&apos;s create something <span className="italic text-primary">extraordinary</span> together.</h2>
                    <a className="inline-block bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform cursor-pointer" href="#pricing">Start your membership</a>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
                    <div className="flex items-center gap-2">
                        <span className="font-display text-3xl font-bold tracking-tight">Lumière</span>
                    </div>
                    <div className="flex gap-10 text-sm font-medium uppercase tracking-widest text-white/50">
                        <a className="hover:text-white transition-colors" href="#">Privacy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms</a>
                        <a className="hover:text-white transition-colors" href="#">Twitter</a>
                        <a className="hover:text-white transition-colors" href="#">Instagram</a>
                    </div>
                    <p className="text-sm text-white/40">&copy; 2024 Lumière Design Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
