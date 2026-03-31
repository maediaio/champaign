"use client";
import { useState, useEffect } from 'react';

const slides = [
  {
    image: "/champaign/images/bathrooms/IMG_5577.jpeg",
    tag: "Bath & Kitchen",
    title: "Luxury Bathtub Installation",
    desc: "Designer freestanding soaking tub with custom plumbing for a premium coastal home renovation."
  },
  {
    image: "/champaign/images/bathrooms/IMG_5570.jpeg",
    tag: "Trim Out",
    title: "Walk-In Shower Plumbing Trim",
    desc: "Complete plumbing trim out including shower valve, drain assembly, and fixture connections for a custom walk-in shower."
  },
  {
    image: "/champaign/images/jobsite_work/tankles_waterheater.jpeg",
    tag: "Water Systems",
    title: "Tankless Water Heater Install",
    desc: "Energy-efficient Camplux tankless unit with full gas line and water connection setup."
  },
  {
    image: "/champaign/images/bathrooms/IMG_5575.jpeg",
    tag: "Trim Out",
    title: "Shower Valve & Fixture Set",
    desc: "Final plumbing trim with supply line connections, shower valve installation, and fixture mounting."
  },
  {
    image: "/champaign/images/jobsite_work/shower_install.jpeg",
    tag: "New Construction",
    title: "Shower Rough-In & Base Set",
    desc: "PEX supply line routing, drain positioning, and shower base installation for new build."
  }
];

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 5000;
  
  useEffect(() => {
    if (isHovered) {
      setProgress(0); // Optional: reset or pause progress visually
      return;
    }
    
    // Smooth progress animation using requestAnimationFrame
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const pct = Math.min((elapsed / autoPlayInterval) * 100, 100);
      setProgress(pct);
      
      if (pct < 100) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    // Auto-advance
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      startTimestamp = null; // Reset animation
    }, autoPlayInterval);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentSlide, isHovered]);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);

  return (
    <section id="project-carousel" className="py-20 px-6 bg-white relative overflow-hidden animate-fade-in-up delay-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold tracking-widest uppercase font-manrope">Featured Projects</span>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-slate-900">Our Recent Work</h2>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full"></div>
        </div>

        <div className="relative group">
          <div 
            className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 bg-slate-900" 
            style={{ aspectRatio: "8/9" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {slides.map((slide, i) => (
              <div 
                key={i} 
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: currentSlide === i ? 1 : 0,
                  zIndex: currentSlide === i ? 10 : 1
                }}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold tracking-widest uppercase font-manrope mb-3 border border-white/20">
                    {slide.tag}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold font-headline tracking-tight">{slide.title}</h3>
                  <p className="text-white/80 text-sm md:text-base mt-2 max-w-lg font-medium">{slide.desc}</p>
                </div>
              </div>
            ))}

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
              <div 
                className="h-full bg-brand-blue transition-none" 
                style={{ width: `${isHovered ? 0 : progress}%` }} 
              />
            </div>
          </div>

          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/50 hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 outline-none" 
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-slate-800 text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>chevron_left</span>
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/50 hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 outline-none" 
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-slate-800 text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>chevron_right</span>
          </button>

          <div className="flex justify-center gap-2.5 mt-6 relative z-20">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => goToSlide(i)} 
                className={`w-2.5 h-2.5 rounded-full outline-none transition-all duration-300 ${currentSlide === i ? 'bg-brand-blue scale-125 shadow-md shadow-brand-blue/30' : 'bg-slate-300 hover:bg-slate-400'}`} 
                aria-label={`Go to slide ${i+1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
