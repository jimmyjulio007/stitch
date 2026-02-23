import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface UseFadeInOptions {
    duration?: number;
    delay?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
    stagger?: number;
    start?: string;
    ease?: string;
    trigger?: string | HTMLElement | null;
}

export function useFadeIn({
    duration = 0.9,
    delay = 0,
    y = 40,
    x = 0,
    scale = 1,
    rotation = 0,
    stagger = 0,
    start = 'top 85%',
    ease = 'power3.out',
    trigger,
}: UseFadeInOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        const props: gsap.TweenVars = {
            opacity: 0,
            y,
            x,
            scale,
            rotation,
            duration,
            delay,
            ease,
            scrollTrigger: {
                trigger: trigger || ref.current,
                start,
                toggleActions: 'play none none none',
            },
        };

        if (stagger > 0) {
            const children = gsap.utils.toArray(ref.current.children);
            gsap.from(children, { ...props, stagger });
        } else {
            gsap.from(ref.current, props);
        }
    });

    return ref;
}

interface UseParallaxOptions {
    speed?: number;
    start?: string;
    end?: string;
}

export function useParallax({
    speed = 50,
    start = 'top bottom',
    end = 'bottom top',
}: UseParallaxOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            y: -speed,
            ease: 'none',
            scrollTrigger: {
                trigger: ref.current,
                start,
                end,
                scrub: 1,
            },
        });
    });

    return ref;
}
