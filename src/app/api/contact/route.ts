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
      subject: "Vett: Validating your connection to the Circle of Trust",
      html: `
         <!DOCTYPE html>
         <html>
         <head>
           <meta charset="utf-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Vett Trust Verification</title>
         </head>
         <body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #0d1117; color: #ffffff;">
           <div style="max-width: 600px; margin: 0 auto; background-color: #0d1117; padding: 40px 20px;">
             <!-- Header -->
             <div style="text-align: center; margin-bottom: 40px;">
               <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                 <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0;">Vett</h1>
               </div>
               <p style="color: #9ca3af; font-size: 16px; margin: 0;">Where Identity is Absolute and Trust is Earned</p>
             </div>

             <!-- Main Content -->
             <div style="background-color: #1a1a1a; border-radius: 12px; padding: 40px; border: 1px solid #374151;">
                <h2 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">Welcome to the Anchor of Truth, ${name || "there"}!</h2>
               
               <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                 In a world where truth is easily obscured, Vett is the anchor. Whether you are looking for a <strong>Friend, or a SoulMate, or forming personal bonds, or building professional connections or hosting exclusive events</strong>, Vett provides the registry where identity is absolute.
               </p>
               
               <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                 We do not just verify data; we validate the human behind it. To complete your entry into the network where transparency is the baseline, please verify your email address below:
               </p>

               <!-- CTA Button -->
               <div style="text-align: center; margin: 30px 0;">
                 <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}" 
                    style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; transition: all 0.2s ease;">
                   Validate My Identity
                 </a>
               </div>

               <p style="color: #9ca3af; font-size: 14px; line-height: 1.5; margin: 30px 0 0 0;">
                 Trust is not Bought. It's Earned.<br>
                 <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}" style="color: #3b82f6; word-break: break-all;">
                   ${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}
                 </a>
               </p>
             </div>

             <!-- Footer -->
             <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #374151;">
               <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0;">
                 Join the network where transparency is the baseline and trust is the currency.
               </p>
               <p style="color: #6b7280; font-size: 12px; margin: 0;">
                 © 2026 Vett. All rights reserved.
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
