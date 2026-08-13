import Navbar from "@/components/common/navbar";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import MouseFollower from "@/components/common/MouseFollower";
import PageLoader from "@/components/common/PageLoader";
import Footer from "@/components/common/Footer";
import { ContactProvider } from "@/context/ContactContext";
import ContactModal from "@/components/common/ContactModal";
import SmoothScroll from "@/components/common/SmoothScroll";

const RootLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <ContactProvider>
            <SmoothScroll>
                <div className="relative min-h-screen w-full bg-brand-secondary overflow-x-clip flex flex-col">
                    <PageLoader />
                    <MouseFollower />
                    <Navbar />
                    <div className="relative z-10 bg-brand-secondary md:mb-[620px]">
                        <AnimatedBackground />
                        {children}
                    </div>
                    <Footer />
                    <ContactModal />
                </div>
            </SmoothScroll>
        </ContactProvider>
    );
};

export default RootLayout;