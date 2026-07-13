import FeaturedPlayers from "@/components/featuredPlayers/FeaturedPlayers";
import HeroSection from "@/components/heroSection/HeroSection";
import Newsletter from "@/components/newsletter/Newsletter";
import PlatformStats from "@/components/platformStats/PlatformStats";
import WhyOnside from "@/components/whyOnside/WhyOnside";
import { Separator } from "@heroui/react";

export default function Home() {
  return (
    <div className="bg-[#0A0F0D]">
      <HeroSection></HeroSection>
      <Separator className="my-4 h-px bg-transparent bg-[linear-gradient(to_right,#3FEA7A_6px,transparent_6px)] bg-size-[16px_1px] bg-repeat-x" />
      <WhyOnside></WhyOnside>
      <Separator className="my-4 h-px bg-transparent bg-[linear-gradient(to_right,#3FEA7A_6px,transparent_6px)] bg-size-[16px_1px] bg-repeat-x" />
      <FeaturedPlayers></FeaturedPlayers>
      <Separator className="my-4 h-px bg-transparent bg-[linear-gradient(to_right,#3FEA7A_6px,transparent_6px)] bg-size-[16px_1px] bg-repeat-x" />
      <PlatformStats></PlatformStats>
      <Separator className="my-4 h-px bg-transparent bg-[linear-gradient(to_right,#3FEA7A_6px,transparent_6px)] bg-size-[16px_1px] bg-repeat-x" />
      <Newsletter></Newsletter>
    </div>
  );
}
