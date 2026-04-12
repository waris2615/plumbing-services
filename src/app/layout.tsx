import type { Metadata } from "next";
import { Fustat, Inter } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melron Plumbing",
  description: "High quality plumbing services & products for all your plumbing needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.variable} ${inter.variable} antialiased`}
        style={{ WebkitFontSmoothing: 'antialiased' }}
      >
        {children}
      </body>
    </html>
  );
}
