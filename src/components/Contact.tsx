"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { slideInLeft, slideInRight, VIEWPORT_ONCE } from "@/lib/animations";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validate(fields: FormFields): Partial<FormFields> {
  const errors: Partial<FormFields> = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Enter a valid email.";
  if (!fields.subject.trim()) errors.subject = "Subject is required.";
  if (!fields.message.trim()) errors.message = "Message is required.";
  else if (fields.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      // 1. Try sending directly via Web3Forms if an access key is provided in .env or constant
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (web3FormsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: fields.name,
            email: fields.email,
            subject: fields.subject,
            message: fields.message,
            from_name: `${fields.name} (Portfolio)`,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus("success");
          setFields({ name: "", email: "", subject: "", message: "" });
          return;
        }
      }

      // 2. Direct browser email fallback: Open Gmail compose directly in a new tab
      const emailBody = `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        SITE_CONFIG.email
      )}&su=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(emailBody)}`;

      const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
        fields.subject
      )}&body=${encodeURIComponent(emailBody)}`;

      // Open Gmail web compose in a new tab (works reliably on Chrome/Windows)
      const opened = window.open(gmailUrl, "_blank");

      // If popup was blocked or couldn't open, fallback to mailto
      if (!opened) {
        window.location.href = mailtoLink;
      }

      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's"
          highlight="Connect"
          subtitle="I'm always interested in discussing AI, machine learning, data science, and opportunities to build useful technology."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-2 space-y-4"
          >
            <GlassCard>
              <h3 className="text-white font-semibold mb-5">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 group"
                  aria-label="Send email"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
                    <Mail size={18} className="text-[#6366F1]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#6366F1] transition-colors break-all">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)" }}>
                    <MapPin size={18} className="text-[#06B6D4]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">{SITE_CONFIG.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-[#94A3B8] text-xs mb-3">Connect on</p>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}
                    aria-label="GitHub profile"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ background: "rgba(10,102,194,0.12)", border: "1px solid rgba(10,102,194,0.25)", color: "#60a5fa" }}
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Note about form */}
            <div className="glass rounded-xl p-4">
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                <span className="text-[#F59E0B] font-semibold">Note:</span>{" "}
                Submitting the form will open your email client. To configure direct form submission,
                integrate with{" "}
                <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">
                  EmailJS
                </a>
                {" "}or{" "}
                <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">
                  Formspree
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-3"
          >
            <GlassCard>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <CheckCircle size={32} className="text-[#10B981]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-[#94A3B8] text-sm max-w-sm">
                    Thank you! Your message has been sent. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 btn-secondary text-sm py-2 px-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h3 className="text-white font-semibold mb-5">Send a Message</h3>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg mb-4"
                      style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}>
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">Something went wrong. Please email me directly.</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-[#94A3B8] text-xs font-medium mb-1.5">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-red-400 text-xs" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-[#94A3B8] text-xs font-medium mb-1.5">
                        Email <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-red-400 text-xs" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label htmlFor="contact-subject" className="block text-[#94A3B8] text-xs font-medium mb-1.5">
                      Subject <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={fields.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="form-input"
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-red-400 text-xs" role="alert">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-[#94A3B8] text-xs font-medium mb-1.5">
                      Message <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={5}
                      className="form-input resize-none"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-red-400 text-xs" role="alert">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
