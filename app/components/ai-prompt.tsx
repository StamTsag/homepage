"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Message } from "../types";
import { motion } from "framer-motion";
import Typewriter from "./typewriter";
import { X } from "lucide-react";

export default function AIPrompt() {
  const [prompt, setPrompt] = useState("");

  const [open, setOpen] = useState(false);

  const [thinking, setThinking] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const chatRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  async function sendPrompt(tempMessages: Message[]) {
    if (thinking) return;

    setThinking(true);

    setMessages(tempMessages);

    setPrompt("");

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
    });

    if (res.ok) {
      const answer = (await res.json()).answer;

      setMessages([...tempMessages, { role: "ai", message: answer }]);
    }

    setThinking(false);
  }

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        ...messages,
        {
          role: "ai",
          message:
            "Welcome to Stamatis' AI.\nYou can ask me anything to learn more about Stamatis.",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [thinking]);

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef?.current?.scrollHeight;
  }, [messages, thinking, open]);

  return (
    <>
      {!open && (
        <Button
          variant={"outline"}
          className="fixed bottom-8 right-8 p-6 rounded-full w-14 h-14 z-[100]"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M34 6c-1.368 4.944-3.13 6.633-8 8c4.87 1.367 6.632 3.056 8 8c1.368-4.944 3.13-6.633 8-8c-4.87-1.367-6.632-3.056-8-8m-14 8c-2.395 8.651-5.476 11.608-14 14c8.524 2.392 11.605 5.349 14 14c2.395-8.651 5.476-11.608 14-14c-8.524-2.392-11.605-5.349-14-14"
            />
          </svg>
        </Button>
      )}

      {open && (
        <div className="flex flex-col fixed bottom-0 right-0 left-0 md:left-auto md:bottom-8 md:right-4 w-screen h-screen md:w-[500px] lg:w-[600px] md:rounded-2xl md:h-[600px] bg-[#303030]/25 p-3 backdrop-blur-2xl z-[100] shadow-2xl">
          <h1 className="flex gap-x-2 w-full text-center justify-center items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                d="M34 6c-1.368 4.944-3.13 6.633-8 8c4.87 1.367 6.632 3.056 8 8c1.368-4.944 3.13-6.633 8-8c-4.87-1.367-6.632-3.056-8-8m-14 8c-2.395 8.651-5.476 11.608-14 14c8.524 2.392 11.605 5.349 14 14c2.395-8.651 5.476-11.608 14-14c-8.524-2.392-11.605-5.349-14-14"
              />
            </svg>
            Stamatis' AI
            <span className="flex-1" />
            <Button
              variant={"ghost"}
              onClick={() => setOpen(false)}
              size="icon"
              className="hover:bg-white/10 rounded-full"
            >
              <X />
            </Button>
          </h1>

          <div
            ref={chatRef}
            className="flex-1 w-[97.5%] md:w-[40%] md:min-w-[485px] lg:min-w-[575px] overflow-y-auto pb-4"
          >
            {messages.map((message) => (
              <motion.div className="flex gap-x-2 mt-2">
                {message.role === "ai" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    className="mt-1"
                  >
                    <path
                      fill="currentColor"
                      d="M34 6c-1.368 4.944-3.13 6.633-8 8c4.87 1.367 6.632 3.056 8 8c1.368-4.944 3.13-6.633 8-8c-4.87-1.367-6.632-3.056-8-8m-14 8c-2.395 8.651-5.476 11.608-14 14c8.524 2.392 11.605 5.349 14 14c2.395-8.651 5.476-11.608 14-14c-8.524-2.392-11.605-5.349-14-14"
                    />
                  </svg>
                )}

                <div
                  className={`${
                    message.role === "user"
                      ? "ml-auto mr-3 shadow-xl bg-primary/15"
                      : "bg-white/10"
                  }  duration-150 rounded-3xl max-w-[85%] p-2 pr-5 pl-5 text-sm min-h-[36px]`}
                >
                  <Typewriter text={message.message} speed={35} />
                </div>
              </motion.div>
            ))}
          </div>

          <Input
            className="duration-150 text-sm md:text-base text-white p-4 h-[60px] outline-none shadow-xl min-w-screen rounded-2xl md:min-w-[400px] m-auto"
            placeholder={
              (thinking ? "Generating response..." : `Ask AI about Stamatis`) &&
              "Temporarily disabled"
            }
            value={prompt}
            maxLength={64}
            disabled={true || thinking}
            onChange={(e) => setPrompt(e.target.value)}
            autoFocus
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (prompt.trim().length === 0) return;

                const newMessages: Message[] = [
                  ...messages,
                  { role: "user", message: prompt.trim() },
                ];

                sendPrompt(newMessages);
              }
            }}
          />
        </div>
      )}
    </>
  );
}
