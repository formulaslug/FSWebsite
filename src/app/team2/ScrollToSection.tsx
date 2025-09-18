"use client";

import { useEffect } from "react";

export default function ScrollToSection() {
  // Handle scroll-to functionality from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get('scrollTo');
    
    if (scrollToSection) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        setTimeout(() => {
          const targetElement = document.getElementById(scrollToSection);
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', // Smooth scroll
              block: 'start' 
            });
          }
        }, 300); // ms wait time at top
      }, 10); 
      
      // Clean up URL params
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [])

  return <></>;
}
