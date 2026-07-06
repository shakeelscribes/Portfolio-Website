import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Shakeel | Full Stack Developer & ML Engineer",
  description:
    "Motivated Computer Science undergraduate experienced in full-stack development, machine learning, and workflow automation. Building intelligent systems from first commit to deployment.",
  keywords: [
    "Mohamed Shakeel",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Next.js",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  openGraph: {
    title: "Mohamed Shakeel | Full Stack Developer & ML Engineer",
    description:
      "Building intelligent systems from first commit to deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-sans)", position: "relative" }} suppressHydrationWarning>
        
        {/* Ambient Glassmorphism Background */}
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: -10,
          overflow: "hidden",
          background: "var(--bg-surface)",
        }}>
          {/* Glowing Orbs */}
          <div style={{
            position: "absolute",
            top: "-20%", left: "-10%",
            width: "70vw", height: "70vw",
            background: "radial-gradient(circle, rgba(41,141,255,0.3) 0%, rgba(41,141,255,0) 60%)",
            filter: "blur(60px)",
            borderRadius: "50%",
            animation: "pulse 10s infinite alternate",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-20%", right: "-10%",
            width: "80vw", height: "80vw",
            background: "radial-gradient(circle, rgba(92,169,255,0.2) 0%, rgba(92,169,255,0) 60%)",
            filter: "blur(80px)",
            borderRadius: "50%",
            animation: "pulse 15s infinite alternate-reverse",
          }} />
        </div>

        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
