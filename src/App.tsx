import React from 'react';
import { ChevronDown } from 'lucide-react';

// --- ASSET IMPORTS ---
import heroImage from './assets/hero.png';
import contentImage from './assets/content.png';

export default function App() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-emerald-500/30">
      
      {/* --- SECTION 1: HERO --- */}
      <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-stone-900">
          <img 
            src={heroImage} 
            alt="Italo Calvino's Invisible Cities" 
            className="max-w-full max-h-full object-contain"
          />
          <a
            href="#content-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute z-20 cursor-pointer"
            style={{
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '55px',
              height: '75px',
            }}
            aria-label="Enter the project"
          ></a>
        </div>

        <div 
          className="absolute bottom-8 z-10 flex flex-col items-center gap-2 cursor-pointer transition-opacity hover:opacity-80" 
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-white/50" />
        </div>
      </header>

      {/* --- SECTION 2: PROJECT DETAILS --- */}
      <main 
        id="content-section" 
        /* Removed pt-16 to avoid conflict, we handle it in style below */
        className="relative z-10 w-full flex flex-col items-center pb-0 px-4 md:px-8"
        style={{
          backgroundColor: '#f5f5f4', 
          paddingTop: '80px' /* <--- This creates the large GREY space */
        }}
      >
        <div className="max-w-5xl w-full bg-white shadow-2xl rounded-sm overflow-hidden mb-0">
          <img 
            src={contentImage} 
            alt="Project Details" 
            className="w-full h-auto block"
          />
        </div>
      </main>

      {/* --- SECTION 3: VIDEO DEMO --- */}
      {/* --- SECTION 3: VIDEO DEMO --- */}
<section 
  className="w-full flex flex-col items-center pb-20 px-4"
  style={{backgroundColor: '#f5f5f4'}}
>
  <h2 
    className="tracking-wide text-center"
    style={{ 
      fontFamily: '"Jersey 20", sans-serif',
      color: 'black',
      fontSize: 'clamp(40px, 8vw, 50px)', 
      lineHeight: '0.8',
      marginTop: '80px', 
      marginBottom: '20px'
    }}
  >
    OUR PROTOTYPE
  </h2>
  
  {/* VIMEO EMBED - Zoomed to crop black borders */}
  <div className="w-full max-w-6xl shadow-2xl rounded-sm overflow-hidden border border-gray-300 bg-black">
    <div className="relative w-full" style={{paddingBottom: '53.4%', overflow: 'hidden'}}>
      <iframe 
        src="https://player.vimeo.com/video/1165093361?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
        className="absolute top-0 left-0"
        style={{
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        allowFullScreen
        title="demo"
      ></iframe>
    </div>
  </div>
</section>

      {/* --- SECTION 4: CREDITS --- */}
<section className="w-full flex flex-col items-center py-16 px-4 bg-white text-stone-900">
  <h2 
    className="tracking-wide text-center mb-8"
    style={{ 
      fontFamily: '"Jersey 20", sans-serif',
      fontSize: 'clamp(30px, 6vw, 40px)', 
    }}
  >
    THE TEAM
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center">
    <div>
      <h3 className="font-bold text-lg mb-2">Prototype Design</h3>
      <p className="text-stone-700">Xuan Tang, Zhanruo Li</p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Website Design</h3>
      <p className="text-stone-700">Xuan Tang</p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Posters Design</h3>
      <p className="text-stone-700">Xuan Tang</p>
    </div>
  </div>
</section>

    </div>
  );
}
