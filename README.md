# Vett Landing Page (`nambike-landing-page`)

This landing page is built using **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **React Server Components**. Here is a breakdown of the mental model to help you easily add more pages and features in the future.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📂 Directory Structure

### `src/app/`
This is the heart of your application. Next.js uses file-system-based routing. Every folder inside `src/app/` becomes a URL route if it contains a `page.tsx` file.
- `src/app/layout.tsx`: The global wrapper for your entire site. It contains the `<html>` and `<body>` tags, global fonts, the `ThemeProvider` for Dark Mode, and global metadata for SEO.
- `src/app/page.tsx`: The root homepage UI (`/`). It imports the `Navbar`, `HeroSection`, `ManifestoSection`, and `Footer` components.
- `src/app/contact/page.tsx`: The UI for the `/contact` route.
- `src/app/globals.css`: Where your Hinge Theme CSS variables, Tailwind configurations, and dark mode variants live. Add new color tokens here.

### `src/app/api/`
This folder is used for Serverless Backend APIs via Next.js Route Handlers. 
- `src/app/api/contact/route.ts`: This creates the backend endpoint `POST /api/contact` which handles the Resend mailing logic. The code here runs entirely on the server, safely keeping your API keys hidden from the browser.

### `src/components/`
Used for discrete, reusable UI building blocks. These are separated from the `app/` folder so they don't accidentally become publicly accessible URLs.
- E.g., `HeroSection.tsx`, `Navbar.tsx`, `ThemeToggle.tsx`.

## 🛠️ How to Add a New Page

If you want to add an **About Us** page (at the URL `/about`):
1. **Create a Folder:** Create `src/app/about/`.
2. **Create a File:** Add a `page.tsx` inside that folder.
3. **Write the Component:**
   ```tsx
   import { Navbar } from "@/components/Navbar";
   import { Footer } from "@/components/Footer";

   export default function AboutPage() {
     return (
       <div className="flex flex-col min-h-screen">
         <Navbar />
         <main className="flex-1 py-32 px-8">
           <h1 className="text-4xl text-primary font-bold">About Vett</h1>
         </main>
         <Footer />
       </div>
     );
   }
   ```
4. **Link to it:** In `Navbar.tsx`, simply use `<Link href="/about">About Us</Link>`.

## 🎨 Server vs Client Components
By default, all components in `src/app/` and `src/components/` are **Server Components** (rendered on the server for maximum speed and SEO). 

If you need a component to have **interactivity** (like an `onClick` handler, `useState`, `useEffect`, or a dark mode toggle), you must add `"use client";` to the very top line of that specific file (see `src/components/ThemeToggle.tsx` or `src/app/contact/page.tsx` for examples).

## 🚀 Shared Monorepo Integration
Because this is inside a monorepo alongside React Native code, the `next.config.ts` file takes care of aliasing `react-native` to `react-native-web`. That means if you ever want to import a component from `@nambike/shared` or `react-native-paper`, it will automatically compile perfectly to the web!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
