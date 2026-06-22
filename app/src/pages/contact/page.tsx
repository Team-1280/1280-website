import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ 
    type: '', 
    message: '' 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Pulling the keys safely from your hidden .env.local file (Vite style)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    try {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      // 🌟 Map your React state fields to what EmailJS expects in your screenshot:
      name: `${formData.firstName} ${formData.lastName}`.trim(), 
      email: formData.email,
      title: formData.subject,   // Maps to your template's {{title}}
      message: formData.message, // Maps to your template's {{message}}
    },
    PUBLIC_KEY
  );

  // ... rest of your success logic

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! We will get back to you soon.',
      });
      
      setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try emailing us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#151417] text-zinc-100 min-h-screen font-sans selection:bg-[#fcc307] selection:text-[#1f1e23]">
      
      {/* Header Hero Area */}
      <section className="bg-[#1f1e23] border-b border-zinc-800/80 py-16 px-4 md:px-12 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none z-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #fcc307 1px, transparent 1px),
              linear-gradient(to bottom, #fcc307 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-2">
          <span className="text-[#fcc307] text-xs font-bold tracking-[0.25em] uppercase font-mono">
            {"Reach Out"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            {"CONTACT "} <span className="text-[#fcc307]">{"US"}</span>
          </h1>
          <div className="w-12 h-[2px] bg-[#fcc307] my-2"></div>
          <p className="text-zinc-300 text-xs md:text-sm font-medium max-w-xl mt-2 leading-relaxed">
            {"Questions, press inquiries, sponsorship discussions, or interested in joining Team 1280? We would love to hear from you."}
          </p>
        </div>
      </section>

      {/* Content Layout Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[#fcc307] text-xs font-bold tracking-widest uppercase font-mono">{"Find Us"}</span>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
              {"GET IN "} <span className="text-[#fcc307]">{"TOUCH"}</span>
            </h2>
          </div>

          <div className="bg-[#1f1e23] border border-zinc-800/60 rounded-sm divide-y divide-zinc-800/60">
            {/* Email */}
            <div className="p-5 flex gap-4 items-start text-left">
              <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm text-[#fcc307] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-zinc-500 font-bold uppercase tracking-wider text-[10px] font-mono leading-none mb-1">{"Email"}</h4>
                <a href="mailto:sanramonvalleyrobotics@gmail.com" className="text-[#fcc307] font-bold text-sm hover:underline break-all">{"sanramonvalleyrobotics@gmail.com"}</a>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 flex gap-4 items-start text-left">
              <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm text-[#fcc307] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-zinc-500 font-bold uppercase tracking-wider text-[10px] font-mono leading-none mb-1">{"Location"}</h4>
                <p className="text-zinc-200 font-bold text-sm leading-snug">{"SRVHS Career and Technical Education Building"}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-5 flex gap-4 items-start text-left">
              <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm text-[#fcc307] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div>
                <h4 className="text-zinc-500 font-bold uppercase tracking-wider text-[10px] font-mono leading-none mb-1">{"Social Media"}</h4>
                <a href="https://instagram.com/frcteam1280" target="_blank" rel="noopener noreferrer" className="text-[#fcc307] font-bold text-sm hover:underline">{"@frcteam1280"}</a>
              </div>
            </div>
          </div>

          <div className="w-full h-44 overflow-hidden border border-zinc-800/60 rounded-sm relative group">
            <div className="absolute inset-0 bg-[#fcc307]/5 mix-blend-multiply pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
            <img 
              src="/Donate2.png" 
              alt="Team 1280 Robotics Lab" 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-[#1f1e23] border border-zinc-800/60 p-8 md:p-10 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col text-left">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1.5 font-mono">
                  {"First Name "} <span className="text-[#fcc307]">{"*"}</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#151417] border border-zinc-800 focus:border-[#fcc307] text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-white font-medium"
                />
              </div>
              <div className="flex flex-col text-left">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1.5 font-mono">
                  {"Last Name "} <span className="text-[#fcc307]">{"*"}</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#151417] border border-zinc-800 focus:border-[#fcc307] text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-white font-medium"
                />
              </div>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1.5 font-mono">
                {"Email Address "} <span className="text-[#fcc307]">{"*"}</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#151417] border border-zinc-800 focus:border-[#fcc307] text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-white font-medium"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1.5 font-mono">
                {"Subject"}
              </label>
              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#151417] border border-zinc-800 focus:border-[#fcc307] text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-white font-medium appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">{"General Inquiry"}</option>
                  <option value="Sponsorship & Partnership">{"Sponsorship & Partnership"}</option>
                  <option value="Mentorship Opportunities">{"Mentorship Opportunities"}</option>
                  <option value="Join the Team (Students)">{"Join the Team (Students)"}</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1.5 font-mono">
                {"Message "} <span className="text-[#fcc307]">{"*"}</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#151417] border border-zinc-800 focus:border-[#fcc307] text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-white font-medium resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-4 rounded-sm text-xs font-bold text-left flex gap-2 items-center ${
                status.type === 'success' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/50' : 'bg-rose-950/40 text-rose-400 border border-rose-800/50'
              }`}>
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#fcc307] disabled:bg-zinc-700 text-[#1f1e23] disabled:text-zinc-400 font-black uppercase text-xs tracking-widest rounded-sm hover:bg-yellow-500 transition-colors shadow-md flex items-center justify-center gap-2 font-mono group"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {"Sending..."}
                </>
              ) : (
                <>
                  {"Send Message"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </>
              )}
            </button>
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;