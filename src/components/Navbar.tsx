import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <span className="sr-only">Vett</span>
            <span className="font-extrabold text-2xl tracking-tight text-foreground bg-primary/10 text-primary dark:bg-primary/20 px-3 py-1 rounded-md">
              Vett
            </span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link href="/#manifesto" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
            Manifesto
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-x-6">
          <ThemeToggle />
          <a href="#" className="text-sm font-semibold leading-6 text-primary-foreground bg-primary px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
