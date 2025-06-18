import { getAllBlogs } from "@/data/blog";
import BlogCard from "@/components/blog-card";
import Title from "@/components/ui/title";

const BlogPage = async () => {
    const data = await getAllBlogs();

    return (
        <section>
            <Title title={"My Blogs"} />
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
