import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
      company?: string;
    };

    if (body.company) {
      return NextResponse.json({ message: "Thanks for reaching out." }, { status: 200 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server email configuration is missing (RESEND_API_KEY)." },
        { status: 500 },
      );
    }

    const to = "alicea.lieberman@anderson.ucla.edu";
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[Website Contact] ${subject}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend send failure:", errorBody);
      return NextResponse.json({ error: "Unable to send message at this time." }, { status: 502 });
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
