import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "blog");

export function getSlugs() {
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getPost(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8").trim();
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    contentHtml,
    tags: data.tags || [],
    updatedDate: data.updatedDate,
  };
}

export async function getAllPosts() {
  const slugs = getSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
