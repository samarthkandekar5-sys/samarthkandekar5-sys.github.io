import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (name.length < 2 || name.length > 120 || !emailPattern.test(email) || email.length > 254 || subject.length < 3 || subject.length > 200 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: 'Please complete every field with valid information.' }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: 'Contact form delivery is not configured.', fallback: true }, { status: 503 });
  }

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) {
      return NextResponse.json({ error: 'Contact delivery is temporarily unavailable.', fallback: true }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: 'Contact delivery is temporarily unavailable.', fallback: true }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
