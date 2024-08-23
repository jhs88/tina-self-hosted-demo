import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Self Hosted Tina App",
  description: "A Next.js app with TinaCMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            margin: "3rem",
          }}
        >
          <header>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/posts">Posts</Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
