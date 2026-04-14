import React from "react";

const ManifestoSections = () => {
  return (
    <div className="relative pb-64">
      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
        <p className="font-headline text-4xl md:text-6xl leading-tight font-medium text-manifesto-primary">
          Trust should not be optional. <br />
          <span className="text-manifesto-secondary">Not in friendship.</span> <br />
          <span className="text-manifesto-secondary">Not in dating.</span> <br />
          <span className="text-manifesto-secondary">Not in human connection.</span>
        </p>
      </section>

      {/* 3. The Problem */}
      <section className="max-w-3xl mx-auto px-8 mb-48 text-center">
        <p className="font-body text-xl md:text-2xl font-light text-manifesto-primary/80 leading-relaxed italic">
          We live in a time where anyone can be anything online— and that freedom has come at a cost:
          <span className="font-headline not-italic font-bold text-5xl md:text-7xl block mt-8 text-manifesto-primary">uncertainty.</span>
        </p>
      </section>

      {/* 4. The Solution */}
      <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
        <div className="space-y-12">
          <p className="font-headline text-3xl md:text-4xl text-manifesto-primary leading-relaxed">
            Vett was built to remove that uncertainty.
          </p>
          <p className="font-headline text-3xl md:text-4xl text-manifesto-primary leading-relaxed">
            We’re creating a world where people are not just seen, but <span className="italic text-manifesto-secondary font-semibold">verified</span>. <br />
            Where identity carries clarity. <br />
            Where connection begins with <span className="italic">confidence</span>.
          </p>
        </div>
      </section>

      {/* 5. The Human Element */}
      <section className="max-w-3xl mx-auto px-8 mb-48 text-center">
        <p className="font-body text-2xl md:text-3xl text-manifesto-primary/90 leading-snug">
          Whether you’re meeting a new friend, talking to someone meaningful, or opening yourself up to possibility—
          <span className="font-headline italic font-bold text-manifesto-primary mt-12 block text-4xl md:text-5xl">you deserve to know that the person on the other side is real.</span>
        </p>
      </section>

      {/* 6. The Core Stance */}
      <section className="max-w-4xl mx-auto px-8 mb-64 text-center">
        <p className="font-headline text-4xl md:text-5xl text-manifesto-primary leading-tight mb-20">
          That’s what Vett stands for.
        </p>
        <div className="space-y-4 mb-20 opacity-40">
          <p className="font-body text-xl md:text-2xl line-through">Not performance.</p>
          <p className="font-body text-xl md:text-2xl line-through">Not pretending.</p>
          <p className="font-body text-xl md:text-2xl line-through">Not profiles built on illusion.</p>
        </div>
        <div className="space-y-6">
          <p className="font-headline text-4xl md:text-5xl font-bold text-manifesto-primary">Just real people.</p>
          <p className="font-headline text-4xl md:text-5xl font-bold text-manifesto-secondary">Real presence.</p>
          <p className="font-headline text-4xl md:text-5xl font-bold text-manifesto-secondary">Real trust.</p>
        </div>
      </section>

      {/* 7. The Climax */}
      <section className="max-w-7xl mx-auto px-8 mb-64 text-center">
        <h2 className="font-headline italic font-extrabold text-7xl md:text-[12rem] text-manifesto-rosewood tracking-tighter leading-none">
          Real recognize real.
        </h2>
      </section>

      {/* 8. The Standard */}
      <section className="max-w-4xl mx-auto px-8 text-center">
        <p className="font-headline text-4xl md:text-6xl text-manifesto-primary leading-tight">
          And here, trust is the standard. <br />
          Because trust isn’t bought. <br />
          It’s <span className="underline decoration-manifesto-rosewood decoration-4 md:decoration-8 underline-offset-8 text-manifesto-rosewood">earned.</span>
        </p>
      </section>
    </div>
  );
};

export default ManifestoSections;
