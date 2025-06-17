import BlurFade from "@/components/magicui/blur-fade";
import MarkdownRenderer from "@/components/markdown-reader";
import { getBlogBySlug } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { Clock2 } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const BLUR_FADE_DELAY = 0.04;

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    };
}): Promise<Metadata | undefined> {
    let post = await getBlogBySlug(params.slug);

    let { title, published_at, description, cover_image } = post;

    let ogImage = cover_image
        ? `${DATA.url}${cover_image}`
        : `${DATA.url}/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: published_at,
            url: `${DATA.url}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function Blog({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    let post = await getBlogBySlug(params?.slug);

    if (!post) {
        notFound();
    }

    console.log(post);

    return (
        <section id="blog">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            headline: post.title,
                            datePublished: post.published_at,
                            dateModified: post.published_at,
                            description: post.description,
                            image: post.cover_image
                                ? `${DATA.url}${post.cover_image}`
                                : `${DATA.url}/og?title=${post.title}`,
                            url: `${DATA.url}/blog/${post.slug}`,
                            author: {
                                "@type": "Person",
                                name: DATA.name,
                            },
                        }),
                    }}
                />
                <header className="flex gap-3 flex-col mb-8">
                    <h1 className="title font-semibold text-2xl tracking-tighter">
                        {post.title}
                    </h1>
                    <div className="flex justify-between md:items-center text-sm flex-col md:flex-row">
                        <Suspense fallback={<p className="h-5" />}>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Published on {formatDate(post.published_at)}
                            </p>
                        </Suspense>
                        <Suspense fallback={<p className="h-5" />}>
                            <section className="flex gap-2 items-center">
                                <Clock2 size={16} />
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {post.reading_time_minutes} Minutes Read
                                </p>
                            </section>
                        </Suspense>
                    </div>
                    <hr className="border-b border-dashed border-neutral-600" />
                </header>
                <MarkdownRenderer markdown={post.body_markdown} />
            </BlurFade>
        </section>
    );
}
