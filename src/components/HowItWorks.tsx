import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-headline text-5xl text-primary">Reciprocal Trust</h2>
          <div className="h-1 w-24 bg-on-tertiary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl shadow-primary/5 space-y-8 hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-2xl text-primary">Share your link</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Your profile is your digital handshake. A verified link that proves you are who you say you are, without exposing private data.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-primary text-on-primary p-10 rounded-xl shadow-2xl shadow-primary/20 space-y-8 md:scale-105 z-10 border border-white/5">
            <div className="w-16 h-16 rounded-full bg-on-primary-container/20 flex items-center justify-center text-on-primary-container">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                favorite
              </span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-2xl">Real recognizes real</h3>
              <p className="opacity-80 leading-relaxed">
                A multi-layered verification process that ensures every interaction is with a living, breathing human. No bots, just pulse.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl shadow-primary/5 space-y-8 hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-3xl">lock_open</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-2xl text-primary">Unlock the depth</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Trust is a two-way street. When you both feel secure, you mutually unlock the deeper side of your digital identities through Vetted Circles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
