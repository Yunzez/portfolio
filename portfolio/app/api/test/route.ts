
import { NextApiRequest, NextApiResponse } from 'next'
export async function GET(Request: NextApiRequest) {
    return new Response("This is a new API route");
  }