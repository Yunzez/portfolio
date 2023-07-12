
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

import { NextApiRequest, NextApiResponse } from 'next'
export async function POST(Request: Request) {

      const apiKey = process.env.OPENAI_API_KEY
      const url = 'https://api.openai.com/v1/chat/completions'
    
      const messages = 'hello, can you just say hi?'
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
        console.log('try to post')
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body,
        })
        const data = await response.json()
        console.log('fetched data')
        return new Response( data , {
            status: 200,
          }) 
      } catch (error:any) {
        console.log('error occur', error)
        return new Response( error?.message , {
            status: 500,
          });
      }
  }


