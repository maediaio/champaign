"use client";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('residential');

  return (
    <>
      <main className="pt-4 md:pt-8 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-8">
            <div className="relative overflow-hidden rounded-3xl h-48 md:h-56 flex items-center p-10 hero-gradient">
                <div className="relative z-10 max-w-xl">
                    <h1 className="text-5xl font-headline font-extrabold tracking-tight text-white leading-tight">
                        Services List</h1>
                </div>
                <div className="absolute right-[-10%] top-[-20%] w-2/3 h-[140%] opacity-15 pointer-events-none rotate-12">
                    <img alt="Professional plumbing engineering" className="w-full h-full object-cover"
                        src="/images/jobsite_work/shower_install.jpeg" />
                </div>
            </div>
        </section>

        {/* Toggle Slide Button */}
        <div className="flex justify-center mb-16 px-6">
            <div className="bg-slate-100 p-1 rounded-full inline-flex relative border border-slate-200 shadow-inner w-full max-w-xs">
                {/* Visual Slider Background */}
                <div 
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${activeTab === 'commercial' ? 'translate-x-full' : 'translate-x-0'}`}
                />
                
                <button 
                    onClick={() => setActiveTab('residential')}
                    className={`relative z-10 w-1/2 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors ${activeTab === 'residential' ? 'text-brand-blue' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Residential
                </button>
                <button 
                    onClick={() => setActiveTab('commercial')}
                    className={`relative z-10 w-1/2 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors ${activeTab === 'commercial' ? 'text-brand-blue' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Commercial
                </button>
            </div>
        </div>

        {/* Dynamic Services Menu Format */}
        {activeTab === 'residential' ? <ResidentialMenu /> : <CommercialMenu />}

      </main>
    </>
  );
}

function ResidentialMenu() {
    return (
        <section className="px-6 space-y-16 max-w-4xl mx-auto mb-20 animate-fade-in-up">
            {/* Category: Diagnostic & Repair */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">Diagnostic &amp; Repair</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Precision Leak Repair</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Utilizing non-invasive acoustic detection technology to locate and repair concealed pipe failures inside your home with surgical precision.</p>
                    </Link>

                </div>
            </div>

            {/* Category: Installations & Upgrades */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">System Installations</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Targeted Repiping</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Strategic reworking of home pipe systems to maximize water efficiency, facilitate modern fixture upgrades, and replace aging infrastructure.</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Thermal Systems</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Specialized tankless upgrades and precision maintenance for high-efficiency residential water heating systems.</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Fixture Installation</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Professional mounting and connection of high-end sinks, modern toilets, premium faucets, and bespoke bathroom hardware.</p>
                    </Link>
                </div>
            </div>

            {/* Category: Maintenance */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">Ongoing Maintenance</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Preventative Care</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Systematic audits for residential plumbing systems to prevent catastrophic failure before it occurs.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CommercialMenu() {
    return (
        <section className="px-6 space-y-16 max-w-4xl mx-auto mb-20 animate-fade-in-up">
            {/* Category: Diagnostic & Repair */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">Facility Repair</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Commercial Leak Detection</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Industrial-grade acoustic detection technology to locate and repair concealed pipe failures under concrete grids with surgical precision.</p>
                    </Link>

                </div>
            </div>

            {/* Category: Installations & Upgrades */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">System Installations</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Architectural Repiping</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Complete hydraulic system engineering for new facility builds and localized commercial repiping configurations.</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Commercial Thermal Systems</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Specialized high-capacity boiler upgrades and precision maintenance for multi-tenant or restaurant water heating systems.</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Commercial Fixtures</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Installation of touchless faucets, high-efficiency flush valves, and ADA-compliant restroom hardware for public use.</p>
                    </Link>
                </div>
            </div>

            {/* Category: Maintenance */}
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-bold border-b-2 border-slate-100 pb-3 text-slate-900 tracking-tight">Facility Maintenance</h2>
                
                <div className="space-y-2">
                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Preventative Care</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Systematic audits for complex industrial systems and facilities to prevent catastrophic operational disruption.</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col sm:flex-row gap-1 sm:gap-6 sm:items-baseline group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-2xl transition-colors">
                        <h3 className="text-lg font-headline font-bold text-slate-900 group-hover:text-brand-blue min-w-[220px] transition-colors">Recurring Service</h3>
                        <p className="text-slate-600 leading-relaxed text-[15px] pt-1 sm:pt-0">Scheduled, repetitive maintenance plans for commercial tankless water heaters and high-volume plumbing systems that require frequent servicing.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
