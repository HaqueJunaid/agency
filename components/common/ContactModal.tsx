"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon } from "lucide-react";

const services = ["Paid Ads", "Branding", "Web Dev", "Strategy"];

export default function ContactModal() {
    const { isContactOpen, closeContact } = useContact();
    const [mounted, setMounted] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>(["Paid Ads"]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsSubmitted(false);
        }
    }, [isContactOpen]);

    if (!mounted) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            closeContact();
        }, 2800);
    };

    return createPortal(
        <AnimatePresence>
            {isContactOpen && (
                <motion.div
                    key="contact-modal"
                    className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContact}
                        className="absolute inset-0 bg-brand-primary/25 backdrop-blur-lg"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        className="relative bg-[#0E0E0E] border border-brand-secondary/5 rounded-2xl w-full max-w-4xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[520px]"
                    >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(51,102,255,0.06),transparent_50%)] pointer-events-none" />
                    <div 
                        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] pointer-events-none" 
                        style={{ backgroundSize: '3rem 3rem' }}
                    />

                    <button
                        onClick={closeContact}
                        aria-label="Close"
                        className="absolute top-6 right-6 w-9 h-9 rounded-full border border-brand-secondary/10 flex items-center justify-center text-brand-secondary/50 hover:text-brand-secondary hover:border-brand-secondary/20 hover:scale-105 transition-all duration-200 cursor-pointer z-25"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:col-span-5 bg-black/20 p-8 md:p-12 md:flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-secondary/5 relative overflow-hidden">
                        <div className="flex flex-col gap-6 relative z-10">
                            <span className="font-mono text-[10px] text-brand-tertiary font-black tracking-[0.2em] uppercase">
                                CONTACT US
                            </span>
                            <h3 className="font-heading font-black text-3xl md:text-4xl text-brand-secondary tracking-tight leading-tight">
                                Ready to scale your digital presence?
                            </h3>
                            <p className="text-brand-neutral text-sm leading-relaxed font-sans max-w-xs mt-2">
                                Tell us about your goals. We operate at the intersection of technical execution and bold creative direction.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 mt-12 relative z-10 border-t border-brand-secondary/5 pt-8">
                            <div className="flex flex-col gap-1">
                                <span className="font-mono text-[9px] text-brand-secondary/35 tracking-widest uppercase">EMAIL DIRECT</span>
                                <a href="mailto:hello@idealdesign.com" className="text-brand-secondary hover:text-brand-tertiary font-sans text-sm md:text-base transition-colors duration-200">
                                    idealdesign.studio12@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                {[
                                    {
                                        label: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        ), href: "#"
                                    },
                                    {
                                        label: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        ), href: "#"
                                    },
                                    {
                                        label: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        ), href: "#"
                                    }
                                ].map((soc, idx) => (
                                    <a key={idx} href={soc.href} className="w-8 h-8 rounded-full border border-brand-secondary/10 bg-brand-secondary/1 hover:bg-brand-secondary/5  transition-all duration-200 flex items-center justify-center text-brand-secondary/60">
                                        {soc.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h2 className="block md:hidden font-heading font-bold text-3xl md:text-4xl text-brand-secondary tracking-tight leading-tight w-[65%] mb-10">Tell us about your <span className="font-serif font-normal text-brand-tertiary italic">Idea</span>.</h2>
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-7">
                                        <div className="flex flex-col gap-1 relative group">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                className="bg-transparent border-b border-brand-secondary/10 text-brand-secondary placeholder-brand-secondary/20 focus:outline-none focus:border-brand-tertiary py-3.5 transition-colors duration-300 text-sm font-sans w-full"
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-tertiary group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                        </div>

                                        <div className="flex flex-col gap-1 relative group">
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                className="bg-transparent border-b border-brand-secondary/10 text-brand-secondary placeholder-brand-secondary/20 focus:outline-none focus:border-brand-tertiary py-3.5 transition-colors duration-300 text-sm font-sans w-full"
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-tertiary group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                        </div>

                                        <div className="flex flex-col gap-1 relative group">
                                            <input
                                                type="tel"
                                                placeholder="Contact Number"
                                                className="bg-transparent border-b border-brand-secondary/10 text-brand-secondary placeholder-brand-secondary/20 focus:outline-none focus:border-brand-tertiary py-3.5 transition-colors duration-300 text-sm font-sans w-full"
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-tertiary group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                        </div>

                                        <div className="flex flex-col gap-1 relative group">
                                            <textarea
                                                required
                                                rows={3}
                                                placeholder="Tell us about your project"
                                                className="bg-transparent border-b border-brand-secondary/10 text-brand-secondary placeholder-brand-secondary/20 focus:outline-none focus:border-brand-tertiary py-3.5 transition-colors duration-300 text-sm font-sans resize-none w-full"
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-tertiary group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                        </div>

                                        <div className="flex flex-col gap-3.5 mt-2">
                                            <span className="font-mono text-[9px] text-brand-secondary/35 tracking-widest uppercase font-bold">
                                                SERVICES INTERESTED IN
                                            </span>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {services.map((s) => (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        onClick={() => toggleService(s)}
                                                        className={`py-2.5 px-3 border text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                                                            selectedServices.includes(s)
                                                                ? "bg-brand-tertiary border-brand-tertiary text-brand-secondary shadow-lg shadow-brand-tertiary/20"
                                                                : "bg-brand-secondary/1 border-brand-secondary/5 text-brand-neutral hover:border-brand-secondary/10 hover:text-brand-secondary"
                                                        }`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="group mt-6 w-full flex items-center justify-center gap-3 font-label font-bold text-xs tracking-[0.15em] uppercase text-brand-primary bg-brand-secondary py-5  hover:bg-brand-tertiary hover:text-brand-secondary transition-all duration-300 shadow-lg cursor-pointer"
                                        >
                                            Send Message
                                            <ArrowUpIcon className="size-6 rotate-90 group-hover:translate-x-2 transition-transform duration-300" />
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col items-center text-center py-10"
                                >
                                    <div className="w-16 h-16  bg-brand-tertiary/10 border border-brand-tertiary/20 flex items-center justify-center mb-6">
                                        <svg
                                            className="w-6 h-6 text-brand-tertiary animate-bounce"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-heading font-black text-2xl text-brand-secondary tracking-tight">
                                        Thank you!
                                    </h3>
                                    <p className="text-brand-neutral text-sm font-sans mt-3 max-w-xs leading-relaxed">
                                        Your message has been received. We will get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
