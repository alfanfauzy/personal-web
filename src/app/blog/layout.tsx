"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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
                        className="text-md text-gray-400 flex gap-2 items-center tracking-tighter pb-4"
                    >
                        <CircleArrowLeft size={20} />
                        <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }} // Move right by 5px
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Back
                        </motion.span>
                    </Link>
                )}
            </header>
            <main className="p-4">{children}</main>
        </div>
    );
}
