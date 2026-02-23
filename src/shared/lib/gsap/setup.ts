'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

export function setupGSAP() {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Use standard GSAP defaults
        gsap.defaults({
            ease: 'power3.out',
            duration: 0.8,
        });
    }
}
