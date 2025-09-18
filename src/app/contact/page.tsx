/*
  Need all that fancy social media trash that those kids like
*/

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { ContactForm } from "./ContactForm";
import { SocialMediaLinks } from "./SocialMediaLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula Slug - Contact",
  description: "Formula Slug's Website - Contact Us",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-8">
            <ShimmerTitle>Contact Us</ShimmerTitle>
          </h1>
          
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

              <SocialMediaLinks />
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
