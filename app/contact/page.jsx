'use client';

import React, { useState } from 'react';
import { LinkPreview } from '@/app/components/Ancertenity/link-preview';
import emailjs from '@emailjs/browser';
import {
  FiGithub, FiLinkedin, FiMail, FiSend, FiCopy, FiCheck, FiClock, FiUserCheck, FiAlertCircle
} from 'react-icons/fi';

export default function Page() {
  const EMAIL = 'yubrajkhatri977@gmail.com'; // <-- put your real email here

  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', _hp: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((x) => ({ ...x, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!values.name.trim()) err.name = 'Your name is required.';
    if (!values.email.trim()) err.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) err.email = 'Enter a valid email.';
    if (!values.message.trim()) err.message = 'Please write a short message.';
    if (values._hp) err.message = 'Bot detected.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setBusy(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject || 'Contact Form Message',
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      setBusy(false);
      setSent(true);
      setValues({ name: '', email: '', subject: '', message: '', _hp: '' });
      setTimeout(() => setSent(false), 3200);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setBusy(false);
      setErrors({ message: 'Failed to send message. Please try again.' });
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block">
            Contact Me
            <span className="block h-[3px] w-24 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Collaborations, projects, or just saying hi — my inbox is open.
          </p>
        </header>

        {/* Top row: Copy email + quick stats */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-3.5 py-1.5 text-sm
                       text-blue-600 hover:bg-blue-500/10 transition dark:text-blue-400 dark:border-blue-400/40"
            aria-label="Copy email"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? 'Copied' : EMAIL}
          </button>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3.5 py-1.5 text-sm
                          text-neutral-700 dark:text-neutral-300 dark:border-neutral-700">
            <FiClock /> Replies within 24h
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3.5 py-1.5 text-sm
                          text-neutral-700 dark:text-neutral-300 dark:border-neutral-700">
            <FiUserCheck /> Open to freelance & collabs
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Form card */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-200/70 bg-white/80 backdrop-blur-sm p-5 shadow-sm
                       dark:border-neutral-800 dark:bg-white/[0.04]"
          >
            {/* honeypot */}
            <input
              name="_hp"
              value={values._hp}
              onChange={onChange}
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
            />

            {sent && (
              <div className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-600 dark:text-emerald-400">
                Message sent! I’ll get back to you soon.
              </div>
            )}

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium opacity-80">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="e.g., Yubraj Khatri"
                  className={`w-full rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium opacity-80">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium opacity-80">
                  Subject (optional)
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  placeholder="e.g., Freelance project inquiry"
                  className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                             dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium opacity-80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell me a bit about your idea, timeline, and goals…"
                  className={`w-full resize-y rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={busy}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white
                           transition hover:bg-blue-500 disabled:opacity-60"
              >
                {busy ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              <p className="mt-2 text-center text-xs opacity-70">
                Prefer email? <a href={`mailto:${EMAIL}`} className="underline decoration-dotted">Write me directly</a>.
              </p>
            </div>
          </form>

          {/* Right: Socials + LinkPreview buttons */}
          <aside className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-5 shadow-sm
                            dark:border-neutral-800 dark:bg-white/[0.03]">
            <h2 className="text-lg font-semibold">Find me online</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Hover to preview — click to open.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <LinkPreview
                url="https://github.com/Yubraj977"
                imageSrc="https://images.unsplash.com/photo-1629904853893-c2c8981a1cfe?q=80&w=1200&auto=format&fit=crop"
                isStatic
                className="flex items-center justify-between rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3
                           hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <span className="inline-flex items-center gap-2"><FiGithub /> GitHub</span>
                <span className="text-xs opacity-60">/Yubraj977</span>
              </LinkPreview>

              <LinkPreview
                url="https://linkedin.com/in/yubraj-khatri-155786243"
                imageSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                isStatic
                className="flex items-center justify-between rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3
                           hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <span className="inline-flex items-center gap-2"><FiLinkedin /> LinkedIn</span>
                <span className="text-xs opacity-60">@yubraj-khatri</span>
              </LinkPreview>

              <LinkPreview
                url={`mailto:${EMAIL}`}
                imageSrc="https://images.unsplash.com/photo-1581091215360-1a1c91a3d658?q=80&w=1200&auto=format&fit=crop"
                isStatic
                className="flex items-center justify-between rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3
                           hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <span className="inline-flex items-center gap-2"><FiMail /> Email</span>
                <span className="text-xs opacity-60">{EMAIL}</span>
              </LinkPreview>
            </div>

            <div className="mt-6 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
              <h3 className="text-sm font-semibold">What works best</h3>
              <ul className="mt-2 text-sm space-y-1 opacity-80">
                <li>• Share your timeline & budget range if you have one.</li>
                <li>• Links/screenshots help me reply faster.</li>
                <li>• I’m UTC-4; async works great.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}