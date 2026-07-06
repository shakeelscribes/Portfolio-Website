import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Supabase
    const { error: supabaseError } = await supabase.from("messages").insert([
      { name, email, message },
    ]);

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return NextResponse.json({ error: "Failed to save message to database" }, { status: 500 });
    }

    // 2. Send to Slack Webhook (if configured)
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      const slackMessage = {
        text: `📬 *New Contact Form Submission*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
      };

      try {
        await fetch(slackWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackMessage),
        });
      } catch (slackError) {
        console.error("Slack webhook error:", slackError);
        // We don't fail the request if Slack fails, since Supabase succeeded
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
