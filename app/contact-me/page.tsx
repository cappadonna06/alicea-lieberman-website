'use client';

import { FormEvent, useState } from 'react';
import { contact } from '@/data/site-content';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="card">
      <h2>CONTACT INFORMATION</h2>
      <p>Address:</p>
      <address>
        {contact.addressLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </address>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <form onSubmit={onSubmit} className="contact-form">
        <label>
          Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
