import Image from "next/image";

const HeroDecorations = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/images/landing/hero/Ellipse.svg"
        alt=""
        width={1149}
        height={442}
        priority
        className="absolute left-1/2 top-[440px] w-[900px] max-w-none -translate-x-1/2 sm:bottom-0 sm:w-[1200px]"
      />
      <Image
        src="/images/landing/hero/Shape-1.svg"
        alt=""
        width={346}
        height={343}
        className="absolute left-28 bottom-[30px] w-[100px] sm:left-30 sm:w-[400px]"
      />
      <Image
        src="/images/landing/hero/Shape-2.svg"
        alt=""
        width={213}
        height={372}
        className="absolute -right-16 top-[420px] w-[150px] rotate-[12deg] sm:-right-8 sm:top-[500px] sm:w-[190px]"
      />
      <Image
        src="/images/landing/hero/Shape-3.svg"
        alt=""
        width={317}
        height={332}
        className="absolute -right-20 top-[610px] w-[210px]  sm:right-60 sm:top-[525px] sm:w-[300px]"
      />
      <Image
        src="/images/landing/hero/Shape-4.svg"
        alt=""
        width={189}
        height={189}
        className="absolute right-[13%] top-[350px] hidden w-[100px] rotate-[14deg] sm:block"
      />
      <Image
        src="/images/landing/hero/Shape-5.svg"
        alt=""
        width={176}
        height={176}
        className="absolute left-[15%] top-[365px] hidden w-[100px] rotate-[-12deg] sm:block"
      />
      <Image
        src="/images/landing/hero/Shape-6.svg"
        alt=""
        width={176}
        height={176}
        className="absolute left-0 top-[120px] hidden w-[200px]  sm:block"
      />
    </div>
  );
};

export default HeroDecorations;
