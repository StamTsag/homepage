import NavBarBlog from "../components/navbar-blog";

import { getAllPosts } from "@/lib/blog";
import BlogPostPreview from "../components/blog-post-preview";
import FooterMini from "../components/footer-mini";
import { PackageOpen } from "lucide-react";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <div
        className={`flex flex-col relative z-10 pb-12 ${
          posts.length === 0 && "h-screen"
        }`}
      >
        <NavBarBlog />

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map(({ slug, title, date, contentHtml, tags }) => {
              return (
                <BlogPostPreview
                  key={slug}
                  slug={slug}
                  title={title}
                  date={date}
                  contentHtml={contentHtml}
                  tags={tags}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <PackageOpen size={64} />

            <h1 className="font-semibold">No posts, yet.</h1>
          </div>
        )}

        <FooterMini />
      </div>
    </div>
  );
}
