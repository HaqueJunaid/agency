import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero />
      <SelectedWork />
      <Services />
    </div>
  );
}
