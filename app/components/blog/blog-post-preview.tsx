import Image from "next/image";
import { calculateHTMLReadingTime } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

type BlogPostPreviewProps = {
  slug: string;
  title: string;
  date: string;
  contentHtml: string;
  tags?: string[];
};

export default function BlogPostPreview({
  slug,
  title,
  date,
  contentHtml,
  tags = [],
}: BlogPostPreviewProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Strip HTML tags and create excerpt
  const plainText = contentHtml.replace(/<[^>]+>/g, "");
  const excerpt =
    plainText.length > 120 ? plainText.slice(0, 300) + "..." : plainText;

  return (
    <Link
      href={`/blog/${slug}`}
      aria-label={`Read blog post: ${title}`}
      className="block w-[90%] md:h-[200px] md:w-[75%] lg:w-[60%] m-auto"
    >
      <div className="flex flex-col md:flex-row rounded-3xl bg-white/5 hover:bg-white/10 duration-150 backdrop-blur-lg mt-10 overflow-hidden md:h-full">
        <div className="relative w-full h-[200px] md:h-full md:w-[350px] shrink-0">
          <Image
            src={`/blog/${slug}/icon.jpg`}
            alt={title}
            fill
            priority
            className="object-cover rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
          />
        </div>

        <div className="flex flex-col p-4 md:p-6 md:pt-4 md:pb-4 overflow-hidden">
          <div className="flex flex-wrap gap-2 mb-1">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-xl bg-white/10 px-2 py-1 text-[0.7rem] md:text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 line-clamp-1">
            {title}
          </h2>

          {excerpt && (
            <div className="text-xs text-primary/75 md:text-[0.8rem] line-clamp-2 md:line-clamp-3 overflow-hidden text-ellipsis whitespace-pre-wrap">
              {excerpt}
            </div>
          )}

          <span className="flex-1" />

          <div className="flex items-center gap-x-6 mt-4">
            <div className="text-xs md:text-sm flex gap-x-2 items-center">
              <Clock width={18} height={18} />
              {calculateHTMLReadingTime(contentHtml)} min read
            </div>

            <div className="text-xs md:text-sm flex gap-x-2 items-center">
              <Calendar width={18} height={18} />
              {formattedDate}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
