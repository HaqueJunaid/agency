"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import type { NavbarProps } from "@/constants";
import { Button } from "../ui/button";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { usePathname } from "next/navigation";

const menuVariants: Variants = {
    initial: { y: "-100%" },
    animate: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

const linkContainerVariants: Variants = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const linkVariants: Variants = {
    initial: { y: "100%", opacity: 0, rotate: 5 },
    animate: { y: "0%", opacity: 1, rotate: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "100%", opacity: 0, rotate: 5, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
};

const bottomVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <nav className={`px-6 md:px-16 py-5 flex items-center justify-between fixed w-full z-50 top-0 left-0 transition-colors duration-300 ${isOpen ? 'bg-transparent' : 'bg-brand-secondary'}`}>
                <Link
                    href="/"
                    className="font-heading font-black text-2xl md:text-5xl z-50 transition-colors duration-300"
                    style={{ color: isOpen ? 'var(--color-brand-secondary)' : 'var(--color-brand-primary)' }}
                >
                    IDEAL DESIGN
                </Link>

                <ul className="hidden md:flex items-center justify-center gap-8">
                    {navLinks.map(({ label, link }: NavbarProps) => (
                        <li key={label}>
                            <Link href={link} className="font-mono font-bold text-sm text-brand-primary hover:text-brand-tertiary cursor-pointer transition-all ease-in-out duration-150">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <Button className={'font-label font-light px-7 py-5 rounded-none bg-brand-primary text-brand-secondary text-xs cursor-pointer hover:bg-brand-tertiary duration-150 transition-all ease-in-out'}>
                        LET'S TALK
                    </Button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 block transition-colors duration-300"
                        style={{ backgroundColor: isOpen ? 'var(--color-brand-secondary)' : 'var(--color-brand-primary)' }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 block transition-colors duration-300"
                        style={{ backgroundColor: isOpen ? 'var(--color-brand-secondary)' : 'var(--color-brand-primary)' }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 block transition-colors duration-300"
                        style={{ backgroundColor: isOpen ? 'var(--color-brand-secondary)' : 'var(--color-brand-primary)' }}
                    />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-brand-primary w-full h-screen flex flex-col justify-between px-6 pt-32 pb-12 overflow-hidden"
                    >
                        <motion.ul
                            variants={linkContainerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col gap-4 mt-8"
                        >
                            {navLinks.map(({ label, link }: NavbarProps, i) => (
                                <div key={label} className="overflow-hidden mb-3">
                                    <motion.li variants={linkVariants}>
                                        <Link
                                            href={link}
                                            onClick={() => setIsOpen(false)}
                                            className="font-heading font-black text-5xl sm:text-7xl text-brand-secondary hover:text-brand-tertiary transition-colors inline-block"
                                        >
                                            {label}
                                        </Link>
                                    </motion.li>
                                </div>
                            ))}
                        </motion.ul>

                        <motion.div
                            variants={bottomVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col gap-6"
                        >
                            <hr className="border-brand-secondary/20" />
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col gap-2">
                                    <p className="font-label text-brand-secondary/60 text-xs tracking-widest">SAY HELLO</p>
                                    <a href="mailto:hello@idealdesign.com" className="font-sans text-brand-secondary underline underline-offset-4">hello@idealdesign.com</a>
                                </div>
                                <ul className="flex gap-4">
                                    {['X', 'IG', 'IN'].map(social => (
                                        <li key={social}>
                                            <a href="#" className="font-label text-xs tracking-widest text-brand-secondary hover:text-brand-tertiary transition-colors">{social}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;