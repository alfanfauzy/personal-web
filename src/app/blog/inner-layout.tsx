"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function InnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Show back button only for detail pages like /blog/my-post
    const isBlogDetailPage = pathname && /^\/blog\/[^/]+$/.test(pathname);

    return (
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased py-12 sm:py-24 px-6 shadow-xl dark:shadow-slate-200",
                !isBlogDetailPage ? "max-w-2xl mx-auto" : "max-w-5xl mx-auto", // Only apply on non-blog pages
                fontSans.variable
            )}
        >
            <ThemeProvider attribute="class" defaultTheme="light">
                <TooltipProvider delayDuration={0}>
                    {children}
                    <Navbar />
                </TooltipProvider>
            </ThemeProvider>
        </body>
    );
}
