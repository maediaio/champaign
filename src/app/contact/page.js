"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "Routine Maintenance", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Routine Maintenance", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <main className="pt-36 pb-16 px-6 max-w-lg mx-auto space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
            <div className="space-y-3">
                <span
                    className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-extrabold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
                    Live 24/7 Availability
                </span>
                <h1 className="text-4xl font-extrabold font-manrope tracking-tight text-slate-900">Precision Under
                    Pressure.</h1>
                <p className="text-on-slate-100 leading-relaxed">Whether it's a midnight burst pipe or a scheduled
                    inspection, our master engineers are on standby.</p>
            </div>
            {/* Emergency Action Card */}
            <div className="bg-gradient-to-br from-emergency-red to-red-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 space-y-5">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-3xl" data-icon="emergency">emergency</span>
                        <h2 className="text-2xl font-bold font-manrope">Urgent Repair?</h2>
                    </div>
                    <p className="text-white/90 font-medium">Average arrival time: <span className="font-bold">45 minutes</span>
                    </p>
                    <a className="flex items-center justify-center gap-2 w-full bg-white text-brand-blue py-4 rounded-xl font-bold font-manrope tracking-wide transition-all active:scale-95 shadow-lg hover:bg-slate-50"
                        href="tel:8434600163">
                        <span className="material-symbols-outlined" data-icon="call" data-weight="fill"
                            style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                        TAP TO CALL NOW
                    </a>
                </div>
                {/* Abstract visual element */}
                <div className="absolute -right-10 -bottom-10 opacity-10 scale-150">
                    <span className="material-symbols-outlined text-[120px]" data-icon="water_drop">water_drop</span>
                </div>
            </div>
        </section>
        
        {/* Contact Form */}
        <section className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-[11px] font-extrabold font-manrope tracking-[0.2em] text-brand-blue uppercase">
                    Non-Urgent Inquiry</h3>
                <p className="text-sm text-on-slate-100">Request a quote or book a routine inspection below. We
                    respond within 2 business hours.</p>
            </div>
            
            {status === "success" && (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200 font-bold mb-4">
                    Message sent successfully! We will contact you shortly.
                </div>
            )}
            {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 font-bold mb-4">
                    Failed to send message. Please try again or call us.
                </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all shadow-sm outline-none"
                        placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email
                        Address</label>
                    <input
                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all shadow-sm outline-none"
                        placeholder="contact@champaignplumbingsc.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service
                        Type</label>
                    <select name="service" value={formData.service} onChange={handleChange} 
                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all shadow-sm outline-none appearance-none">
                        <option>Routine Maintenance</option>
                        <option>Drain Cleaning</option>
                        <option>Water Heater Repair</option>
                        <option>Sewer Line Inspection</option>
                        <option>Commercial Fitting</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all shadow-sm outline-none"
                        placeholder="Describe your plumbing needs..." rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button
                    className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold font-manrope tracking-widest mt-2 shadow-lg hover:bg-sky-800 active:scale-[0.98] transition-all"
                    type="submit">
                    {status === 'submitting' ? 'SENDING...' : 'SEND REQUEST'}
                </button>
            </form>
        </section>
        {/* Trust Indicator Bento */}
        <section className="grid grid-cols-1 gap-4">
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
                <span className="material-symbols-outlined text-brand-blue" data-icon="security">security</span>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Insured</p>
                    <p className="text-sm font-bold font-manrope">$2M Liability Coverage</p>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
