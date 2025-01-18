import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Rightpannel from "./components/Rightpannel";
import { LampDemo } from "./components/Ancertenity/lamp";
import { ThemeChanger } from "./utils.js/toggleTheme";
import Providers from "@/providers";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen`}
      >
        <Providers>
        <div className="flex lg:h-screen h-screen w-full flex-col lg:flex-row">
          {/* Left Sidebar (Nav) */}
          <div className="overflow-hidden lg:w-[30%] w-full lg:h-screen h-auto">
            <Nav />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-scroll no-scrollbar lg:h-screen h-auto">
            {children}
          </div>

          {/* Right Sidebar (Rightpannel) */}
          <div className="hidden lg:block overflow-hidden lg:w-[25%] lg:h-screen">
            <Rightpannel />
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}