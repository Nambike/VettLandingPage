import React from "react";

const Newsletter = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 md:px-12 py-32">
      <div className="bg-primary-container/20 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl text-primary mb-10 leading-tight font-headline">
            Begin your <span className="italic text-rosewood">curated</span>{" "}
            journey today.
          </h2>
          <p className="font-body text-on-surface-variant text-xl mb-16 leading-relaxed">
            The sanctuary is currently in private beta. Secure your place in the
            future of social identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              className="flex-1 bg-white/80 backdrop-blur border-0 border-b-2 border-primary/10 focus:border-primary focus:ring-0 px-8 py-5 font-label text-sm transition-colors rounded-full outline-none"
              placeholder="email@address.com"
              type="email"
            />
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest editorial-shadow hover:bg-primary/90 transition-colors">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
