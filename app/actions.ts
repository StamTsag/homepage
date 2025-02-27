"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    return {
      message: "Something went wrong.",
    };
  } else {
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Stamatis Tsagkliotis <admin@stamtsag.com>",
      to: ["stamatiostsag@gmail.com"],
      subject: `Portfolio - ${name} ${email}`,
      html: `${message}`,
    });

    return {
      message: "Thank you for your message! We'll be in contact soon.",
    };
  }
}
