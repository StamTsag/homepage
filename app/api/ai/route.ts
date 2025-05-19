import { NextRequest, NextResponse } from "next/server";

const KEY = process.env.OPENROUTER_KEY;
const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT;

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing prompt" },
        { status: 400 }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ];

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-8b-instruct:free", // fast & good
          messages,
        }),
      }
    );

    if (response.ok) {
      const resJson = await response.json();

      const answer =
        resJson.choices?.[0]?.message?.content || "Couldn't generate an answer";

      return NextResponse.json({ answer });
    } else {
      return NextResponse.json(
        { error: "Failed to generate response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
