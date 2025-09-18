"use client";

/*
  Need finance/outreach in team section
  Also need to make them vertical on mobile (with un-blur on scroll section)
  Why does the front page look like shit?
    Two different buttons look yucky          <div className="flex-1 h-64 md:h-full flex flex-col items-center justify-center relative group"
          style={{ backgroundImage: 'url(/photos/Telvis.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

*/

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";
import ShimmerTitle from "@/components/ShimmerTitle";

export default function Home() {
  const title = "FORMULA SLUG";
  const subtitle = "NEVER HAS THERE BEEN A FASTER SLUG";

  const [subtitleActive, setSubtitleActive] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle team section navigation
  const handleTeamNavigation = (section: string) => {
    // Navigate to team page first
    window.location.href = `/team?scrollTo=${section}`;
  };

  // Configurable delays
  const fallInDelay = 0.02; 
  const fallInDuration = (title.length - 1) * fallInDelay * 1000 + 1000;

  useEffect(() => {
    setTitleVisible(true);
    // Trigger subtitle animation after half the main title's fall-in duration
    const subtitleTimeout = setTimeout(() => setSubtitleActive(true), fallInDuration / 2);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Add scroll listener for mobile hover effect
    const handleScroll = () => {
      if (!isMobile) return;
      
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate the middle 20% of the screen (40% to 60% from top)
      const viewportStart = scrollY + windowHeight * 0.4;
      const viewportEnd = scrollY + windowHeight * 0.6;
      
      // Get team sections
      const mechanicalEl = document.getElementById('mechanical-section');
      const electricalEl = document.getElementById('electrical-section');
      const softwareEl = document.getElementById('software-section');
      
      let newActiveSection = null;
      
      // Check which section is in the middle 20%
      [
        { el: mechanicalEl, name: 'mechanical' },
        { el: electricalEl, name: 'electrical' },
        { el: softwareEl, name: 'software' }
      ].forEach(({ el, name }) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if the element intersects with the middle 20% zone
          if (elementTop < viewportEnd && elementBottom > viewportStart) {
            newActiveSection = name;
          }
        }
      });
      
      setActiveSection(newActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      clearTimeout(subtitleTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);
  
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:p-12 lg:p-24 overflow-hidden"
      style={{
        '--shadow-color2': colors.shadowColor2,
        '--shadow-color': colors.shadowColor1,
        '--text-color': colors.textColor,
        '--gradient-from': colors.gradientFrom,
        '--gradient-via': colors.gradientVia,
        '--gradient-to': colors.gradientTo,
        padding: '0px',
      } as React.CSSProperties}
    >
      <div style={{ height: '100vh', width: '100%' }} className="relative flex flex-col items-center justify-between">
        <div className="absolute inset-0 -z-10 w-full h-full">
          {/* Video not working on firefox, can't track down */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: -2 }}
          >
            <source src="/videos/FSDynamicWallpaper.mp4" type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `linear-gradient(to bottom right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`,
              opacity: 0.7,
              zIndex: -1
            }}
          />
        </div>
        <Navbar />
        <ShimmerTitle delayMs={fallInDuration*0.9}>
        <h1
          className="w-full text-4xl sm:text-5xl md:text-6xl mt-16 md:mt-32 lg:text-9xl font-bold drop-shadow-lg flex flex-wrap justify-center mb-2 max-w-full break-words px-4 md:px-0"
          style={{
            color: 'var(--text-color)',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.1s linear',
          }}
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              className={char === ' ' ? 'inline-block w-4 sm:w-8' : ''}
              style={{
                display: char === ' ' ? 'inline-block' : 'inline',
                animation: `fall-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both ${index * fallInDelay}s`,
                animationFillMode: 'both',
                minWidth: char === ' ' ? '0.25em' : undefined,
                letterSpacing: '0.03em'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        </ShimmerTitle>
        <h1
          className="mt-1 text-xl md:text-2xl font-semibold text-center tracking-widest px-4 md:px-0"
          style={{
            color: 'var(--text-color)',
            opacity: subtitleActive ? 0.85 : 0,
            transition: 'opacity 0.2s linear'
          }}
        >
          {subtitle.split('').map((char, index) => (
            <span
              key={index}
              className={char === ' ' ? 'inline-block' : ''}
              style={{
                display: char === ' ' ? 'inline-block' : 'inline',
                minWidth: char === ' ' ? '0.5em' : undefined
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        {/* video section */}
        <div className="flex flex-col md:flex-row w-full md:w-5/6 lg:w-1/2 mt-12 md:mt-20 items-center justify-center md:justify-between gap-6 md:gap-12 px-4 md:px-0">
          <div className="flex-1 flex flex-col md:flex-row items-center">
            <p className="text-base md:text-xl w-full md:w-2/4 text-center md:text-left mb-4 md:mb-0" style={{ 
              color: 'var(--text-color)', 
              lineHeight: '1.6'
              }}>
          Formula Slug is the student-run FSAE electric team at UC Santa Cruz. By building complex, high-performance race cars, we push our boundaries in innovation and competition while fostering the learning of applied skills and teamwork.
            </p>
            <button
              className="md:ml-6 px-8 md:px-6 py-3 md:py-2 rounded-full text-white font-semibold shadow transition-colors duration-200"
              style={{ 
              backgroundColor: colors.electricBlue,
              border: `2px solid ${colors.slugYellow}`,
              }}
              onClick={() => {
              const aboutSection = document.querySelector('section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
              }}
              onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = colors.slugYellow;
              e.currentTarget.style.color = colors.electricBlue;
              e.currentTarget.style.border = `2px solid ${colors.electricBlue}`;
              }}
              onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = colors.electricBlue;
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.border = `2px solid ${colors.slugYellow}`;
              }}
            >
              Read More
            </button>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8 md:mt-10 mb-20 md:mb-40 items-center justify-center gap-8 md:gap-12 px-4 md:px-0">
          <div className="flex-1 order-2 md:order-1 flex flex-col items-center justify-center">
              <button
          className="hidden md:flex px-0 py-0 border-4 border-white bg-transparent text-white text-3xl font-bold shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400"
          style={{
          width: '15',
          height: '12vh',
          padding: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0',

          }}
          onClick={() => window.open('https://fsae.slack.com/join/signup#/domain-signup', '_blank')}
              >
          Join Our Slack
              </button>
          </div>
          <div className="flex-1 order-1 md:order-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
              Join the Team
            </h3>
            <button
              className="md:hidden mb-6 px-6 py-3 border-2 border-white bg-transparent text-white text-lg font-bold shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400 rounded"
              onClick={() => window.open('https://fsae.slack.com/join/signup#/domain-signup', '_blank')}
            >
              Join Our Slack
            </button>
              <p className="text-base md:text-lg mb-4" style={{ color: 'var(--text-color)', opacity: 0.85, lineHeight: '1.6' }}>
              Ready to build, compete, and innovate? Whether you’re an engineer, designer, or just a passionate creator, Formula Slug welcomes all UCSC students. Click the button to join our Slack and get started!
              </p>

          </div>
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <div className="flex flex-col md:flex-row w-full h-full z-0">

              {/* Bug: 
          I cannot for the life of me fix the electrical fade in to not stutter on the first use
          I swapped from the color.ts variable to static color
          I swapped from css styling to tailwind
          the last fix I think might be to compress the image
          I swapped images and the html renders differently? What is going on
          compressing 90% did not change the transition time
          
          it fixed itself :(
          
          Need to return and add links to take mech and electrical to team page
          -- use anchors
          */}
          <div 
          id="mechanical-section"
          className="flex-1 h-1/3 md:h-full flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden" 
          onClick={() => handleTeamNavigation('mechanical')}
          >
          <div
            className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: 'url(/photos/upright.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div
              className={`absolute inset-0 transition-opacity duration-300 bg-[#111827] ${
                isMobile 
                  ? (activeSection === 'mechanical' ? 'opacity-0' : 'opacity-60')
                  : 'opacity-60 group-hover:opacity-0'
              }`}
            />
            <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Mechanical</h3>
          </div>
          <div 
          id="electrical-section"
          className="flex-1 h-1/3 md:h-full flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden"
          onClick={() => handleTeamNavigation('electrical')}
          >
          <div
            className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: 'url(/photos/HV.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
            <div
              className={`absolute inset-0 transition-opacity duration-300 bg-[#111827] ${
                isMobile 
                  ? (activeSection === 'electrical' ? 'opacity-0' : 'opacity-60')
                  : 'opacity-60 group-hover:opacity-0'
              }`}
            />
            <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Electrical</h3>
          </div><div 
          id="software-section"
          className="flex-1 h-1/3 md:h-full flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden"
          onClick={() => handleTeamNavigation('software')}
          >
          <div
            className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: 'url(/photos/Telvis.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
            <div
              className={`absolute inset-0 transition-opacity duration-300 bg-[#111827] ${
                isMobile 
                  ? (activeSection === 'software' ? 'opacity-0' : 'opacity-60')
                  : 'opacity-60 group-hover:opacity-0'
              }`}
            />
            <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Software</h3>
          </div>
        </div>
      </div>

{ /* History section, this might be better in descending order of years */}

      <section className="w-full  mx-0 mt-0 mb-16 px-4 py-10 bg-[#181c2a] bg-opacity-90  shadow-lg flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">About Us</h2>
        <p className="text-lg text-gray-100 mb-4 text-center max-w-6xl">
          Formula Slug is UC Santa Cruz's premier student-run electric vehicle team, competing in the international Formula SAE Electric competition. Our multidisciplinary team of engineers, designers, and innovators is dedicated to building high-performance electric race cars from the ground up. We foster hands-on learning, technical excellence, and a collaborative spirit, empowering students to push the boundaries of automotive technology and sustainable transportation.
        </p>
        <p className="text-base text-gray-300 text-center max-w-4xl">
          Whether you're passionate about mechanical design, electrical systems, software, business, or just want to be part of an ambitious and supportive community, Formula Slug welcomes all Banana Slugs ready to make an impact. Join us as we race toward the future!
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mt-8 mb-4">Our History</h2>
        <div className="w-full max-w-6xl mx-auto px-4 space-y-12">
          {/* FS-3 Section */}
          <section aria-label="FS-3" id="fs-3" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                <h3 style={{color: 'rgb(74, 177, 228)'}} className="text-2xl md:text-3xl font-bold mb-2">FS-3</h3>
                <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
                  This past year in June 2025, we brought FS-3 to FSAE Michigan. It blew through mechanical, HV, EV active, rain, tilt, and brake inspections, while successfully competing in all dynamic events. We managed to achieve our lofty goal of a top 20 placement in just our third ever year of officially competing, with a top 3 finish in efficiency.
                </p>
              </div>
              <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden mx-auto">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/xwFrdFvr7uU" 
                  title="Formula Slug 2025 FSAE EV Michigan Competition" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          {/* FS-2 Section */}
          <section aria-label="FS-2" id="fs-2" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="w-full">
                <img src="/photos/FS2AtComp.jpg" alt="FS-2 Team at Competition" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 style={{color: 'rgb(74, 177, 228)'}} className="text-2xl md:text-3xl font-bold mb-2">FS-2</h3>
                <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
                  FS-2 was our first car to make it to the FSAE Michigan competition. We improved upon the performance of FS-1 by passing mechanical technical inspection and placing 56th overall. This was a huge step forward for Formula Slug, and propelled us to our next stage with FS-3.
                </p>
              </div>
            </div>
          </section>

          {/* FS-1 Section */}
          <section aria-label="FS-1" id="fs-1" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4 md:order-1">
                <h3 style={{color: 'rgb(74, 177, 228)'}} className="text-2xl md:text-3xl font-bold mb-2">FS-1</h3>
                <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
                  Building on the progress and experienced gained from FS-0, FS-1 was the first vehicle Formula Slug entered in the Formula SAE Electric Vehicle competition in Lincoln, Nebraska. Although FS-1 did not pass technical inspection, it earned our first points at competition through the static events. This experience provided invaluable lessons that informed the design and engineering of our subsequent vehicles, while showing us we could score points at competition.
                </p>
              </div>
              <div className="w-full md:order-2">
                <img src="/photos/FS1.jpg" alt="FS-1 Formula Slug Vehicle" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
              </div>
            </div>
          </section>

          {/* FS-0 Section */}
          <section aria-label="FS-0" id="fs-0" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/W2YDWzCsP7c?si=YlAYGXaJvxtaGviR"
                  title="We Are Formula Slug Documentary"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-4">
                <h3 style={{color: 'rgb(74, 177, 228)'}} className="text-2xl md:text-3xl font-bold mb-2">FS-0</h3>
                <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
                  Founded in 2014, Formula Slug was founded on the premise of renewable energy in electric vehicles. This led to our first vehicle, FS-0. We raised over $16,000 and put in countless hours of work. While it didn't go to competition, it served as the springboard for Formula Slug's ventures into electric vehicle engineering and catalyzed the team's growth and guiding principles.
                </p>
              </div>
            </div>
          </section>
        </div>
              <p className="text-xs mt-2" style={{ color: 'var(--text-color)', opacity: 0.65, lineHeight: '1.4' }}>
              This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters.
              </p>
      </section>
      
      
      { /* Animation shit that I spent too much of my time on */}
      <style jsx>{`
        @keyframes fall-in {
          0% {
            transform: translateX(110vw) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(5px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes shadow-pop {
          0% {
            text-shadow: none;
          }
          60% {
            text-shadow:
              1px -1px 0px var(--shadow-color),
              1.5px -1.5px 0px var(--shadow-color),
              2px -2px 0px var(--shadow-color),
              2.5px -2.5px 0px var(--shadow-color),
              3px -3px 0px var(--shadow-color),
              3.5px -3.5px 0px var(--shadow-color),
              4px -4px 0px var(--shadow-color2),
              4.5px -4.5px 0px var(--shadow-color2),
              5px -5px 0px var(--shadow-color2),
              5.5px -5.5px 0px var(--shadow-color2),
              6px -6px 0px rgb(0,0,0);
          }
          100% {
            text-shadow: none;
          }
        }
        .animate-fall-in {
          animation: fall-in .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .shadow-pop-now {
          animation: shadow-pop 1.0s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards !important;
        }
        .subtitle-fade-in {
          animation: none;
        }
            `}</style>
      <Footer />
    </main>
  );
}
