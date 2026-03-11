import "./globals.css";

export const metadata = {
  title: "Naveen J Panachinanickal | Cosmic Voyage",
  description: "Software Developer Porfolio of Naveen J Panachinanickal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
