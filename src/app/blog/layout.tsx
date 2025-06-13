"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BlogLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    // Show back button only for detail pages like /blog/my-post
    const isDetailPage = pathname && /^\/blog\/[^/]+$/.test(pathname);

    return (
        <div>
            <header>
                {isDetailPage && (
                    <Link
                        href="/blog"
                        className="text-blue-600 hover:underline flex gap-2"
                    >
                        <ChevronLeft /> Back to Blog
                    </Link>
                )}
            </header>
            <main className="p-4">{children}</main>
        </div>
    );
}
