import "./globals.css";

export const metadata = {
  title: "Naveen J Panachinanickal | Cinematic Portfolio",
  description:
    "A cinematic software engineering portfolio for Naveen J Panachinanickal featuring work, journey, and cloud-native backend experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
