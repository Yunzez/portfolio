require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  console.log(apiKey)
  const url = "https://api.openai.com/v1/chat/completions";
  const body = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "content":
          "when you are ready, respond by saying ChatGPT is ready, please feel free to ask any question about Yunze",
        "role": "system"
      }
    ]
  });

  console.log(body)
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
