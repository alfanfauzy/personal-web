import BlurFade from "@/components/magicui/blur-fade";
import { getAllBlogs } from "@/data/blog";
import { BlogsType } from "@/types/blogstypes";
import Link from "next/link";
import { useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;

const BlogPage = async () => {
  const data = await getAllBlogs();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {data
        .sort((a, b) => {
          if (new Date(a.published_at) > new Date(b.published_at)) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.published_at}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
};

export default BlogPage;
