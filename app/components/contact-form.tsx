"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitContactForm } from "../actions";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);

    try {
      const response = await submitContactForm(formData);
      setMessage(response.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6 ">
        <div className="mx-auto max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Contact Me
          </h2>
          <Card className="p-6 backdrop-blur-lg">
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea id="message" name="message" required />
              </div>
              <Button
                type="submit"
                className="text-xs md:text-[0.8rem] w-full"
                disabled={pending || submitted}
                variant={"outline"}
              >
                {pending
                  ? "Sending..."
                  : submitted
                  ? "Message sent"
                  : "Send Message"}
              </Button>
              {message && (
                <p className="text-xs md:text-sm text-center mt-4 text-muted-foreground">
                  {message}
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
