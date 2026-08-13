"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import { projectsCol1, projectsCol2 } from "@/constants/index";
import ProjectCard from "@/components/work/ProjectCard";

export default function SelectedWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, 260]);

    const springConfig = { stiffness: 80, damping: 25, mass: 0.5 };
    const smoothY1 = useSpring(y1, springConfig);
    const smoothY2 = useSpring(y2, springConfig);

    return (
        <section
            id="work"
            ref={containerRef}
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 border-b-2 border-brand-primary bg-transparent overflow-hidden"
        >
            <div className="w-full mx-auto flex flex-col gap-20">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28 w-full items-start">
                    <motion.div style={{ y: isMobile ? 0 : smoothY1 }} className="flex flex-col gap-24 md:gap-36">
                        {projectsCol1.map((project) => (
                            <ProjectCard key={project.id} project={project} isMobile={isMobile} />
                        ))}
                    </motion.div>

                    <motion.div style={{ y: isMobile ? 0 : smoothY2 }} className="flex flex-col gap-24 md:gap-36 md:pt-24">
                        {projectsCol2.map((project) => (
                            <ProjectCard key={project.id} project={project} isMobile={isMobile} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
