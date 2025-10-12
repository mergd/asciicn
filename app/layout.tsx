import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "asciicn - ascii ui components",
  description: "terminal-inspired ui components for next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
