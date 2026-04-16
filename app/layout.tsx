import { ServiceProvider } from "@/app/data/serviceContext"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Staatliches } from "next/font/google"
import "@/app/globals.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const staatliches = Staatliches({
  // 2. Configure the font
  weight: "400", // Staatliches usually only has one weight
  variable: "--font-staatliches",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Spark Stack | Premium Web Development & UI/UX in McMinnville, OR",
  description:
    "High-performance Next.js and Full-Stack development by Andrew Humphries. Specialized in React, Vue, and custom CMS solutions.",
  openGraph: {
    title: "Spark Stack | Premium Web Development",
    description:
      "Building the future of the web with high-performance React and Next.js architecture.",
    url: "https://sparkstack.netlify.app",
    siteName: "Spark Stack",
    images: [
      {
        url: "https://sparkstack.netlify.app/og-image.png", // Pointing to your new PNG
        width: 1200,
        height: 630,
        alt: "Spark Stack Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Stack | Premium Web Development",
    description: "Premium web development and UI/UX design.",
    images: ["https://sparkstack.netlify.app/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Spark Stack",
    url: "https://sparkstack.netlify.app",
    logo: "https://sparkstack.netlify.app/spark_stack_logo1.svg",
    image: "https://sparkstack.netlify.app/spark_stack_logo1.svg",
    description:
      "Premium web development agency specializing in high-performance frontend experiences, robust server-side solutions, and end-to-end full-stack applications.",
    founder: {
      "@type": "Person",
      name: "Andrew Humphries",
    },
    sameAs: [
      "https://github.com/ahumphries102",
      "https://linkedin.com/in/ahumphriesprofile",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "McMinnville",
      addressRegion: "OR",
      postalCode: "97128",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spark Stack Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "User Interface Development",
            description:
              "Modern UI/UX design implementation using React, Vue, or Vanilla JavaScript.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Database Development",
            description:
              "Robust server-side solutions including RESTful API design and database architecture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Development",
            description:
              "Complete end-to-end web application development from database to UI.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wordpress & CMS Development",
            description:
              "Custom WordPress themes and plugins for unique business needs.",
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${staatliches.variable} antialiased bg-zinc-950 text-zinc-100 overflow-x-hidden`}
      >
        <main>
          <Nav />
          <ServiceProvider>{children}</ServiceProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
