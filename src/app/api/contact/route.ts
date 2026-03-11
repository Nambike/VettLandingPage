import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, gender, message } = await req.json();

    if (!name || !email || !gender || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const token = uuidv4();

    // Upsert the record into the same table as the submission API
    const { error: upsertError } = await supabase
      .from("submissions_verified")
      .upsert(
        {
          name,
          email,
          gender,
          message,
          token,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'email' }
      );

    if (upsertError) {
      console.error("Supabase upsert error:", upsertError);
      return NextResponse.json({ error: upsertError.message }, { status: 500 });
    }

    // Send verification email to the user (matching submit/route.ts)
    const { data, error } = await resend.emails.send({
      from: "hello@joinvett.com",
      to: email,
      subject: "Welcome to Vett - Please verify your email",
      html: `
         <!DOCTYPE html>
         <html>
         <head>
           <meta charset="utf-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Welcome to Vett</title>
         </head>
         <body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #0d1117; color: #ffffff;">
           <div style="max-width: 600px; margin: 0 auto; background-color: #0d1117; padding: 40px 20px;">
             <!-- Header with Logo -->
             <div style="text-align: center; margin-bottom: 40px;">
               <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                 <img src="${process.env.NEXT_PUBLIC_SITE_URL}/assets/Vett_logo_only.png" 
                      alt="Vett Logo" 
                      style="width: 40px; height: 40px; border-radius: 50%; object-fit: contain; margin: 0 5px;" />
                 <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0;">Vett</h1>
               </div>
               <p style="color: #9ca3af; font-size: 16px; margin: 0;">Revolutionizing Business Solutions with Cutting-Edge Technology</p>
             </div>

             <!-- Main Content -->
             <div style="background-color: #1a1a1a; border-radius: 12px; padding: 40px; border: 1px solid #374151;">
               <h2 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">Welcome ${name || "there"}!</h2>
               
               <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                 Thank you for reaching out to Vett! We're excited to help you find meaningful relationship.
               </p>
               
               <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                 To complete your submission and ensure we can reach you, please verify your email address by clicking the button below:
               </p>

               <!-- CTA Button -->
               <div style="text-align: center; margin: 30px 0;">
                 <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}" 
                    style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; transition: all 0.2s ease;">
                   Verify Email Address
                 </a>
               </div>

               <p style="color: #9ca3af; font-size: 14px; line-height: 1.5; margin: 30px 0 0 0;">
                 If the button doesn't work, you can also copy and paste this link into your browser:<br>
                 <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}" style="color: #3b82f6; word-break: break-all;">
                   ${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}
                 </a>
               </p>
             </div>

             <!-- Footer -->
             <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #374151;">
               <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0;">
                 This email was sent from Vett
               </p>
               <p style="color: #6b7280; font-size: 12px; margin: 0;">
                 © 2025 Vett. All rights reserved.
               </p>
             </div>
           </div>
         </body>
         </html>
       `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Verification email sent" }, { status: 200 });
  } catch (error: any) {
    console.error("Internal API error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
