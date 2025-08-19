// app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import Rightpannel from "./components/Rightpannel";
import LeftPannel from "./components/leftPannel";
import Nav from "./components/Nav";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Yubr@j Khatri",
  description: "Creator of the software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/cyberhead.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Providers>
          <div className="flex lg:h-screen overflow-hidden w-full flex-col lg:flex-row">
            {/* LEFT PANEL */}
            <div className="overflow-hidden lg:w-[23%] w-full z-50 bg-white dark:bg-[#0f0f0f] border-r border-neutral-200 dark:border-neutral-800">
              <LeftPannel />
            </div>

            {/* MOBILE RIGHT PANEL */}
            <div className="lg:hidden md:hidden overflow-hidden w-full">
              <Rightpannel />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-scroll no-scrollbar w-full h-full bg-white dark:bg-[#0f0f0f]">
              {/* Nav now starts flush at top */}
              <Nav />
              {children}
            </div>

            {/* RIGHT PANEL */}
            <div className="hidden lg:block md:flex overflow-hidden w-full lg:w-1/4 border-l border-neutral-200 dark:border-neutral-800">
              <Rightpannel />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
