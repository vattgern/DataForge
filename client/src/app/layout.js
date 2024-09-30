import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

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
  title: "DataForge",
  description: "Web App for vizualization data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container`}
      >
        <nav className="sticky top-1 py-8 z-50 px-4 mt-6 bg-transparent backdrop-blur-md rounded-md border-slate-200 border-2 flex flex-row flex-wrap gap-1.5 justify-start">
          <Link className="py-2 px-2.5 border-slate-200 border-2 rounded-md" href="/">DataForge</Link>
          <Link className="py-2 px-2.5 border-slate-200 border-2 rounded-md" href="/dev">Dev</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
