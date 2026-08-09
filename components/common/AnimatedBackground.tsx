"use client";

import { motion } from "motion/react";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-brand-primary)_1px,transparent_1px)] bg-size-[6rem_6rem]"
                style={{ 
                    opacity: 0.04,
                    maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 95%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 95%)'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
