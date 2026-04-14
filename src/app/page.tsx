import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Distinction from "@/components/Distinction";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <NavBar />
      <Hero />
      <Distinction />
      <HowItWorks />
      <Footer />
    </main>
  );
}
