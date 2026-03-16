import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Improvisr - Your Personal Improv Coach | iOS App for Musicians",
  description:
    "Master improvisation with smart scale recommendations, genre-specific backing tracks, and practice tracking across Jazz, Blues, Rock, Funk, Latin, and R&B. 864 scale-key-genre combinations in one app.",
  keywords: [
    "music practice app",
    "improvisation",
    "scale recommendations",
    "backing tracks",
    "jazz scales",
    "blues scales",
    "guitar practice",
    "bass practice",
    "saxophone practice",
    "music theory",
    "metronome",
    "practice tracker",
  ],
  authors: [{ name: "Improvisr" }],
  creator: "Improvisr",
  metadataBase: new URL("https://improvisr.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://improvisr.app",
    title: "Improvisr - Your Personal Improv Coach in Your Pocket",
    description:
      "Stop guessing which scales to play. Improvisr gives you smart scale recommendations, backing tracks, and practice tracking for Jazz, Blues, Rock, Funk, Latin, and R&B.",
    siteName: "Improvisr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Improvisr - Smart Scale Recommendations for Musicians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Improvisr - Your Personal Improv Coach in Your Pocket",
    description:
      "Smart scale recommendations, genre-specific backing tracks, and practice tracking. 864 combinations across 6 genres.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // "apple-itunes-app": "app-id=YOUR_APP_ID", // Uncomment after App Store submission
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Improvisr: Improvise & Play",
              operatingSystem: "iOS",
              applicationCategory: "MusicApplication",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free tier with limited scales and keys",
                },
                {
                  "@type": "Offer",
                  price: "5.99",
                  priceCurrency: "USD",
                  description: "Pro monthly subscription",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  price: "39.99",
                  priceCurrency: "USD",
                  description: "Pro annual subscription",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    billingDuration: "P1Y",
                  },
                },
              ],
              // aggregateRating removed until app has real reviews
              // aggregateRating: {
              //   "@type": "AggregateRating",
              //   ratingValue: "4.8",
              //   ratingCount: "127",
              //   bestRating: "5",
              // },
              description:
                "Master improvisation with smart scale recommendations, backing tracks, and practice tracking across Jazz, Blues, Rock, Funk, Latin, and R&B.",
              featureList:
                "Smart Scale Recommendations, Genre-Specific Backing Tracks, Built-in Metronome, Practice Tracking, Guided Routines, 864 Combinations",
            }),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
