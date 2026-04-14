import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-20 max-w-screen-2xl mx-auto gap-12">
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div className="font-headline text-3xl italic text-primary font-bold">Vett</div>
          <p className="font-body text-[10px] text-primary/40 max-w-xs leading-loose tracking-wide uppercase font-bold">
            © {currentYear} Vett.<br />Cultivating Connection over Consumption.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <Link
            className="text-primary/50 hover:text-primary transition-colors font-body text-[10px] uppercase font-bold tracking-[0.2em]"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-primary/50 hover:text-primary transition-colors font-body text-[10px] uppercase font-bold tracking-[0.2em]"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="text-primary/50 hover:text-primary transition-colors font-body text-[10px] uppercase font-bold tracking-[0.2em]"
            href="/manifesto"
          >
            Manifesto
          </Link>
          <Link
            className="text-primary/50 hover:text-primary transition-colors font-body text-[10px] uppercase font-bold tracking-[0.2em]"
            href="#"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-primary/20 hover:text-primary cursor-pointer transition-colors text-2xl">
            share
          </span>
          <span className="material-symbols-outlined text-primary/20 hover:text-primary cursor-pointer transition-colors text-2xl">
            language
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
