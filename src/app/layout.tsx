import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Weather Forecast",
  description: "A weather forecast app made by Zi-Hao Lin",
  keywords: ["Weather Forecast"],
  openGraph: {
    title: "Weather Forecast",
    description: "A weather forecast app made by Zi-Hao Lin",
    siteName: "Weather Forecast",
    images: [
      {
        url: "/me.jpg",
        alt: "Zi-Hao Lin",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* nav bar */}
        <nav className="fixed w-full top-0 left-0 bg-[#111319] shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px] z-10 p-5 text-white font-black sm:text-3xl text-2xl">
          <h1 className="whitespace-nowrap">Weather Forecast</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
