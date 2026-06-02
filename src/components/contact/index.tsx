'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL: FormState = { name: '', phone: '', email: '', company: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(INITIAL);
    }
  };

  const field = (key: keyof FormState, label: string, type = 'text', rows?: number) => (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]/60 font-body mb-1.5 block">
        {label}
      </label>
      {rows ? (
        <textarea
          rows={rows}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          className={`w-full px-4 py-3 border rounded-xl text-sm font-body outline-none transition-colors resize-none ${
            errors[key] ? 'border-red-400' : 'border-[#0a0a0a]/15 focus:border-[#c8a045]'
          }`}
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          className={`w-full px-4 py-3 border rounded-xl text-sm font-body outline-none transition-colors ${
            errors[key] ? 'border-red-400' : 'border-[#0a0a0a]/15 focus:border-[#c8a045]'
          }`}
          placeholder={label}
        />
      )}
      {errors[key] && <p className="text-red-500 text-xs mt-1 font-body">{errors[key]}</p>}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-widest uppercase text-[#c8a045] mb-4 font-body"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-semibold text-white font-heading"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Form + Details */}
      <section className="bg-[#f5f0e8] py-20 lg:py-28">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-medium text-[#0a0a0a] font-heading mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0a0a0a] font-heading mb-2">Message Sent!</h3>
                  <p className="text-[#0a0a0a]/60 font-body text-sm mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#c8a045] text-sm font-semibold font-body hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {field('name', 'Your Name')}
                    {field('phone', 'Phone Number', 'tel')}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {field('email', 'Email Address', 'email')}
                    {field('company', 'Company Name')}
                  </div>
                  {field('message', 'Your Message', 'text', 5)}
                  <button
                    type="submit"
                    className="w-full bg-[#0a0a0a] hover:bg-[#c8a045] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors duration-200 font-body"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right — Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-[#0a0a0a] font-heading mb-6">Contact Details</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#c8a045]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]/40 font-body mb-1">Phone</p>
                      <p className="text-[#0a0a0a] font-body text-sm">+91 98765 43210</p>
                      <p className="text-[#0a0a0a] font-body text-sm">+91 98765 43211</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#c8a045]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]/40 font-body mb-1">Email</p>
                      <p className="text-[#0a0a0a] font-body text-sm">info@rajendras.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#c8a045]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]/40 font-body mb-1">Address</p>
                      <p className="text-[#0a0a0a] font-body text-sm leading-relaxed">
                        123, Trade Center,<br />Indore, Madhya Pradesh,<br />India - 452001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl transition-colors"
              >
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
                <div>
                  <p className="font-semibold font-body text-sm">Chat on WhatsApp</p>
                  <p className="text-white/70 text-xs font-body">Fastest response — usually within 1 hour</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="bg-[#e8e0d0] rounded-2xl h-52 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-[#c8a045] mx-auto mb-2" />
                  <p className="text-[#0a0a0a]/50 text-sm font-body font-semibold">Visit Us</p>
                  <p className="text-[#0a0a0a]/30 text-xs font-body mt-1">123, Trade Center, Indore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
