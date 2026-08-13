'use client'
import { useContact } from "@/context/ContactContext"

const StartProjectButton = () => {
    const { openContact } = useContact();
    return (
        <button onClick={openContact} className="px-12 py-6 bg-brand-primary text-brand-secondary font-label text-xs font-bold tracking-widest hover:bg-brand-tertiary transition-colors duration-300">
            START A PROJECT
        </button>
    )
}

export default StartProjectButton