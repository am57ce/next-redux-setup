import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux Toolkit Next.js Example",
  description: "Created by Ashar Mehmood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex antialiased min-w-screen min-h-screen overflow-x-hidden flex-col items-center justify-between p-24">
        {children}
        </main>
        </body>
    </html>
  );
}
