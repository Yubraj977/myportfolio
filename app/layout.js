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
        <div className="flex lg:h-screen w-full lg:pt-16 flex-col lg:flex-row ">
          <div className="overflow-hidden lg:w-[30%] w-full  border-red-400 z-50">
            <Nav />
          </div>

          {/* Espically for the mobile device */}
          <div className="lg:hidden md:hidden overflow-hidden w-full lg:w-1/4 mt-20">
            <Rightpannel />
            
          </div>

          <div className="flex-1 overflow-y-scroll  -overflow-y-scroll  w-full lg:w-3/4 no-scrollbar h-full z-0 mt-10 lg:mt-0 ">
            {children}
          </div>

          <div className="hidden lg:block md:flex overflow-hidden w-full lg:w-1/4">
            <Rightpannel />
          </div>
        </div>
        {/* <LampDemo/> */}
      </body>
    </html>
  );
}
