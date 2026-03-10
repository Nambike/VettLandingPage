"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32 bg-zinc-50 dark:bg-black">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 w-full">
          <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 sm:p-12 border border-black/5 dark:border-white/10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2 text-center">
              Let's Connect
            </h2>
            <p className="text-lg leading-8 text-foreground/60 mb-8 text-center text-balance">
              Reach out to us to build meaningful relationships you can trust.
            </p>
            
            {status === "success" ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-6 rounded-xl text-center font-medium">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                    Name
                  </label>
                  <div className="mt-2 text-foreground/80">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6 dark:bg-white/5"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                    Email
                  </label>
                  <div className="mt-2 text-foreground/80">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6 dark:bg-white/5"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                    Message
                  </label>
                  <div className="mt-2 text-foreground/80">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6 dark:bg-white/5"
                    />
                  </div>
                </div>
                
                {status === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    There was an error sending your message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
