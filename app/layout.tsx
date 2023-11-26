import { useEffect } from "react";
import { useRouter } from "next/router";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket Somm",
  description:
    "A handy app that guides users through somm style questions to arrive at a wine recommendation",
  keywords: ["Wine", "Recommendations", "Sommelier", "Wine Pairing"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    router.push(path).catch((err) => {
      console.error("Routing error:", err);
    });
  }, [router]);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
