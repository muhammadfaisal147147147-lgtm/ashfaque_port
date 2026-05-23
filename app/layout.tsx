import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashfaque Hussain Butt | Full Stack Software Developer",
  description:
    "One-page portfolio for Ashfaque Hussain Butt, a full stack software developer.",
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
