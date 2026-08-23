"use client"

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rounded-3xl md:w-[75%] lg:w-[60%] m-auto bg-white/5 backdrop-blur-lg p-12 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
        <div className="container flex flex-col md:flex-row mb-4 md:mb-0">
          <div className="flex-1 space-y-4">
            <div className="flex space-x-2 items-center">
              <Image
                src={"/favicon.jpg"}
                className="rounded-full"
                alt="Logo"
                width={32}
                height={32}
              />

              <h2 className="font-bold text-xl md:text-[1.7rem] tracking-tight">
                Stamatis Tsagkliotis
              </h2>
            </div>

            <p className="text-xs text-primary/50">
              © {new Date().getFullYear()} Stamatis Tsagkliotis. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
