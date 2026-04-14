import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoSections from "@/components/ManifestoSections";

export default function ManifestoPage() {
  return (
    <main className="flex-1 bg-[#f9f7fb]">
      <NavBar />
      <div className="pt-24 md:pt-32">
        <ManifestoHero />
        <ManifestoSections />
      </div>
      <Footer />
    </main>
  );
}
