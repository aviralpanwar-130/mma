"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/shared/ui/Container";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }

    if (!EMAIL_PATTERN.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-t border-border bg-surface-muted py-section md:py-section-lg"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid h-full w-full grid-cols-8 md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-white" />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title mb-4">Join the Fight Community</h2>
          <p className="mb-10 text-base text-on-surface-muted md:text-lg">
            Get fight night breakdowns, exclusive interviews, and community event
            invites directly in your inbox.
          </p>

          {submitted ? (
            <div className="border border-primary/40 bg-primary/10 px-6 py-8">
              <p className="font-display text-2xl uppercase text-primary">
                You&apos;re in the corner!
              </p>
              <p className="mt-3 text-on-surface-muted">
                Thanks for joining the baithak. Fight content is on its way to your
                inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col gap-3"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="w-full border border-border bg-black px-6 py-4 font-label text-xs font-bold tracking-widest text-white uppercase outline-none transition-all placeholder:text-on-surface-dim focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {error ? (
                <p className="text-left text-sm text-primary">{error}</p>
              ) : null}
              <button
                type="submit"
                className="w-full bg-primary py-4 font-display text-sm uppercase text-white crimson-glow transition-all hover:bg-primary-bright active:scale-[0.98]"
              >
                Join
              </button>
            </form>
          )}

          <p className="mt-6 font-label text-[10px] tracking-widest text-on-surface-dim uppercase">
            No spam. Just pure fight content. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
