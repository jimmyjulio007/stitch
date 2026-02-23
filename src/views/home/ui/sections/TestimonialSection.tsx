'use client';

import Image from "next/image";
import { Quote } from "lucide-react";
import { useFadeIn } from "@/shared/lib/hooks/useFadeIn";

export function TestimonialSection() {
    const fadeRef = useFadeIn({ y: 20 });

    return (
        <section className="py-32 px-6 bg-stone-100 dark:bg-slate-900/50" ref={fadeRef}>
            <div className="max-w-4xl mx-auto text-center">
                <Quote className="w-14 h-14 text-primary/30 mx-auto mb-8" strokeWidth={1.5} />
                <p className="font-display text-4xl md:text-5xl leading-tight mb-12 flex justify-center w-full">
                    <span>
                        &ldquo;Lumière transformed our product identity in weeks. The speed is mind-blowing, but the quality is what truly sets them apart from any agency we&apos;ve ever used.&rdquo;
                    </span>
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Image
                        alt="Founder Portrait"
                        className="w-16 h-16 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyp2HfErD0S85Cvlvpd_yarpPAWZHfExeHR7RGdm688N4LmIHzi33jcDDwpFWv0dB8W1_npnRIY1veKsk8AW-cA12U-dQwNPt45RP_4l5wB-GBviou8_IH7aZv_Ypch3zDzegFsHIUAncePsL3ZokVZqmBwNAGFchq7INIh5WVjz6Le28D6wKuzCPTXoi917RThwCxXh5sKFct9_dsXuu1KRjPgYT9BVGW9Vqr5sEd2dIg4tGxNDTgIje9mw3--0qSf_y86HS3NAVW"
                        width={64}
                        height={64}
                    />
                    <div className="text-left">
                        <p className="font-bold">Julian Vossen</p>
                        <p className="text-stone-500 dark:text-slate-400 text-sm">Founder @ Aether Labs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
