"use client";
import { markdownToHTML } from "@/data/blog";
import { useEffect, useState } from "react";

type Props = {
  markdown: string;
};

function cleanHtml(html: string): string {
  const cleaned = html.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  return cleaned.replace(
    /<pre>/g,
    '<pre class="pl-6 whitespace-pre rounded dark:bg-white dark:text-black">'
  );
}

export const sanitizeDevToMarkdown = (markdown: string): string => {
  let correctedMarkdown = "";

  // Dev.to sometimes turns "# header" into "#&nbsp;header"
  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), "g");
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, " ");

  // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, "$& ");
};

function MarkdownRenderer({ markdown }: Props) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function convertMarkdown() {
      const result = await sanitizeDevToMarkdown(markdown);
      const html = await markdownToHTML(result);

      setHtml(html);
    }

    convertMarkdown();
  }, [markdown]);

  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: cleanHtml(html) }}
    />
  );
}

export default MarkdownRenderer;
