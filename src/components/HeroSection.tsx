export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-8xl">
          Vett
        </h1>
        <p className="mt-8 text-2xl font-bold leading-8 text-foreground/80 sm:text-4xl text-balance">
          The Only Trustkeeping App
        </p>
        <p className="mt-4 text-xl leading-8 text-foreground/60 max-w-2xl mx-auto">
          Build meaningful relationships you can trust.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            disabled
            className="rounded-full bg-primary/20 px-8 py-4 text-lg font-semibold text-primary border-2 border-primary/30 shadow-sm cursor-not-allowed flex items-center gap-2 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Coming Soon
          </button>
          <a href="#manifesto" className="text-lg font-semibold leading-6 text-foreground hover:text-primary transition-colors">
            Read Manifesto <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Decorative background gradients */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </section>
  )
}
