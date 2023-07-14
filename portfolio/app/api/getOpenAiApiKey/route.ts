
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextResponse } from 'next/server'
import fetch from 'node-fetch';
/**
 * 
 */
import { NextApiRequest, NextApiResponse } from 'next'
export async function GET(Request: NextApiRequest) {

    const apiKey = process.env.OPENAI_API_KEY
  
   
      return NextResponse.json({key: apiKey}, {status: 200})
}


