import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="mx-auto flex h-[117px] max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-end"
          aria-label="ByteSpace Home"
        >
          <Image
            src="/images/landing/hero/Logo.svg"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />

          <Image
            src="/images/landing/hero/LogoText.svg"
            alt="ByteSpace"
            width={136}
            height={32}
            priority
            className="ml-1 h-auto w-[136px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                text-[15px]
                font-normal
                text-white/90
                transition-colors
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-7">
          <Link
            href="/sign-in"
            className="
              text-[15px]
              font-normal
              text-white/90
              transition-colors
              hover:text-white
            "
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            className="
              text-[15px]
              font-normal
              text-white/90
              transition-colors
              hover:text-white
            "
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping bag"
            className="flex items-center justify-center text-white"
          >
            <Image
              src="/images/icons/Shopping.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
