import Hero from "@/components/pages/landing/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0639D8] hero-grid">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
