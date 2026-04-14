import React from "react";

const Distinction = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight">
              The Vett<br />
              <span className="italic text-secondary">Distinction</span>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-headline text-on-surface-variant leading-relaxed">
              No catfishing. No bots. No guesswork.
            </p>
            <p className="text-lg text-on-surface-variant/80 leading-loose max-w-xl">
              We anchor the identity so you can focus on the chemistry. Social media has become a sea of noise and fabrication. Vett returns us to the era of genuine human connection by verifying the "who" so you can enjoy the "why." All you have to do is be genuine/real.
            </p>
            <div className="pt-4 flex gap-12">
              <div className="space-y-1">
                <div className="text-4xl font-headline text-primary">0%</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60">Bot Tolerance</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-headline text-primary">100%</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60">Human Pulse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distinction;
