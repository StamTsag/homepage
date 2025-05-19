"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Message } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "./typewriter";

export default function AIPrompt() {
  const [prompt, setPrompt] = useState("");

  const [thinking, setThinking] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

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
            "Welcome to Stamatis' AI.\nYou can ask me anything to learn more about Stamatis and his past work experience.",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [thinking]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-max m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M34 6c-1.368 4.944-3.13 6.633-8 8c4.87 1.367 6.632 3.056 8 8c1.368-4.944 3.13-6.633 8-8c-4.87-1.367-6.632-3.056-8-8m-14 8c-2.395 8.651-5.476 11.608-14 14c8.524 2.392 11.605 5.349 14 14c2.395-8.651 5.476-11.608 14-14c-8.524-2.392-11.605-5.349-14-14"
            />
          </svg>{" "}
          Learn more about me with AI
        </Button>
      </DialogTrigger>
      <DialogContent
        tabIndex={-1}
        className="focus-none pr-2 pl-2 flex flex-col shadow-none bg-black/95 h-screen w-screen max-w-none border-none rounded-none"
      >
        <DialogTitle className="flex gap-x-2 w-full text-center justify-center items-center">
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
        </DialogTitle>

        <div className="flex-1 w-screen lg:w-[40%] lg:min-w-[400px] m-auto">
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
                    ? "ml-auto mr-3 bg-primary text-black"
                    : "bg-white/10"
                }  duration-150 rounded-3xl max-w-[85%] p-2 pr-5 pl-5 text-sm min-h-[36px]`}
              >
                <Typewriter text={message.message} speed={35} />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {thinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="m-auto flex items-center gap-x-1 text-sm translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M34 6c-1.368 4.944-3.13 6.633-8 8c4.87 1.367 6.632 3.056 8 8c1.368-4.944 3.13-6.633 8-8c-4.87-1.367-6.632-3.056-8-8m-14 8c-2.395 8.651-5.476 11.608-14 14c8.524 2.392 11.605 5.349 14 14c2.395-8.651 5.476-11.608 14-14c-8.524-2.392-11.605-5.349-14-14"
                />
              </svg>
              AI thinking...
            </motion.div>
          )}
        </AnimatePresence>

        <Input
          className="border-0 duration-150 text-sm md:text-lg p-4 h-[60px] outline-none bg-[#272727]/75 shadow-xl max-w-[40%] min-w-[400px] m-auto"
          placeholder={
            thinking ? "Generating response..." : `Ask AI about Stamatis`
          }
          value={prompt}
          maxLength={64}
          disabled={thinking}
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
      </DialogContent>
    </Dialog>
  );
}
