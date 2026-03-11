import { NextResponse } from "next/server";
import { Resend } from "resend";

// Vett will need to provide this in their .env file
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_fallback");

export async function POST(req: Request) {
  try {
    const { name, email, gender, message } = await req.json();

    if (!name || !email || !gender || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "hello@joinvett.com", // Typically you'd use a verified domain here, e.g. contact@vett.app
      to: email, // Recipient team email (assuming hello@vett.app for now)
      replyTo: "hello@joinvett.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div>
          <h2>New Message from Vett Landing Page</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
