"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image: string;
    aspectClass: string;
}

const projectsCol1: Project[] = [
    {
        id: "01",
        title: "Nova",
        subtitle: "Fashion Campaign",
        category: "SOCIAL ADVERTISING / ART DIRECTION",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        aspectClass: "aspect-[3/4]"
    },
    {
        id: "03",
        title: "Vanta",
        subtitle: "E-commerce Experience",
        category: "WEB DEVELOPMENT / UI DESIGN",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        aspectClass: "aspect-[4/5]"
    }
];

const projectsCol2: Project[] = [
    {
        id: "02",
        title: "Arc Studio",
        subtitle: "Digital Identity",
        category: "BRANDING / WEB DESIGN",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        aspectClass: "aspect-[4/3]"
    },
    {
        id: "04",
        title: "Monument",
        subtitle: "Social Campaign",
        category: "CREATIVE DIRECTION / PAID ADS",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
        aspectClass: "aspect-[16/10]"
    }
];

export default function SelectedWork() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress of the section relative to the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Translate values for Column 1 (slower upward shift) and Column 2 (faster downward/delayed shift)
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [40, 120]);

    // Spring physics configuration for lag/smoothness
    const springConfig = { stiffness: 80, damping: 25, mass: 0.5 };
    const smoothY1 = useSpring(y1, springConfig);
    const smoothY2 = useSpring(y2, springConfig);

    return (
        <section 
            id="services"
            ref={containerRef}
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 border-b-2 border-brand-primary bg-transparent overflow-hidden"
        >
            <div className="w-full mx-auto flex flex-col gap-20">
                {/* Header Section */}
                <div className="flex items-end justify-between border-b border-brand-primary/10 pb-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary">
                            Selected Work
                        </h2>
                        <p className="font-sans text-brand-neutral text-sm md:text-lg">
                            Ideas designed to move brands forward.
                        </p>
                    </div>
                    <Link 
                        href="/work" 
                        className="font-label font-bold text-xs md:text-sm tracking-widest text-brand-primary uppercase border-b border-brand-primary hover:text-brand-neutral hover:border-brand-neutral transition-all duration-350 pb-1"
                    >
                        VIEW ARCHIVE
                    </Link>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28 w-full items-start">
                    {/* Left Column (Column 1) */}
                    <motion.div style={{ y: smoothY1 }} className="flex flex-col gap-24 md:gap-36">
                        {projectsCol1.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>

                    {/* Right Column (Column 2) */}
                    <motion.div style={{ y: smoothY2 }} className="flex flex-col gap-24 md:gap-36 md:pt-24">
                        {projectsCol2.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div 
            className="group flex flex-col gap-6 cursor-pointer"
            data-cursor-text="VIEW"
        >
            {/* Project Image Wrapper */}
            <div className={`w-full ${project.aspectClass} overflow-hidden border border-brand-primary/10 bg-zinc-100 relative`}>
                {/* Visual border header line (representing a mockup tab or elegant border) */}
                <div className="w-full h-8 border-b border-brand-primary/10 flex items-center justify-between px-4 bg-brand-secondary/40 backdrop-blur-sm z-10 absolute top-0 left-0">
                    <span className="font-mono text-[9px] text-brand-neutral font-bold tracking-widest">{project.title.toUpperCase()} // LABS</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neutral/30" />
                </div>
                
                {/* Main image with parallax zoom effect on hover */}
                <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover pt-8 hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Project Footer Meta */}
            <div className="flex flex-col gap-1 border-t border-brand-primary/10 pt-4">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-heading font-black text-3xl md:text-4xl text-brand-primary tracking-tight group-hover:text-brand-neutral transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="font-label text-[10px] md:text-xs font-bold text-brand-neutral tracking-wider text-right uppercase">
                        {project.category}
                    </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-brand-neutral leading-normal mt-0.5">
                    {project.subtitle}
                </p>
            </div>
        </div>
    );
}
