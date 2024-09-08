"use client"; // Error boundaries must be Client Components

import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-evenly">
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          <Button onClick={() => reset()}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
