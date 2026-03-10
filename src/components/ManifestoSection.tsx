export function ManifestoSection() {
  return (
    <section id="manifesto" className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-12">
          The Vett Trust Manifesto
        </h2>
        
        <div className="space-y-8 text-xl sm:text-2xl leading-relaxed text-primary-foreground/90 font-medium font-serif italic text-balance">
          <p>
            "In a world where truth is easily obscured, Vett is the anchor. 
            We believe that trust should not be a question—it should be a verifiable constant."
          </p>
          <p>
            "Whether you are building professional connections, hosting exclusive events, or forming personal bonds, Vett provides the registry where identity is absolute."
          </p>
          <p>
            "We do not just verify data; we validate the human behind it. 
            Join the network where transparency is the baseline and trust is the currency."
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-primary-foreground/20">
          <p className="text-2xl sm:text-4xl font-extrabold uppercase tracking-widest text-primary-foreground">
            <span className="text-primary-foreground/50">Because,</span> <br className="sm:hidden" />
            Trust is not Bought,<br />
            Its Earned.
          </p>
        </div>
      </div>
    </section>
  )
}
