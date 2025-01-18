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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers className="">
          
        <div className="flex lg:h-screen overflow-hidden w-full lg:pt-16 flex-col  border-red-500 lg:flex-row  ">
         
          <div className="overflow-hidden lg:w-[30%] w-full z-50">
            <Nav />
          </div>

          {/* Espically for the mobile device */}
          <div className="lg:hidden md:hidden overflow-hidden w-full lg:w-1/4 mt-20">
            <Rightpannel />
            
          </div>

          <div className="flex-1 overflow-y-scroll  -overflow-y-scroll  w-full lg:w-3/4 no-scrollbar h-full z-0 lg:mt-10  mt-0 ">
          

            {children}
          </div>

          <div className="hidden lg:block md:flex overflow-hidden w-full  lg:w-1/4">
            <Rightpannel />
          </div>
        </div>
       </Providers>
      </body>
    </html>
  );
}
