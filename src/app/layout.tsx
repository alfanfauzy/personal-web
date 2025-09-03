import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import InnerLayout from "./blog/inner-layout";
import RegisterSW from "@/components/register-sw";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
        title: `${DATA.name}`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
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
    twitter: {
        title: `${DATA.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
    icons: {
        icon: "/fav-me-icon.ico",
        apple: "/icons/icon-192x192.png",
    },
    manifest: "/manifest.json", // ✅ Tambahkan ini
    themeColor: "#0f172a", // ✅ Sesuaikan dengan warna tema kamu
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/fav-me-icon.ico" sizes="any" />
                <meta name="theme-color" content="#0f172a" />
                <script defer src="https://cloud.umami.is/script.js" data-website-id="ae52596e-a43c-48b0-92fd-05b1a793f84e"></script>
            </head>
            <body>
                <RegisterSW />
                <InnerLayout>{children}</InnerLayout>
            </body>
        </html>
    );
}
