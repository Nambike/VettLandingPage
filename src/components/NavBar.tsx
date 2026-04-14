"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const isManifesto = pathname === "/manifesto";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isManifesto
          ? "bg-surface/80 backdrop-blur-md py-6"
          : isAtTop
          ? "bg-transparent py-6"
          : "bg-primary/95 backdrop-blur-md shadow-lg py-4"
      }`}
    >
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto w-full">
        <div
          className={`font-headline text-2xl font-bold tracking-tight italic ${
            isManifesto ? "text-primary" : "text-white"
          }`}
        >
          Vett
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link
            className={`${
              pathname === "/"
                ? isManifesto
                  ? "text-primary border-b border-primary/40"
                  : "text-white border-b border-white/40"
                : isManifesto
                ? "text-primary/60 hover:text-primary"
                : "text-white/60 hover:text-white"
            } pb-1 font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300`}
            href="/"
          >
            Experience
          </Link>
          <Link
            className={`${
              pathname === "/philosophy"
                ? isManifesto
                  ? "text-primary border-b border-primary/40"
                  : "text-white border-b border-white/40"
                : isManifesto
                ? "text-primary/60 hover:text-primary"
                : "text-white/60 hover:text-white"
            } pb-1 font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300`}
            href="/philosophy"
          >
            Philosophy
          </Link>
          <Link
            className={`${
              pathname === "/manifesto"
                ? isManifesto
                  ? "text-primary border-b border-primary/40"
                  : "text-white border-b border-white/40"
                : isManifesto
                ? "text-primary/60 hover:text-primary"
                : "text-white/60 hover:text-white"
            } pb-1 font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300`}
            href="/manifesto"
          >
            Manifesto
          </Link>
        </div>
        <button
          className={`px-8 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer ${
            isManifesto
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-white text-primary hover:bg-purple-50"
          }`}
        >
          {isManifesto ? "Connect" : "Join"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
