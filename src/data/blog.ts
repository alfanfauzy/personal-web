import { BlogsType } from "@/types/blogstypes";
import { BlogTypes } from "@/types/blogtypes";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getAllBlogs(): Promise<Array<BlogsType>> {
  // Fetch data from external API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_BASE_URL_API}/articles?username=${process.env.NEXT_PUBLIC_DEV_TO_USERNAME}`
  );
  const data = await response.json();

  return data;
}

export async function getBlogBySlug(slug: string): Promise<BlogTypes> {
  // Fetch data from external API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_BASE_URL_API}/articles/${process.env.NEXT_PUBLIC_DEV_TO_USERNAME}/${slug}`
  );
  const data = await response.json();

  return data;
}
