// import type React from "react";
// import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
// import "./globals.css";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "SmartCreatex.tech - Professional IT Solutions & Services",
//   description:
//     "Leading IT company providing web development, mobile apps, AI/ML, cybersecurity, and digital transformation services. Contact us at smartcreatex.tech@gmail.com",
//   keywords:
//     "IT services, web development, mobile apps, AI, machine learning, cybersecurity, digital marketing, SmartCreatex",
//   authors: [{ name: "SmartCreatex.tech" }],
//   creator: "SmartCreatex.tech",
//   publisher: "SmartCreatex.tech",
//   robots: "index, follow",
//   openGraph: {
//     title: "SmartCreatex.tech - Professional IT Solutions",
//     description:
//       "Leading IT company providing comprehensive technology solutions",
//     type: "website",
//     locale: "en_US",
//   },
//   generator: "v0.app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <body className="font-sans antialiased">
//         <Navigation />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Metadata (includes favicon)
export const metadata: Metadata = {
  title: "SmartCreatex.tech - Professional IT Solutions & Services",
  description:
    "Leading IT company providing web development, mobile apps, AI/ML, cybersecurity, and digital transformation services.",
  keywords:
    "IT services, web development, mobile apps, AI, machine learning, cybersecurity, digital marketing, SmartCreatex",
  authors: [{ name: "SmartCreatex.tech" }],
  creator: "SmartCreatex.tech",
  publisher: "SmartCreatex.tech",
  robots: "index, follow",
  openGraph: {
    title: "SmartCreatex.tech - Professional IT Solutions",
    description:
      "Leading IT company providing comprehensive technology solutions",
    type: "website",
    locale: "en_US",
  },
  generator: "v0.app",
  icons: {
    icon: "/logo.png", // Favicon for browser tab
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
