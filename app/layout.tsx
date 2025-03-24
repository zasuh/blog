import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Be_Vietnam_Pro, Roboto_Mono } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

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
  icons: {
    icon: "../app/icons/favicon.ico",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        " bg-blog-background",
        beVietnamPro.variable,
        robotoMono.variable
      )}
    >
      <body className="antialiased max-w-4xl mx-4 my-4 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-0 border-black">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
