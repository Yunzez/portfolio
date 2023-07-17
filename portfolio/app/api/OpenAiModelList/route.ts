
// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv").config();

// import { NextRequest, NextResponse } from 'next/server';
// export async function GET(Request: NextRequest) {

//       const apiKey = process.env.OPENAI_API_KEY
//       const url = 'https://api.openai.com/v1/models'
//       console.log(apiKey)
    
//         console.log('try to post')
//         const response = await fetch(url, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${apiKey}`,
//           }
//         })

//         // if(response.ok) {
//         //   const data = await response.json()
//         //   console.log('fetched data')
         
//         //   return new NextResponse( data , {
//         //       status: 200,
//         //     }) 
//         // }else {
//         //   const data = await response.json()
//         //   return new NextResponse( data , {
//         //     status: 500,
//         //   })  
//         // }

//         const data = await response.json()
//           console.log('fetched data')
         
//           return NextResponse.json( data , {
//               status: 200,
//             }) 
        
//   }


