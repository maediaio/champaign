import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 w-full border-t border-slate-800 relative z-10 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-20 max-w-7xl mx-auto">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="material-symbols-outlined text-primary text-3xl">plumbing</span>
              <span className="font-headline font-extrabold text-2xl tracking-tight text-white">
                Champaign<span className="text-primary">Plumbing</span>
              </span>
            </Link>
            <p className="font-manrope text-sm leading-relaxed text-slate-400">
              Precision plumbing engineering since 1971. Industrial-grade solutions for residential and commercial infrastructure.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-manrope text-xs uppercase tracking-[0.2em] text-white font-extrabold">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> Residential
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> Commercial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> Emergency
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-manrope text-xs uppercase tracking-[0.2em] text-white font-extrabold">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">chevron_right</span> Book Online
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-manrope text-xs uppercase tracking-[0.2em] text-white font-extrabold">Contact</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <p>Charleston, SC</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                <Link href="/contact" className="hover:text-primary transition-colors text-white font-bold">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-8 border-t border-slate-800 text-center bg-slate-950">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            © {new Date().getFullYear()} Champaign Plumbing. All rights reserved.
          </p>
        </div>
      </footer>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 flex justify-around items-center py-4 px-6 border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue group">
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>home</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue group">
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>handyman</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">Services</span>
        </Link>
        <Link href="/booking" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue group">
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>calendar_month</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">Book</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue group">
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>contact_support</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">Contact</span>
        </Link>
      </nav>
    </>
  );
}
