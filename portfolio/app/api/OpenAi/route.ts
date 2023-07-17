require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";

export interface Message {
    role: "system" | "user" | "assistant";
    content: string;
  }

 
export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  const messages = await request.json() 

console.log(messages)
  console.log(apiKey)
  const url = "https://api.openai.com/v1/chat/completions";
  const body = JSON.stringify({
    "model": "gpt-3.5-turbo",
     messages
  });

//   console.log(body)
  console.log('try post')
  try {
    const openaiRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });
    const data = await openaiRes.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
