import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(254),
  message: z.string().max(2000).optional().or(z.literal(""))
});

const timestamps = new Map<string, number[]>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const previous = (timestamps.get(ip) ?? []).filter((stamp) => now - stamp < 60_000);
  if (previous.length >= 5) {
    return NextResponse.json({ ok: false, message: "Too many requests. Please try again in a minute." }, { status: 429 });
  }
  timestamps.set(ip, [...previous, now]);

  try {
    const formData = await request.formData();
    if (String(formData.get("website") ?? "").trim()) {
      return NextResponse.json({ ok: true, message: "Thanks." });
    }

    const parsed = schema.safeParse({
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    });

    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    const webhook = process.env.STACKRA_CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { ok: false, message: "Contact delivery is not configured for this preview. Please use WhatsApp or email instead." },
        { status: 503 }
      );
    }

    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ source: "stackra.dev", email: parsed.data.email, message: parsed.data.message ?? "" }),
      cache: "no-store"
    });

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, message: "We couldn't send that message right now. Please try WhatsApp instead." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Message sent. Stackra will be in touch." });
  } catch {
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try WhatsApp instead." }, { status: 500 });
  }
}
