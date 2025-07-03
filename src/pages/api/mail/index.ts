// /pages/api/sendEmail.ts
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Solo se permiten POST requests" });
  }

  const { subject, html } = JSON.parse(req.body);


  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",   
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // tu correo
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // la App Password
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL, //cambiar por email process.env.NEXT_PUBLIC_EMAIL
      subject: subject,
      html: html
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error al enviar el mail:", err);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
