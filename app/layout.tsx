import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heeboSans = Heebo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnoHour",
  description: "One Hour. Fresh Ideas. Real Impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${heeboSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
