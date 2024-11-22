import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Results Summary Component Challenge",
  description:
    "A responsive results summary component built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} antialiased flex justify-center items-center min-h-screen bg-white`}
      >
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
