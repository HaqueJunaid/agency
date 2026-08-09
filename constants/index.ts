export interface NavbarProps {
    label: string;
    link: string;
}

export const navLinks: NavbarProps[] = [
    {
        label: "WORK",
        link: "#work",
    },
    {
        label: "SERVICES",
        link: "#services",
    },
    {
        label: "ABOUT",
        link: "#about",
    },
    {
        label: "PROCESS",
        link: "#process",
    },
    {
        label: "CONTACT",
        link: "#contact",
    },
]


export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image: string;
    aspectClass: string;
}

export const projectsCol1: Project[] = [
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


export const projectsCol2: Project[] = [
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

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const services: ServiceItem[] = [
    {
        id: "01",
        title: "Social Media Advertising",
        description: "Data-driven campaigns designed to interrupt the scroll and demand attention.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Creative Design",
        description: "Bold visual identities and editorial art direction that separates you from the noise.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Web Design & Development",
        description: "High-performance digital experiences built with architectural precision.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Digital Strategy",
        description: "Comprehensive blueprints for brand positioning and long-term digital growth.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    }
];