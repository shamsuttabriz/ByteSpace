import Image from "next/image";

const HeroStats = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[570px] z-10 mx-auto h-[300px] max-w-[850px] sm:top-[545px]">
      <div className="absolute left-1/2 -bottom-10 h-[360px] w-[360px] -translate-x-1/2 sm:h-[570px] sm:w-[570px]">
        <Image
          src="/images/landing/hero/Character.svg"
          alt="A student learning online with a laptop"
          fill
          sizes="(min-width: 640px) 460px, 360px"
          className="object-contain"
        />
      </div>

      <div className="absolute left-0 top-12 rounded-[15px] bg-white px-4 py-3 text-[#292a2d] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:left-2">
        <p className="text-[13px] font-medium">UI/UX Design</p>
        <p className="text-[11px] text-[#91949b]">200 Courses&nbsp; • &nbsp;1000+ Students</p>
      </div>

      <div className="absolute right-0 top-16 w-[190px] rounded-[15px] bg-white px-4 py-3 text-[#292a2d] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:right-2 sm:w-[212px]">
        <p className="text-[12px] font-medium">Learning Progress</p>
        <p className="mt-1 text-[42px] font-semibold leading-none">55%</p>
        <div className="mt-3 h-[7px] overflow-hidden rounded-full bg-[#f0f0f0]">
          <div className="h-full w-[55%] rounded-full bg-primary" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[225px] w-[235px] -translate-x-1/2 rounded-[15px] bg-white px-4 py-3 text-left text-[#292a2d] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:left-[-65px] sm:top-[180px] sm:w-[235px] sm:translate-x-0">
        <p className="text-[13px] font-medium">Happy Students</p>
        <p className="text-[11px] text-[#91949b]">4.5 (240) <span className="text-primary">★</span></p>
        <div className="mt-2 flex items-center">
          {["A", "M", "J", "S", "R"].map((initial, index) => (
            <span
              key={initial}
              className="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#d8e8e5] text-[10px] font-semibold text-[#34494a] first:ml-0"
              style={{ backgroundColor: ["#d8e8e5", "#edc9c2", "#e7d8bb", "#d2dce9", "#e7c6d3"][index] }}
            >
              {initial}
            </span>
          ))}
          <span className="-ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-[#242528]">2K+</span>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
