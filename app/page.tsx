import AiWidget from "@/components/ai-widget";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <HowItWorks/>
      <AiWidget/>
      <Footer/>
    </div>
  );
}
