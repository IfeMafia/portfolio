import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ife Mafia - Digital Portfolio",
  description: "Building exceptional digital experiences with modern technologies. Expert web development, mobile applications, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
