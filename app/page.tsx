import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="px-4 py-12 md:px-12 grid gap-6 md:grid-cols-3">
      </section>

      <Footer />
    </main>
  );
}
