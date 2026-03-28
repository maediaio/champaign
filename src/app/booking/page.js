"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", issue: "", date: "", time: "Morning (8AM - 12PM)" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", address: "", issue: "", date: "", time: "Morning (8AM - 12PM)" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <main className="pt-36 pb-12 px-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
            <h1 className="font-manrope font-extrabold text-4xl tracking-tight text-slate-900 mb-4">Precision Engineering
                for Every Pipe.</h1>
            <p className="text-slate-600 text-lg leading-relaxed font-manrope">Schedule a master technician for repairs,
                inspections, or a comprehensive system estimate.</p>
        </section>
        {/* Booking Form Container */}
        
        {status === "success" && (
            <div className="bg-emerald-50 text-emerald-700 p-6 rounded-md border border-emerald-200 font-bold mb-6 text-lg">
                Booking requested successfully! Our team will confirm your slot shortly.
            </div>
        )}
        {status === "error" && (
            <div className="bg-red-50 text-red-700 p-6 rounded-md border border-red-200 font-bold mb-6 text-lg">
                Failed to request booking. Please try again or call us.
            </div>
        )}
        <form className="space-y-8" onSubmit={handleSubmit}>

            {/* Form Step 1: Contact Details */}
            <div className="bg-white p-8 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-dark font-bold text-lg font-manrope">
                        1</div>
                    <h2 className="font-manrope font-bold text-xl text-slate-900">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <label
                            className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Full
                            Name</label>
                        <input
                            className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 placeholder:text-slate-400 transition-all rounded-t-md"
                            placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Phone
                                Number</label>
                            <input
                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 placeholder:text-slate-400 rounded-t-md"
                                placeholder="(555) 000-0000" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Email
                                Address</label>
                            <input
                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 placeholder:text-slate-400 rounded-t-md"
                                placeholder="contact@champaignplumbingsc.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Service
                            Address</label>
                        <input
                            className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 placeholder:text-slate-400 rounded-t-md"
                            placeholder="123 Blueprint Ave, Engineering City" type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                </div>
            </div>
            {/* Form Step 2: Service Details */}
            <div className="bg-white p-8 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-dark font-bold text-lg font-manrope">
                        2</div>
                    <h2 className="font-manrope font-bold text-xl text-slate-900">Issue &amp; Schedule</h2>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label
                            className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Describe
                            the Issue</label>
                        <textarea
                            className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 placeholder:text-slate-400 resize-none rounded-t-md"
                            placeholder="Detailed description of plumbing needs..." rows="4" name="issue" value={formData.issue} onChange={handleChange} required></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Preferred
                                Date</label>
                            <input
                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 rounded-t-md"
                                type="date" name="date" min={new Date().toISOString().split('T')[0]} value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-manrope">Preferred
                                Time</label>
                            <select name="time" value={formData.time} onChange={handleChange} 
                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-brand-blue p-4 text-slate-900 rounded-t-md">
                                <option>Morning (8AM - 12PM)</option>
                                <option>Afternoon (12PM - 4PM)</option>
                                <option>Evening (4PM - 7PM)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Action Area */}
            <div className="flex flex-col gap-4">
                <button
                    className="w-full bg-brand-blue text-white py-4 rounded-md font-manrope font-extrabold text-lg shadow-lg shadow-sky-200/50 hover:bg-blue-500 transition-colors active:scale-[0.98] duration-150 uppercase tracking-widest">
                    {status === 'submitting' ? 'SCHEDULING...' : 'SCHEDULE APPOINTMENT'}
                </button>
                <Link href="/contact" className="w-full bg-slate-100 text-slate-700 py-4 rounded-md font-manrope font-extrabold text-lg hover:bg-slate-200 transition-colors active:scale-[0.98] duration-150 uppercase tracking-widest text-center">
                    Request Free Estimate
                </Link>
            </div>
            {/* Trust Badge Card */}
            <div className="bg-blue-50 p-6 rounded-md border border-sky-100 flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-dark scale-125 pt-1"
                    data-icon="verified_user">verified_user</span>
                <div>
                    <h4 className="font-manrope font-bold text-slate-900">Fully Insured</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed font-manrope">Our master plumbers adhere to the highest engineering standards. </p>
                </div>
            </div>
        </form>
    </main>
    </>
  );
}
