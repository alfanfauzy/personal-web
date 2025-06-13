import BlurFade from "@/components/magicui/blur-fade";
import { getBlogBySlug } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
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

function cleanHtml(html: string): string {
    // Remove <svg>
    const cleaned = html.replace(/<svg[\s\S]*?<\/svg>/gi, "");

    return cleaned.replace(
        /<pre class="highlight plaintext">/g,
        '<pre class="px-3 py-3 rounded dark:bg-white dark:text-black">'
    );
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

    const bodyHTML = cleanHtml(post.body_html);

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
                <header className="flex gap-2 flex-col mb-8">
                    <Image
                        src={post.cover_image ?? post.social_image}
                        alt={post.slug}
                        width={800}
                        height={100}
                        className="rounded-md"
                    />
                    <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                        {post.title}
                    </h1>
                    <div className="flex justify-between items-center text-sm max-w-[650px]">
                        <Suspense fallback={<p className="h-5" />}>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {formatDate(post.published_at)}
                            </p>
                        </Suspense>
                    </div>
                    <hr />
                </header>
                <article
                    className="prose dark:prose-invert"
                    dangerouslySetInnerHTML={{
                        __html: bodyHTML,
                    }}
                ></article>
            </BlurFade>
        </section>
    );
}
