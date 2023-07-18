
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch';

export async function GET(Request: NextRequest) {

    const apiKey = 'how do you think youre gonna get an api key like this'//process.env.OPENAI_API_KEY
  
   
    return NextResponse.json({key: apiKey}, {status: 200})
}


