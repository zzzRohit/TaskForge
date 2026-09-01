import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Trello",
  description:
    "A lightweight task board starter built with Next.js and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
