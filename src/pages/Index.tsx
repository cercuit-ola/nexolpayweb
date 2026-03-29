import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import SalaryCalculator from "@/components/SalaryCalculator";
import GiftCardCalculator from "@/components/GiftCardCalculator";
import BaseSection from "@/components/BaseSection";
import PricingSection from "@/components/PricingSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import AsteroidField from "@/components/AsteroidField";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AsteroidField />
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <WhySection />
      <FeaturesSection />
      <HowItWorks />
      <GiftCardCalculator />
      <SalaryCalculator />
      <BaseSection />
      <PricingSection />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
