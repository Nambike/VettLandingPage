import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
        <div className="flex justify-center flex-col items-center gap-4">
          <span className="font-extrabold text-2xl tracking-tight text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-md">
            Vett
          </span>
          <p className="text-sm text-foreground/60 font-semibold tracking-wide">
            Trust is not Bought, Its Earned
          </p>
        </div>
        <nav className="flex gap-x-8 text-sm leading-6 text-foreground/80 font-medium">
          <Link href="/#manifesto" className="hover:text-primary transition-colors">Manifesto</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </nav>
        <p className="text-xs leading-5 text-foreground/40 mt-8">
          &copy; {new Date().getFullYear()} Vett. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
