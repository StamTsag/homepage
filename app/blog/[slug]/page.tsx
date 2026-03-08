import BlogPost from "@/app/components/blog/blog-post";
import { getPost, getSlugs } from "@/lib/blog";
import NavBarBlogPost from "@/app/components/blog/navbar-blog-post";
import FooterMini from "@/app/components/blog/footer-blog";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.title,
  };
}

export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slugs = getSlugs();

  if (!slugs.includes(params.slug)) redirect("/blog");

  const post = await getPost(params.slug);

  return (
    <div className="min-h-screen">
      <img
        src={`/blog/${params.slug}/icon.jpg`}
        alt="Background"
        className="fixed top-0 w-screen h-screen blur-[15px] brightness-[25%] -z-[1]"
      />

      <div className="relative z-10 pb-16">
        <NavBarBlogPost slug={params.slug} title={post.title} />

        <BlogPost
          title={post.title}
          date={post.date}
          contentHtml={post.contentHtml}
          tags={post.tags}
          updatedDate={post.updatedDate}
        />

        <FooterMini />
      </div>
    </div>
  );
}
