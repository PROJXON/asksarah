// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
// });

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, interest, message } = await request.json();

//     if (!email || !phone || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     await transporter.sendMail({
//       from: `"Ask Sarah Conner" <${process.env.GMAIL_USER}>`,
//       to: process.env.CONTACT_TO_EMAIL,
//       replyTo: email,
//       subject: `New contact form submission from ${name || "Unknown"}`,
//       html: `
//         <p><strong>Name:</strong> ${name || "N/A"}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Interest:</strong> ${interest || "N/A"}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
//   }
// }
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, interest, message } = await request.json();

    if (!email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact form submission from ${name || "Unknown"}`,
      html: `
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}