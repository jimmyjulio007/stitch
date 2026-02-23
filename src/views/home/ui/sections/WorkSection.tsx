'use client';

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFadeIn } from "@/shared/lib/hooks/useFadeIn";

export function WorkSection() {
    const sectionRef = useFadeIn({ y: 50, duration: 1 });
    const containerRef = useRef<HTMLDivElement>(null);

    const images = [
        { src: "/images/bento-pottery.png", alt: "Premium ceramic pottery", cols: "md:col-span-7", aspect: "aspect-[16/10]", width: 1120, height: 700, priority: true },
        { src: "/images/bento-editorial.png", alt: "Minimalist editorial magazine", cols: "md:col-span-5", aspect: "aspect-[4/5]", width: 560, height: 700 },
        { src: "/images/bento-app-design.png", alt: "Sleek mobile app UI", cols: "md:col-span-4", aspect: "aspect-[4/5]", width: 480, height: 600 },
        { src: "/images/bento-typography.png", alt: "Premium brand typography", cols: "md:col-span-8", aspect: "aspect-[16/8]", width: 960, height: 480 }
    ];

    const onHover = (e: React.MouseEvent, enter: boolean) => {
        const img = e.currentTarget.querySelector('img');
        if (img) {
            gsap.to(img, {
                scale: enter ? 1.1 : 1,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    };

    return (
        <section className="py-24 px-6 overflow-hidden" id="work" ref={sectionRef}>
            <div className="max-w-[1400px] mx-auto" ref={containerRef}>
                <div className="masonry-grid">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            onMouseEnter={(e) => onHover(e, true)}
                            onMouseLeave={(e) => onHover(e, false)}
                            className={`work-card col-span-12 ${img.cols} ${img.aspect} bg-stone-100 dark:bg-slate-800 rounded-2xl overflow-hidden cursor-pointer`}
                        >
                            <Image
                                alt={img.alt}
                                className="w-full h-full object-cover will-change-transform"
                                src={img.src}
                                width={img.width}
                                height={img.height}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={img.priority}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
