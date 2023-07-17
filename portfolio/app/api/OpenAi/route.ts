
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch';

// backend api route

export default async function handler(req, res) {

  const apiKey = process.env.OPENAI_API_KEY;

  const { model, messages } = req.body;

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

    res.status(200).json(data);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error.message);
  }

}