import NavBar from "@/components/NavBar";
import PhilosophyHero from "@/components/PhilosophyHero";
import FeaturesBento from "@/components/FeaturesBento";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function PhilosophyPage() {
  return (
    <main className="flex-1">
      <NavBar />
      <PhilosophyHero />
      <FeaturesBento />
      <Newsletter />
      <Footer />
    </main>
  );
}
