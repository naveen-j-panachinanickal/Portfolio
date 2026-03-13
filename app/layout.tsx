import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveen J Panachinanickal | Cinematic Portfolio",
  description:
    "A cinematic software engineering portfolio for Naveen J Panachinanickal featuring work, journey, and cloud-native backend experience.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
