const Hero = () => {
    return (
        <section className="relative w-full min-h-fit flex flex-col px-6 lg:px-16 pt-8 lg:pt-16 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-6 w-full mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-neutral opacity-60"></div>
                    <p className="font-label text-[10px] lg:text-sm font-bold tracking-[0.2em] text-brand-neutral uppercase">
                        Available for selected projects &mdash; 2026
                    </p>
                </div>

                <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-heading font-black text-brand-primary leading-[1.05] tracking-tight">
                    We Make Brands <br />
                    <span className="font-serif italic font-medium text-brand-tertiary pr-2">Impossible</span> to Ignore.
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-6 md:pt-12">
                    <p className="font-sans text-md md:text-lg lg:text-2xl text-brand-neutral md:max-w-2xl leading-relaxed">
                        Ideal Design creates bold social campaigns, digital experiences, and websites that turn attention into meaningful growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="px-12 py-6 bg-brand-primary text-brand-secondary font-label text-xs font-bold tracking-widest hover:bg-brand-tertiary transition-colors duration-300">
                            START A PROJECT
                        </button>
                        <button className="px-12 py-6 bg-transparent text-brand-primary font-label text-xs font-bold tracking-widest border border-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-colors duration-300">
                            VIEW OUR WORK
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-24 pb-24 w-full">
                    <div data-cursor-text="VIEW" className="lg:col-span-7 h-100 sm:h-125 lg:h-225 bg-zinc-200 overflow-hidden border border-brand-neutral/20 relative cursor-pointer">
                        <img 
                            src="https://placehold.co/1200x1400/e4e4e7/71717a?text=Creative+Agency+Mockup" 
                            alt="Design Agency Placeholder" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute top-0 left-0 w-full h-10 border-b border-brand-neutral/20 bg-brand-secondary/80 backdrop-blur flex items-center justify-between px-4">
                             <div className="flex gap-2">
                                 <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                             </div>
                             <div className="text-[10px] font-label font-bold tracking-widest text-brand-neutral">WORK SERVICES</div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-5 flex flex-col gap-6 h-125 lg:h-225">
                        <div data-cursor-text="EXPLORE" className="flex-1 bg-zinc-200 overflow-hidden relative cursor-pointer">
                            <img 
                                src="https://placehold.co/800x600/e4e4e7/71717a?text=Digital+Experience" 
                                alt="Digital Experience Placeholder" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                        </div>
                        
                        <div className="flex-1 bg-brand-primary p-8 lg:p-12 flex flex-col justify-between border border-brand-primary">
                            <p className="font-label text-xs font-bold tracking-[0.2em] text-brand-secondary uppercase">
                                01 / Concept
                            </p>
                            <h3 className="font-serif italic text-4xl lg:text-5xl text-brand-secondary font-medium leading-tight">
                                Pushing boundaries in digital space.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;