import type { Metadata } from "next";
import { Schoolbell } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Spineless Democrats",
  description: "1st amendment protected satire page",
};

const hexFranklin = localFont({
  src: "../../public/fonts/hex-franklin.woff2",
  variable: "--font-hex-franklin",
});

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-schoolbell",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hexFranklin.variable} ${schoolbell.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
