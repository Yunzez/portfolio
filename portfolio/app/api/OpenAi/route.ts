
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch';

// backend api route
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch';

export default async function POST(request:  NextRequest) {

  const apiKey = process.env.OPENAI_API_KEY;

  const { model, messages } = request.body;

  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    model,
    messages  
  });

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

    return NextResponse.json({data}, {status: 200})

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }

}