import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Invalid Token - Nambike</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #0d1117; color: white; }
          .error { color: #ef4444; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="error">❌ Invalid Token</div>
        <p>The verification link is invalid or malformed.</p>
      </body>
      </html>
    `, { status: 400, headers: { 'Content-Type': 'text/html' } });
  }

  // Debug: Log the token being searched
  console.log('Searching for token:', token);

  const { data, error } = await supabase
    .from("submissions_verified")
    .select("*")
    .eq("token", token)
    .single();

  // Debug: Log the query result
  console.log('Query result:', { data, error });

  if (error) {
    console.log('Supabase error:', error);
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Verification Error - Nambike</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #0d1117; color: white; }
          .error { color: #ef4444; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="error">❌ Verification Error</div>
        <p>There was an error processing your verification. Please try again later.</p>
      </body>
      </html>
    `, { status: 500, headers: { 'Content-Type': 'text/html' } });
  }

  if (!data) {
    console.log('Token not found in database:', token);
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Invalid Token - Nambike</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #0d1117; color: white; }
          .error { color: #ef4444; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="error">❌ Invalid or Expired Token</div>
        <p>The verification link has expired or is invalid. Please request a new verification email.</p>
      </body>
      </html>
    `, { status: 400, headers: { 'Content-Type': 'text/html' } });
  }

  // Debug: Log the update attempt
  console.log('Updating record with ID:', data.id);

  const { error: updateError } = await supabase
    .from("submissions_verified")
    .update({ verified: true })
    .eq("id", data.id);

  if (updateError) {
    console.log('Update error:', updateError);
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Verification Error - Nambike</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #0d1117; color: white; }
          .error { color: #ef4444; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="error">❌ Verification Error</div>
        <p>There was an error processing your verification. Please try again later.</p>
      </body>
      </html>
    `, { status: 500, headers: { 'Content-Type': 'text/html' } });
  }

  console.log('Successfully updated verification status');

  // Notify the team about the verified submission
  try {
    const { name, email, gender, message } = data;
    await resend.emails.send({
      from: "notifications@joinvett.com", // Use a verified domain
      to: "hello@joinvett.com",
      replyTo: email,
      subject: `[VERIFIED] New Interest from ${name}`,
      html: `
        <div>
          <h2>Verified Interest Submission</h2>
          <p>A user has just verified their email address and confirmed their interest.</p>
          <hr/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Message:</strong></p>
          <p>${message ? message.replace(/\n/g, "<br/>") : "No message provided"}</p>
          <hr/>
          <p><em>This user is now marked as verified in the database.</em></p>
        </div>
      `,
    });
    console.log('Team notification email sent successfully');
  } catch (notificationError) {
    console.error('Failed to send team notification:', notificationError);
    // Not returning error response here as user verification was successful
  }

  // Return a proper HTML success page
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verified - Nambike</title>
      <style>
        body {
          font-family: 'Inter', Arial, sans-serif;
          background-color: #0d1117;
          color: #ffffff;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        .container {
          text-align: center;
          max-width: 600px;
          padding: 40px 20px;
          background-color: #1a1a1a;
          border-radius: 12px;
          border: 1px solid #374151;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }
        .logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        h1 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          margin: 0;
        }
        .success-icon {
          font-size: 48px;
          color: #10b981;
          margin-bottom: 20px;
        }
        h2 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 20px 0;
        }
        p {
          color: #d1d5db;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img src="${process.env.NEXT_PUBLIC_SITE_URL}/assets/NambikeJustLogo.png" alt="Nambike Logo" />
          <h1>Nambike</h1>
        </div>
        <div class="success-icon">✅</div>
        <h2>Email Successfully Verified!</h2>
        <p>Thank you for verifying your email address. We'll be in touch soon with updates about your submission.</p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="button">Return to Nambike</a>
      </div>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
