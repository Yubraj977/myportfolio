import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Rightpannel from "./components/Rightpannel";
import { LampDemo } from "./components/Ancertenity/lamp";
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
    <html lang="en">
      <head>
        <link rel="icon" href="/cyberhead.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex lg:h-screen w-full pt-16 flex-col lg:flex-row ">
          <div className="overflow-hidden w-[30%]">
            <Nav />
          </div>
          <div className="flex-1 overflow-y-scroll border   w-3/4 no-scrollbar h-full">
            {children}
          </div>

          <div className=" overflow-hidden w-1/4">
            <Rightpannel />
          </div>
        </div>
        {/* <LampDemo/> */}
      </body>
    </html>
  );
}
