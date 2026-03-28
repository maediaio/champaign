import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* We let the global layout handle Header and Footer */}
      <main className="pb-0 -mt-[140px] md:-mt-[120px]">
        {/* Full-Bleed Hero Section (Tucked cleanly under Header) */}
        <section className="relative w-full h-[100vh] min-h-[850px] flex flex-col justify-between pt-[150px] md:pt-[130px] pb-32 px-6 overflow-hidden">
            {/* Background Image - Absolute to Section */}
            <div className="absolute inset-0 z-0">
                <img alt="Champaign Plumbing Company Work Van on Jobsite" className="w-full h-full object-cover object-center" src="/images/workvan_jobsite.png" />
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent backdrop-blur-[1px]"></div>
            </div>

            {/* Top Text - Simplified per user feedback */}
            <div className="relative z-10 text-center space-y-5 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
                <h1 className="inline-block px-4 py-1.5 bg-brand-blue/95 backdrop-blur-sm text-white rounded-full text-[11px] font-bold tracking-widest uppercase font-manrope shadow-lg shadow-brand-blue/20">Plumbing Charleston Since 1971</h1>
            </div>

            {/* Empty Spacer to push buttons down and keep center clear */}
            <div className="flex-1 pointer-events-none"></div>

            {/* Bottom Actions Area */}
            <div className="relative z-10 w-full max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mx-auto">
                    <Link href="/booking" className="bg-brand-blue hover:bg-brand-dark flex-1 text-white py-4 px-8 rounded-xl font-headline font-bold shadow-2xl active:scale-[0.98] transition-all text-center flex items-center justify-center border border-sky-400/20">
                        Schedule Service
                    </Link>
                    <a href="tel:8434600163" className="bg-white/95 backdrop-blur hover:bg-white flex-1 text-brand-dark border border-white py-4 px-8 rounded-xl font-headline font-bold active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 shadow-2xl">
                        <span className="material-symbols-outlined text-brand-blue" data-icon="emergency_home">emergency_home</span>
                        24/7 Emergency Repair
                    </a>
                </div>
            </div>
        </section>

        {/* Services Grid (pulled up slightly to overlap bottom gradient) */}
        <section className="py-20 px-6 space-y-12 bg-slate-50 relative z-20 rounded-t-[2.5rem] -mt-10 border-t border-slate-200/50 shadow-[0_-20px_50px_rgba(0,0,0,0.03)] opacity-0 animate-fade-in-up delay-100">
            <div className="space-y-2 max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold font-headline tracking-tight text-slate-900">Our Specializations</h2>
                <div className="h-1.5 w-16 bg-brand-blue rounded-full"></div>
            </div>
            <div className="grid gap-6 max-w-7xl mx-auto md:grid-cols-2">
                {/* Large Card */}
                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 space-y-6 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <span className="material-symbols-outlined text-[140px]" data-icon="plumbing">plumbing</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-primary text-white flex items-center justify-center rounded-2xl shadow-lg shadow-brand-blue/20">
                        <span className="material-symbols-outlined text-3xl" data-icon="leak_add">leak_add</span>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-headline text-slate-900">Leak Detection &amp; Repair</h3>
                        <p className="text-slate-500 text-base leading-relaxed">Advanced acoustic and thermal imaging technology to pinpoint hidden leaks before they cause structural damage.</p>
                    </div>
                    <a className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all" href="/services">
                        View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </a>
                </div>
                
                <div className="grid gap-6">
                    <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300">
                        <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                            <span className="material-symbols-outlined text-brand-blue text-2xl group-hover:scale-110 transition-transform">water_heater</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold font-headline text-slate-900">Water Heater Systems</h3>
                            <p className="text-sm text-slate-500 leading-snug">Tankless upgrades and precision thermal maintenance.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300">
                        <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                            <span className="material-symbols-outlined text-brand-blue text-2xl group-hover:scale-110 transition-transform">restaurant</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold font-headline text-slate-900">Kitchen &amp; Bath Re-fitting</h3>
                            <p className="text-sm text-slate-500 leading-snug">Designer-grade fixture installation and luxury upgrades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-brand-dark py-24 px-6 overflow-hidden relative opacity-0 animate-fade-in-up delay-200">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h20v20H0V0zm10 10l10-10v20L10 10z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-30 -mr-48 -mt-48 pointer-events-none"></div>
            <div className="relative z-10 max-w-lg mx-auto space-y-10">
                <div className="space-y-2 text-white">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Engineer Verified</span>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tight">Client Trust Matrix</h2>
                </div>
                <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl space-y-6 border border-white/20 shadow-2xl hover:bg-white-[0.15] transition-colors">
                    <div className="flex gap-1 text-yellow-400">
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="text-white italic font-medium leading-relaxed text-xl">"Ive been using champaign plumbing for years. Punctual, fast, and always do great work!"</p>
                    <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                        <div>
                            <p className="text-base font-bold text-white font-headline">Mark C.</p>
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">HOMEOWNER, Mount Pleasant</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Technician Status */}
        <div className="px-6 -mt-10 mb-20 max-w-md mx-auto relative z-20">
            <div className="bg-white p-5 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex items-center justify-between border border-slate-100 group">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden ring-4 ring-slate-50">
                            <img alt="Marion - Owner" className="w-full h-full object-cover" src="/images/profile_photo.png" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse"></div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold font-headline text-slate-900 group-hover:text-brand-blue transition-colors">Dispatch: Marion (Owner)</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-emerald-50 text-[9px] font-bold px-2 py-0.5 rounded text-emerald-600 border border-emerald-100">ON DUTY</span>
                            <span className="text-[10px] text-slate-500 font-medium">Available Now</span>
                        </div>
                    </div>
                </div>
                <a href="tel:8434600163" className="bg-gradient-to-br from-brand-blue to-primary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-blue/30 hover:scale-105 active:scale-95 transition-all">
                    <span className="material-symbols-outlined" data-icon="call">call</span>
                </a>
            </div>
        </div>
    </main>
    </>
  );
}
