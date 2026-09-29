import HeroDecorations from "@/components/pages/landing/HeroDecorations";
import HeroSearch from "@/components/pages/landing/HeroSearch";
import HeroStats from "@/components/pages/landing/HeroStats";

const Hero = () => {
  return (
    <div className="relative isolate min-h-[840px] overflow-hidden px-4 pt-10 text-white sm:min-h-[800px] sm:pt-12">
      <HeroDecorations />

      <div className="relative z-10 mx-auto max-w-[850px] text-center">
        <h1 className="text-[40px] font-semibold leading-[1.12] tracking-[-1.5px] sm:text-[56px] md:text-[64px]">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="mx-auto mt-7 max-w-[780px] text-[14px] leading-6 text-white/70 sm:text-[16px]">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>
        <HeroSearch />
      </div>

      <HeroStats />
    </div>
  );
};

export default Hero;
