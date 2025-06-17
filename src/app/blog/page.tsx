import BlurFade from "@/components/magicui/blur-fade";
import { getAllBlogs } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const BlogPage = async () => {
    const data = await getAllBlogs();

    return (
        <section>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                    Blog
                </h1>
            </BlurFade>
            {data
                .sort((a, b) => {
                    if (new Date(a.published_at) > new Date(b.published_at)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post, id) => (
                    <BlurFade
                        delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                        key={post.slug}
                    >
                        <Link
                            className="flex space-y-1 p-4 gap-3"
                            href={`/blog/${post.slug}`}
                        >
                            <Image
                                src={post?.cover_image ?? post.social_image}
                                alt={post?.slug}
                                width={150}
                                height={200}
                                className="rounded-md"
                            />
                            <div className="w-full flex flex-col">
                                <p className="tracking-tight">{post.title}</p>
                                <p className="h-6 text-xs text-muted-foreground">
                                    {formatDate(post.published_at)}
                                </p>
                            </div>
                        </Link>
                        <hr />
                    </BlurFade>
                ))}
        </section>
    );
};

export default BlogPage;
