import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:pr-[15%] md:pl-[15%] border-t">
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Stamatis Tsagkliotis. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/StamTsag/homepage"
            target="_blank"
          >
            View source
          </Link>
        </nav>
      </div>
    </footer>
  );
}
