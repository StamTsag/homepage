import { calculateHTMLReadingTime } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

type BlogPostProps = {
  title: string;
  date: string;
  contentHtml: string;
  tags: string[];
  updatedDate?: string;
};

export default function BlogPost({
  title,
  date,
  contentHtml,
  tags,
  updatedDate,
}: BlogPostProps) {
  return (
    <article className="rounded-3xl w-[95%] md:w-[90%] lg:w-[65%] bg-white/5 m-auto backdrop-blur-lg p-10 mt-10 mb-6 border border-border/25">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>

      <div className="flex items-center gap-x-6 mb-4">
        <div className="flex text-sm gap-x-2 items-center">
          <Image
            src={"/favicon.ico"}
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full mr-1"
          />  
          <div className="flex flex-col gap-y-[1px]">
            <h1 className="text-base">Stamatis Tsagkliotis</h1>

            <div className="flex gap-x-2 items-center text-xs text-white/70">
              <p className="flex gap-x-2 items-center">
                <Clock width={16} height={16} />
                {calculateHTMLReadingTime(contentHtml)} min read
              </p>
              ·
              <p className="flex gap-x-2 items-center">
                <Calendar width={16} height={16} />
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {updatedDate && (
                <>
                  ·
                  <p>
                    Updated{" "}
                    {new Date(updatedDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-xl bg-white/10 px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="whitespace-pre-wrap [&>*]:my-0 [&>h2]:mt-12 prose-sm md:prose-base prose prose-compact text-white prose-a:text-white max-w-none 
                   prose-h1:text-white 
                   prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold
                   prose-h3:text-white prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
