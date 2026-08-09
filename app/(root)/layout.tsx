import Navbar from "@/components/common/navbar";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import MouseFollower from "@/components/common/MouseFollower";
import PageLoader from "@/components/common/PageLoader";

const RootLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="relative min-h-screen w-full bg-brand-secondary overflow-x-hidden">
            <PageLoader />
            <MouseFollower />
            <AnimatedBackground />
            <Navbar />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default RootLayout;