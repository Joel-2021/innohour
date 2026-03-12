import { HeroSection } from "@/components/hero-section";
import AiWidget from "@/components/chat/ai-widget";
import Footer from "@/components/footer";
import HowItWorks from "@/components/how-it-works/how-it-works";


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
