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
        label: "PROCESS",
        link: "#process",
    },
    {
        label: "ABOUT",
        link: "#about",
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

export interface Founder {
    name: string;
    role: string;
    shortBio: string;
    bio: string;
    stats: [string, string][];
    images: string[];
}

export const founders: Founder[] = [
    {
        name: "Junaid Haque",
        role: "Founder / Developer",
        shortBio: "Turns ideas into thoughtful digital products built to solve real problems.",
        bio: "Junaid combines technical expertise with a founder’s mindset to turn ideas into scalable digital products, building solutions that are purposeful, practical, and made to create lasting impact.",
        stats: [["4+", "Years"], ["25", "Brands"], ["30+", "Projects"]],
        images: [
            "/assets/Junaid_1.png",
            "/assets/Junaid_2.jpeg",
            "/assets/Junaid_4.jpg",
        ],
    },
    {
        name: "Md Naved",
        role: "Co-Founder / Creative",
        shortBio: "Shapes bold creative ideas into identities, campaigns, and experiences people remember.",
        bio: "Md Naved leads the creative vision of the agency, bringing ideas to life through distinctive visual identities, thoughtful design, and creative campaigns that give brands a voice people remember.",
        stats: [["3+", "Years"], ["30+", "Campaigns"], ["5M+", "Reach"]],
        images: [
            "/assets/Naved_3.jpeg",
            "/assets/Naved_2.jpeg",
            "/assets/Naved_1.jpeg",
        ],
    }
];

export interface FounderModalProps {
    founder: Founder;
    founderIndex: number;
    total: number;
    originRect: DOMRect;
    onClose: () => void;
}

export interface ProcessStep {
    id: string;
    tag: string;
    title: string;
    description: string;
    outputs: string[];
}

export const processSteps: ProcessStep[] = [
    {
        id: "01",
        tag: "AUDIT & DISCOVERY",
        title: "Deep-Dive Market Audit",
        description: "We audit your existing analytics data, run extensive research on your primary competitors, and inspect your assets. We define exact baselines and locate immediate opportunities.",
        outputs: ["Asset & Traffic Audit", "Competitor Matrix Report", "Baseline ROI Forecast"]
    },
    {
        id: "02",
        tag: "STRATEGY & ARCHITECTURE",
        title: "The Growth Blueprint",
        description: "We translate insights into strategy. We map out your target buyer personas, structure the visual/copy angle, and create a comprehensive 90-day execution blueprint.",
        outputs: ["Target Persona Framework", "90-Day Campaign Blueprint", "Creative Direction Guidelines"]
    },
    {
        id: "03",
        tag: "PRODUCTION & CREATIVE",
        title: "High-Velocity Asset Creation",
        description: "Our creative team produces conversion-focused static layouts, ad copy hooks, landing pages, and vertical videos designed to bypass scroll fatigue and demand attention.",
        outputs: ["Performance Ad Copy", "High-Converting Landers", "Video Hook Variations"]
    },
    {
        id: "04",
        tag: "EXPERIMENTATION & SCALE",
        title: "Launch, Analyze & Scale",
        description: "We launch the campaigns and run daily micro-experiments. By monitoring real-time data, we adjust budgets, optimize user journeys, and aggressively scale winning variations.",
        outputs: ["Multi-Variant Ad Experiments", "Weekly Insights & Reports", "Budget Scaling Execution"]
    }
];