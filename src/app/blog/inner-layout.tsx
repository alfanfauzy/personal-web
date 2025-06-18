"use client";

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
    return (
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased py-12 sm:py-24 px-6 shadow-xl dark:shadow-slate-200 max-w-5xl mx-auto",
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
