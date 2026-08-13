"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AnimatedNavLink({ label, link }: { label: string; link: string }) {
    const [hovered, setHovered] = useState(false);
    const chars = label.split("");

    return (
        <Link
            href={link}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative inline-flex overflow-hidden font-mono font-bold text-sm text-brand-primary cursor-pointer py-0.5"
            style={{ lineHeight: "1.2em", height: "1.2em" }}
        >
            <span className="flex" aria-hidden={hovered}>
                {chars.map((char, i) => (
                    <motion.span
                        key={`top-${i}`}
                        animate={hovered ? { y: "-110%", opacity: 0 } : { y: "0%", opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.76, 0, 0.24, 1],
                            delay: hovered ? i * 0.025 : (chars.length - 1 - i) * 0.025,
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>

            <span className="flex absolute inset-0" aria-hidden={!hovered}>
                {chars.map((char, i) => (
                    <motion.span
                        key={`bot-${i}`}
                        animate={hovered ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.76, 0, 0.24, 1],
                            delay: hovered ? i * 0.025 : (chars.length - 1 - i) * 0.025,
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        </Link>
    );
}
