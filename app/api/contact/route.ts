import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail SMTP transporter — credentials are read server-side only, never exposed to the browser
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,   // your Gmail address
    pass: process.env.GMAIL_PASS,   // your 16-character Gmail App Password
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:12px;">
          <div style="background:#007979;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:22px;">New Message from Portfolio</h1>
          </div>
          <div style="background:white;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:110px;">
                  <strong style="color:#007979;font-size:13px;">Name</strong>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <strong style="color:#007979;font-size:13px;">Email</strong>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333;">
                  <a href="mailto:${email}" style="color:#007979;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <strong style="color:#007979;font-size:13px;">Subject</strong>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333;">
                  ${subject}
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;">
              <strong style="color:#007979;font-size:13px;display:block;margin-bottom:10px;">Message</strong>
              <div style="background:#f9fafb;border-left:3px solid #007979;padding:16px;border-radius:4px;font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap;">${message}</div>
            </div>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:20px;">
            Sent from your portfolio contact form · Reply-To: ${email}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
