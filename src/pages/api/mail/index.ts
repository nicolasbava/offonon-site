// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
import {ApiMailUp, ApiVoidResponse} from "@/types/api";
import fs from 'fs'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);


// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'nicolas.bava@helpia.com', // Change to your recipient
//   from: 'info@centropierre.com.ar', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun!!!',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };


      
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiVoidResponse>
) {

  if(req.method === "POST") {
    try {
      const from = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string
      const supportEmails = (process.env.NEXT_PUBLIC_SUPPORT_EMAILS as string).split(",")
      const {subject, body,} = JSON.parse(req?.body ?? "") as ApiMailUp
      console.log(' USE MAIL subject',subject);
      console.log(' USE MAIL body',body);


        // const sendData = supportEmails.map<sgMail.MailDataRequired>((to)=>{
        //     return {
        //         to,
        //         from,
        //         // templateId,
        //         subject,
        //         dynamicTemplateData: {
        //             subject,
        //             body
        //         }
        //     }
        // })

        const message = {
          to: 'cursospierre623@gmail.com', // Change to your recipient
          // to: 'nicobava96@gmail.com', // Change to your recipient
          from: 'cursospierre623@gmail.com', // Change to your verified sender
          subject: subject,
          html: body,
          
        }
  
        console.log('message sended', message)

     await sgMail.send(message)

      res.status(200).json({success: true});
    } catch (error) {
      console.log('error in api mail')
      res.status(500).json({success: false, error});
    }
  }

}
