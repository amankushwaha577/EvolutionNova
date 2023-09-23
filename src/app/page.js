import ActionSection from "@/components/homepage/ActionSection";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import Image from "next/image";

export const metadata = {
  title: "EvolutionNova",
};

export default function Home() {
  return (
    <div>
      {/* banner section  */}

      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
    </div>
  );
}
