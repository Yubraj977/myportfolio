// app/layout.jsx
import localFont from "next/font/local";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Rightpannel from "./components/Rightpannel";
import LeftPannel from "./components/leftPannel";
import Nav from "./components/Nav";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "./components/StructuredData";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Yubraj Khatri - Full Stack Developer & AI Enthusiast",
    template: "%s | Yubraj Khatri"
  },
  description: "Full Stack Developer specializing in React, Next.js, React Native, and AI integration. Building innovative web and mobile applications.",
  keywords: ["Yubraj Khatri", "Full Stack Developer", "React", "Next.js", "React Native", "AI Developer", "Web Developer", "Mobile Developer"],
  authors: [{ name: "Yubraj Khatri", url: "https://yubrajkhatri.com.np" }],
  creator: "Yubraj Khatri",
  publisher: "Yubraj Khatri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/personal/website-top.png",
    apple: "/personal/website-top.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yubrajkhatri.com.np",
    title: "Yubraj Khatri - Full Stack Developer & AI Enthusiast",
    description: "Full Stack Developer specializing in React, Next.js, React Native, and AI integration.",
    siteName: "Yubraj Khatri Portfolio",
    images: [
      {
        url: "/personal/website-top.png",
        width: 1200,
        height: 630,
        alt: "Yubraj Khatri - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yubraj Khatri - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, React Native, and AI integration.",
    creator: "@Yubraj977",
    images: ["/personal/website-top.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Analytics />
        <Providers>
          <div className="flex lg:h-screen overflow-hidden w-full flex-col lg:flex-row">
            {/* LEFT PANEL */}
            <div className="overflow-hidden lg:w-[23%] w-full z-50 bg-card border-r border-border">
              <LeftPannel />
            </div>

            {/* MOBILE RIGHT PANEL */}
            <div className="lg:hidden md:hidden overflow-hidden w-full">
              <Rightpannel />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-scroll no-scrollbar w-full h-full bg-background">
              {/* Nav now starts flush at top */}
              <Nav />
              {children}
            </div>

            {/* RIGHT PANEL */}
            <div className="hidden lg:block md:flex overflow-hidden w-full lg:w-1/4 border-l border-border">
              <Rightpannel />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
