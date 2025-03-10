import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Digital Garden",
    template: "Digital Garden",
  },
  description: "A digital garden.",
  openGraph: {
    title: "Digital Garden",
    description: "This is my digital garden.",
    url: baseUrl,
    siteName: "Digital Garden",
    locale: "en_US",
    type: "website",
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx("text-black bg-blog-background")}>
      <body className="antialiased max-w-4xl mx-4 my-4 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-0 border-x border-b border-black">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
