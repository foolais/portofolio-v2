import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WahyuEn",
  description: "Portfolio website of Wahyu Esya Nasution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  font-inter antialiased grid-background`}
      >
        <main>{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
