'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { site } from '@/data/site';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailFallback, setEmailFallback] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('loading'); setMessage(''); setEmailFallback('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const makeEmailFallback = () => {
      const subject = encodeURIComponent(String(payload.subject ?? 'Website enquiry'));
      const body = encodeURIComponent(`Name: ${String(payload.name ?? '')}\nEmail: ${String(payload.email ?? '')}\n\n${String(payload.message ?? '')}`);
      setEmailFallback(`mailto:${site.email}?subject=${subject}&body=${body}`);
      setMessage('Form delivery is unavailable right now. Send your message by email instead.');
      setState('error');
    };
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json() as { error?: string };
      if (!response.ok) {
        if (response.status >= 500) {
          makeEmailFallback();
          return;
        }
        throw new Error(result.error ?? 'Please check the form and try again.');
      }
      form.reset(); setState('success'); setMessage('Message received. Thank you.');
    } catch { makeEmailFallback(); }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" required minLength={2} maxLength={120} autoComplete="name"/></label><label>Email<input name="email" type="email" required maxLength={254} autoComplete="email"/></label></div>
    <label>What are you building?<input name="subject" required minLength={3} maxLength={200}/></label>
    <label>Message<textarea name="message" rows={3} required minLength={10} maxLength={5000}/></label>
    <button className="send-button" disabled={state === 'loading'} type="submit">{state === 'loading' ? 'Sending' : 'Send message'} {state === 'success' ? <Check size={16}/> : <ArrowUpRight size={16}/>}</button>
    <p className={`form-message ${state}`} role="status" aria-live="polite">{message}{emailFallback && <> <a href={emailFallback}>Email Samarth</a></>}</p>
  </form>;
}
