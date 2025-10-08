import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "NUVIO",
  description: "Back Office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} antialiased`}>{children}</body>
    </html>
  );
}
