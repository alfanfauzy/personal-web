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
            className="text-xl font-bold hover:text-blue-500 flex gap-2 items-center underline tracking-tighter "
          >
            <ChevronLeft /> <span>Back to Blog</span>
          </Link>
        )}
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
