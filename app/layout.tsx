import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/config/site";
import type { Viewport } from "next";
import { RootProviders } from "@/components/providers";
import View from "@/components/shared/View/View";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  category: "portfolio",
  keywords: ["Next.js", "React", "Tailwind CSS", "ShadCn", "Radix UI"],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: siteConfig.ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.ogImage,
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        <RootProviders>
          <View>{children}</View>
        </RootProviders>
      </body>
    </html>
  );
}
