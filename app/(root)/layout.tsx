import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Shyam.Says",
  description: "A unique and attractive portfolio",
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
