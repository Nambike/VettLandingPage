import React from "react";

const FeaturesBento = () => {
  return (
    <section className="bg-surface py-32">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl text-primary mb-6 leading-tight font-headline">
              Reimagining Social <br />
              Digitalism
            </h2>
            <p className="font-body text-on-surface-variant text-xl leading-relaxed">
              We’ve stripped away the noise and replaced it with intentional
              architecture designed for genuine safety.
            </p>
          </div>
          <div
            className="material-symbols-outlined text-6xl text-primary/10 select-none hidden lg:block"
            aria-hidden="true"
          >
            verified_user
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="md:col-span-2 bg-white p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[440px] border border-black/5 hover:border-primary/10 transition-colors text-center">
            <div>
              <div className="w-14 h-14 bg-rosewood/10 rounded-2xl flex items-center justify-center mb-10 mx-auto">
                <span className="material-symbols-outlined text-primary text-3xl">
                  key
                </span>
              </div>
              <h3 className="text-4xl text-primary mb-6 font-headline">
                No Bots. Just Pulse.
              </h3>
              <p className="font-body text-on-surface-variant text-lg max-w-md leading-relaxed mx-auto">
                Our multi-layered verification process ensures every interaction
                is with a living, breathing human. Zero synthetic noise, 100%
                authenticity.
              </p>
            </div>
            <div className="mt-10 flex gap-3 flex-wrap justify-center">
              <span className="bg-surface-container px-5 py-2 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-black/5">
                Human Only
              </span>
              <span className="bg-surface-container px-5 py-2 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-black/5">
                Verified Identity
              </span>
            </div>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                <span className="material-symbols-outlined text-white text-3xl">
                  groups
                </span>
              </div>
              <h3 className="text-3xl mb-6 font-headline">Vetted Circles</h3>
              <p className="font-body text-white/60 text-base leading-relaxed">
                Rich, threaded conversations organized by intent. Built on a
                foundation of high-integrity interaction.
              </p>
              <div className="mt-10 flex gap-3 flex-wrap">
                <span className="bg-white/10 px-5 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/5">
                  Thematic Spaces
                </span>
                <span className="bg-white/10 px-5 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/5">
                  Threaded Wisdom
                </span>
              </div>
            </div>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between overflow-hidden group border border-primary/5">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-white">
                  account_circle
                </span>
              </div>
              <h3 className="text-3xl mb-6 font-headline">
                Multi-Dimensional Identities
              </h3>
              <p className="font-body text-base leading-relaxed text-white/60">
                Go deeper than a bio. Layered profiles that highlight values and
                verified history of contribution.
              </p>
            </div>
            <div className="mt-10 flex gap-3 flex-wrap">
              <span className="bg-white/10 px-5 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/5">
                Holistic Insights
              </span>
              <span className="bg-white/10 px-5 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/5">
                Verifiable History
              </span>
            </div>
          </div>
          {/* Feature Card 4 */}
          <div className="md:col-span-2 bg-white p-12 rounded-[2.5rem] flex flex-col items-center overflow-hidden border border-black/5 text-center justify-center">
            <div className="flex-1">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 mx-auto">
                <span className="material-symbols-outlined text-primary text-3xl">
                  key
                </span>
              </div>
              <h3 className="text-4xl text-primary mb-6 font-headline">
                Locked Social Tiers
              </h3>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mx-auto">
                Access is mutual. When two people reach a trust level together,
                they both unlock layers of identity kept behind that tier.
              </p>
              <div className="mt-10 flex gap-3 justify-center flex-wrap">
                <span className="bg-surface-container px-5 py-2 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-black/5">
                  Mutual Consent
                </span>
                <span className="bg-surface-container px-5 py-2 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-black/5">
                  Dual Unlock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
