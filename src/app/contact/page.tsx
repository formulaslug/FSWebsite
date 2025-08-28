"use client";

/*
  Need all that fancy social media trash that those kids like
*/

import React from "react";
import Navbar from "@/components/Navbar";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { ContactForm } from "./ContactForm";

// export const metadata: Metadata = {
//   title: "Formula Slug - Contact",
//   description: "Formula Slug's Website - Contact Us",
// };

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <ShimmerTitle className="text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-0">
            Contact Us
          </ShimmerTitle>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="mb-6" style={{ color: colors.gray[300] }}>
                  Ready to join Formula Slug or have questions about our team? We'd love to hear from you!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                  </div>
                  <span>formulaslug@ucsc.edu</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                  </div>
                  <span>UC Santa Cruz, Santa Cruz, CA</span>
                </div>

                
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                  </div>
                  <span>1156 high street, baskin rm 40, Santa Cruz, CA 95064</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <a
                  href="https://www.instagram.com/formula_slug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ 
                    backgroundColor: colors.background.secondary,
                    border: `2px solid ${colors.gray[700]}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.slugYellow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.gray[700];
                  }}
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white group-hover:text-pink-500 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold group-hover:text-pink-500 transition-colors duration-300">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/company/formula-slug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ 
                    backgroundColor: colors.background.secondary,
                    border: `2px solid ${colors.gray[700]}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.electricBlue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.gray[700];
                  }}
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white group-hover:text-blue-500 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
