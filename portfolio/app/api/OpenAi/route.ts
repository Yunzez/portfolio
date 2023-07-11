
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

import { NextApiRequest, NextApiResponse } from 'next'
export async function POST(Request: Request) {
    // const configuration = new Configuration({
    //     apiKey: process.env.OPENAI_API_KEY,
    //   });
    //   const openai = new OpenAIApi(configuration);
    
      const apiKey = process.env.OPENAI_API_KEY
      const url = 'https://api.openai.com/v1/chat/completions'
    
      const messages = 'hello, can you just say hi?'
      const body = JSON.stringify({
        prompt: "Say this is a test",
        model: 'gpt-3.5-turbo',
        stream: false,
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
        return new Response( data , {
            status: 200,
          })
      } catch (error) {
        console.log('error occur')
        return new Response( error.message , {
            status: 500,
          });
      }
  }


