import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-brand-dark text-white py-2 px-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold tracking-widest uppercase font-manrope">
          <div className="hidden sm:flex gap-6">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
              <span>Licensed &amp; Bonded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
              <span>$5M Insured</span>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-1.5 w-full sm:w-auto bg-white/10 px-2 py-0.5 rounded-full border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-[12px] h-[12px]">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.9c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <span className="text-amber-400 flex -mt-[1px]">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </span>
            <span className="ml-2">5.0 RATING</span>
          </div>
        </div>
      </div>
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative z-10 transition-all">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-brand-blue text-3xl group-hover:scale-110 transition-transform">plumbing</span>
            <span className="font-headline font-extrabold text-xl tracking-tight text-slate-900">
              Champaign<span className="text-brand-blue">Plumbing</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold font-manrope text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-wider">Home</Link>
            <Link href="/services" className="text-sm font-bold font-manrope text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-wider">Services</Link>
            <Link href="/booking" className="text-sm font-bold font-manrope text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-wider">Book Online</Link>
            <Link href="/contact" className="text-sm font-bold font-manrope text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-wider">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:8434600163" className="group flex items-center gap-2 bg-emergency-red hover:bg-red-800 text-white px-5 py-3 rounded-xl font-manrope font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-500/30 active:scale-95 animate-pulse-glow">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>phone_in_talk</span>
              <span className="hidden sm:inline">Emergency</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
