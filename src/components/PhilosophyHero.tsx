import React from "react";

const PhilosophyHero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Abstract Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20 relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <span className="font-label text-rosewood tracking-[0.3em] uppercase text-xs font-bold">
            Prologue: The Human Element
          </span>
          <h1 className="text-7xl md:text-9xl text-white leading-[1.05] tracking-tight font-headline">
            Trust. <span className="whitespace-nowrap">Connection.</span>
            <br />
            <span className="italic text-rosewood">Depth.</span>
          </h1>
          <p className="font-headline italic text-2xl text-white/70 max-w-xl leading-relaxed">
            Designed for humans, not handles. A sanctuary for meaningful
            interaction.
          </p>
          <div className="pt-6 flex items-center gap-4">
            <div className="h-px w-12 bg-white/40"></div>
            <button className="text-white font-label text-xs font-bold tracking-[0.2em] uppercase hover:text-rosewood transition-colors">
              Begin Journey
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden editorial-shadow bg-primary-container aspect-[4/5] relative group">
            <img
              alt="Sophisticated woman"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgboL9S3buPwdSdJd_oBqcX2vFp7MrzEH28AQrhE2S1-fsKXxeInuV2RBo0ajZtWWpnMmrBea6dCJz5Q_XNUYSKJjMYy7WBOuoiiLLBagc93wb09rSA0bn6WQojOXP-ysjR1KfcZnpanwyVSDN2BYVkQmiQObyu9JjQ4jE3I6zxJbg_Z4_J8jIolnr9O69DBDmjULM3ckaFUoJDCAHOdesjLcA-SM67Tt-e60wY81RyQGBBRDFLVBncLbe_iVRs7Wfc9u_wQ2Uh5dk"
            />
          </div>
          {/* Vett Score Badge */}
          <div className="absolute -bottom-10 -left-6 md:-left-12 vett-score-card p-8 rounded-2xl w-80">
            <div className="flex justify-between items-end mb-6">
              <span className="font-label text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                Vett Score
              </span>
              <span className="font-headline italic text-primary text-3xl font-bold leading-none">
                +65
              </span>
            </div>
            <div className="h-0.5 w-full bg-primary/10 relative mb-2">
              <div
                className="h-full bg-primary"
                style={{ width: "82.5%" }}
              ></div>
              <div className="absolute top-1/2 left-[82.5%] -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="flex justify-between font-label text-[9px] text-primary/30 uppercase tracking-widest">
              <span>-100</span>
              <span>0</span>
              <span>+100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyHero;
