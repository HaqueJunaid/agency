"use client";

import { useRef, useCallback } from "react";
import { animate } from "motion/react";
import type { Founder } from "@/constants";
import { ArrowUpIcon } from "lucide-react";

interface FounderCardProps {
    founder: Founder;
    index: number;
    total: number;
    onOpen: (index: number, rect: DOMRect) => void;
    hidden: boolean;
}

export default function FounderCard({ founder, index, total, onOpen, hidden }: FounderCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = useCallback(() => {
        if (!cardRef.current || !imgRef.current || !arrowRef.current) return;
        animate(cardRef.current, { y: -8 }, { type: "spring", stiffness: 300, damping: 20 });
        animate(imgRef.current, { scale: 1.08 }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
        animate(arrowRef.current, { rotate: 45, scale: 1.1 }, { type: "spring", stiffness: 400, damping: 20 });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!cardRef.current || !imgRef.current || !arrowRef.current) return;
        animate(cardRef.current, { y: 0 }, { type: "spring", stiffness: 300, damping: 20 });
        animate(imgRef.current, { scale: 1.04, x: 0, y: 0 }, { duration: 0.7 });
        animate(arrowRef.current, { rotate: 0, scale: 1 }, { type: "spring", stiffness: 400, damping: 20 });
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!cardRef.current || !imgRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        animate(imgRef.current, { x: x * 10, y: y * 10 }, { duration: 0.35 });
    }, []);

    const handleClick = useCallback(() => {
        if (!cardRef.current) return;
        onOpen(index, cardRef.current.getBoundingClientRect());
    }, [index, onOpen]);

    return (
        <article
            ref={cardRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ visibility: hidden ? "hidden" : "visible" }}
            className="relative overflow-hidden cursor-pointer isolate will-change-transform
                        h-[min(62vw,680px)] min-h-125
                        max-sm:min-h-120 max-sm:h-140"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black/5 to-black/80 pointer-events-none" />

            {/* Photo */}
            <img
                ref={imgRef}
                src={founder.images[0]}
                alt={founder.name}
                style={{ transform: "scale(1.04)" }}
                className="absolute inset-0 w-full h-full object-cover grayscale will-change-transform"
            />

            {/* Number */}
            <span className="absolute top-5.5 left-5.5 z-3 text-white/65 text-[10px] tracking-[.15em] font-label">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            {/* Arrow button */}
            <span
                ref={arrowRef}
                className="absolute top-5 right-5 z-4 grid w-10.5 h-10.5 place-items-center
                           border border-white/25 rounded-full text-white text-base
                           transition-colors duration-300"
            >
                <ArrowUpIcon className="size-4 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>

            {/* Content */}
            <div className="absolute left-6.25 right-6.25 bottom-6.25 z-3">
                <div className="mb-2 text-brand-tertiary text-[10px] tracking-[.14em] uppercase font-label font-bold">
                    {founder.role}
                </div>
                <h2
                    className="font-serif font-normal leading-[.9] tracking-tighter"
                    style={{ fontSize: "clamp(38px,4vw,65px)" }}
                >
                    {founder.name}
                </h2>
                <p className="mt-3 text-white/65 text-xs leading-relaxed max-w-70 font-sans">
                    {founder.shortBio}
                </p>
            </div>
        </article>
    );
}
