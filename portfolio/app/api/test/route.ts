import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'
export async function GET(Request: Request) {
    return NextResponse.json({message: "This is a new API route"});
  }