import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://albostechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Albos Technologies Pvt Ltd — Full-Stack Software Engineering",
    template: "%s | Albos Technologies Pvt Ltd",
  },
  description:
    "Albos Technologies Pvt Ltd is a full-stack software engineering company based in Pune, India. 250+ engineers, 500+ projects, 12 industries — from MVPs to complex enterprise platforms.",
  applicationName: "Albos Technologies Pvt Ltd",
  keywords: [
    "enterprise software",
    "web development",
    "mobile apps",
    "AI",
    "cloud",
    "DevOps",
  ],
  authors: [{ name: "Albos Technologies Pvt Ltd" }],
  creator: "Albos Technologies Pvt Ltd",
  publisher: "Albos Technologies Pvt Ltd",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Albos Technologies Pvt Ltd — Full-Stack Software Engineering",
    description:
      "Albos Technologies Pvt Ltd is a full-stack software engineering company based in Pune, India. 250+ engineers, 500+ projects, 12 industries.",
    type: "website",
    url: SITE_URL,
    siteName: "Albos Technologies Pvt Ltd",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Albos Technologies Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albos Technologies Pvt Ltd — Full-Stack Software Engineering",
    description:
      "Albos Technologies Pvt Ltd is a full-stack software engineering company based in Pune, India. 250+ engineers, 500+ projects delivered.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Albos Technologies Pvt Ltd",
              url: "https://albostechnologies.com",
              logo: "https://albostechnologies.com/images/logo.png",
              description:
                "Full-stack software engineering company based in Pune, India. 250+ engineers, 500+ projects, across 12 industries.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kunal Plaza, Pune MH 411019",
                addressLocality: "Pune",
                addressRegion: "MH",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-97666-50411",
                contactType: "sales",
              },
              sameAs: [
                "https://www.linkedin.com/company/albos-technologies",
                "https://twitter.com/albostechnologies",
                "https://github.com/albostechnologies",
              ],
            }),
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
