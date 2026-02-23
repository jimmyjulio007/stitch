'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const AnimatedSVGDecor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        if (!svgRef.current) return;

        const path1 = svgRef.current.querySelector('.path-1');
        const path2 = svgRef.current.querySelector('.path-2');

        if (path1 && path2) {
            gsap.to(path1, {
                attr: { d: "M 0 100 Q 250 50 500 100 T 1000 100" },
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(path2, {
                attr: { d: "M 0 150 Q 350 200 700 150 T 1000 150" },
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1
            });
        }
    }, { scope: svgRef });

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
            <svg
                ref={svgRef}
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                <path
                    className="path-1 fill-none stroke-primary stroke-[2px]"
                    d="M 0 100 Q 250 150 500 100 T 1000 100"
                />
                <path
                    className="path-2 fill-none stroke-stone-300 dark:stroke-slate-700 stroke-[1px]"
                    d="M 0 150 Q 350 100 700 150 T 1000 150"
                />
            </svg>
        </div>
    );
};
