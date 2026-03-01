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
        className="relative z-10 w-full flex flex-col items-center pb-0 px-4 md:px-8"
        style={{
          backgroundColor: '#f5f5f4', 
          paddingTop: '80px' 
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
        
        {/* VIMEO EMBED */}
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
      <section 
        className="w-full flex flex-col items-center pt-40 px-4 bg-white"
        style={{ color: 'black' }}
      >
        <h2 
          className="tracking-wide text-center"
          style={{ 
            fontFamily: '"Jersey 20", sans-serif',
            color: 'black',
            fontSize: 'clamp(40px, 8vw, 50px)', 
            lineHeight: '0.8',
            marginTop: '80px', 
            marginBottom: '40px'
          }}
        >
          THE TEAM
        </h2>
        
        <div className="flex flex-col md:flex-row max-w-[90rem] w-full items-start">
          
          {/* --- Xuan Tang (Left Column) --- */}
          <div className="flex-1 flex flex-col md:pr-32 md:border-r-[6px] border-emerald-500 pb-32 md:pb-0 mb-32 md:mb-0">
            <h3 
              className="tracking-wide mb-10" 
              style={{ 
                fontFamily: '"Jersey 20", sans-serif',
                fontSize: '40px',
                lineHeight: '1'
              }}
            >
              Xuan Tang
            </h3>
            <p 
              className="font-medium mb-14 opacity-70 uppercase tracking-widest"
              style={{ 
                fontFamily: '"Jersey 20", sans-serif', 
                fontSize: '30px', 
                lineHeight: '1.1' 
              }}
            >
              Role: Posters, Website & Prototype Design
            </p>
            <p 
              className="tracking-wide opacity-90"
              style={{ 
                fontFamily: '"Jersey 20", sans-serif', 
                fontSize: '30px', 
                lineHeight: '1.4' 
              }}
            >
              Xuan Tang is an undergraduate student majoring in Cognitive Science and Comparative Literature at the University of California, Berkeley. She uses a multimedia approach to explore the intersection of the humanities and digitality in our era.
            </p>
          </div>

          {/* --- Zhanruo Li (Right Column) --- */}
          <div className="flex-1 flex flex-col md:pl-32 pt-32 md:pt-0 border-t-[6px] md:border-t-0 border-emerald-500">
            <h3 
              className="tracking-wide mb-10" 
              style={{ 
                fontFamily: '"Jersey 20", sans-serif',
                fontSize: '40px',
                lineHeight: '1'
              }}
            >
              Zhanruo Li
            </h3>
            <p 
              className="font-medium mb-14 opacity-70 uppercase tracking-widest"
              style={{ 
                fontFamily: '"Jersey 20", sans-serif', 
                fontSize: '30px', 
                lineHeight: '1.1' 
              }}
            >
              Role: Prototype Design, Model Fine-Tuning
            </p>
            <p 
              className="tracking-wide opacity-90"
              style={{ 
                fontFamily: '"Jersey 20", sans-serif', 
                fontSize: '30px', 
                lineHeight: '1.4' 
              }}
            >
              Zhanruo Li is an undergraduate student at Johns Hopkins University studying Philosophy, Classics, and Writing Seminars, with experience in UI/UX design in a corporate setting. She writes experimental poetry and is currently conducting independent research on classical philosophy, aesthetics, and artificial intelligence. 
            </p>
          </div>

        </div>

        {/* --- Footer Note with MASSIVE bottom space --- */}
        <div 
          className="text-center font-medium opacity-80 uppercase tracking-widest"
          style={{ 
            fontFamily: '"Jersey 20", sans-serif',
            fontSize: '30px',
            marginTop: '50px',
            marginBottom: '50px'  /* <--- Massive empty space added here */
          }}
        >
          <p>Prototype developed on Google AI Studio</p>
        </div>
      </section>

    </div>
  );
}
