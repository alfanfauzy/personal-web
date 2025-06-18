import BlurFade from "@/components/magicui/blur-fade";
import { getAllBlogs } from "@/data/blog";
import BlogCard from "@/components/blog-card";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data
                    .sort((a, b) =>
                        new Date(a.published_at) > new Date(b.published_at)
                            ? -1
                            : 1
                    )
                    .map((post, id) => (
                        <BlogCard post={post} key={id} />
                    ))}
            </div>
        </section>
    );
};

export default BlogPage;
