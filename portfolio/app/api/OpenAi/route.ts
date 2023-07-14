
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch';

export async function POST(Request: NextRequest) {

    const apiKey = process.env.OPENAI_API_KEY
    const url = 'https://api.openai.com/v1/chat/completions'
  
    const body = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "content": "this is a test from postman, can you say hi to me ?",
              "role":"user"
          }
      ]
    })
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body,
      })
      const data = await response.json()
      NextResponse.json(data, {status: 200})
    } catch (error) {
      console.error('Error occurred:', error)
      NextResponse.json(error, {status: 500})
  }
}


