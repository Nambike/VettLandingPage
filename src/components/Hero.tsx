import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  tagline?: string;
}

const Hero = ({ title, subtitle, tagline }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-bg-deep text-on-primary">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center justify-center text-center relative z-10">
        <div className="max-w-5xl space-y-16">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-on-primary-container/60 mb-4">
              {tagline || "Prologue: The Human Element"}
            </p>
            <h1 className="font-headline text-6xl md:text-8xl leading-[1.05] tracking-tight">
              {title || (
                <>
                  Vett: Your Social Passport.
                </>
              )}
              <br />
              <span className="italic font-light text-secondary-fixed-dim block mt-8 text-3xl md:text-4xl max-w-3xl mx-auto leading-relaxed">
                {subtitle || 'Moving from "I hope they’re real" to "I know they’re real."'}
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="group cursor-pointer flex flex-col items-center gap-4">
              <span className="text-xs uppercase tracking-[0.3em] font-bold group-hover:-translate-y-1 transition-transform duration-300">
                Begin Journey
              </span>
              <div className="h-12 w-[1px] bg-white group-hover:h-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
