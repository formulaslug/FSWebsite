/*
  Need updated sponsor list
  bottom looks bad, not sure which approach to take

  Would it be cool to have photos of each sponsor's logo centerfront on the car?
    Maybe cheesy

  

 */

import React from "react";
import Navbar from "@/components/Navbar";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { Metadata } from "next";
import { SponsorCard } from "./SponsorCard";

export const metadata: Metadata = {
  title: "Formula Slug - Sponsors",
  description: "Formula Slug's Website - Our Sponsors",
};

export default function SponsorsPage() {
  const sponsors = {
    gold: [
      {
        name: "Zero Motorcycles",
        description: "Leading the way in electric motorcycle innovation.",
        logo: "zero-motorcycles-wordmark-white.png",
        website: "https://www.zeromotorcycles.com/"
      },
      {
        name: "UC Santa Cruz",
        description: "Primary support for facilities, equipment, and mentorship.",
        logo: "Slugworks-logo.png",
        website: "https://www.ucsc.edu/"
      },
      {
        name: "Tesla",
        description: "Providing advanced components and technical expertise.",
        logo: "tesla-red-logo.png",
        website: "https://www.tesla.com/"
      }
    ],
    silver: [
      {
        name: "Community Partner 1",
        description: "Supporting our mission with materials and resources",
        logo: "community-partner-1.png",
        website: "#"
      },
      {
        name: "Community Partner 2", 
        description: "Enabling innovation through strategic partnerships",
        logo: "community-partner-2.png",
        website: "#"
      }
    ],
    bronze: [
      {
        name: "Local Business 1",
        description: "Contributing to our racing success",
        logo: "local-business-1.png",
        website: "#"
      },
      {
        name: "Local Business 2",
        description: "Supporting student engineering excellence",
        logo: "local-business-2.png",
        website: "#"
      },
      {
        name: "Local Business 3",
        description: "Investing in the future of electric racing",
        logo: "local-business-3.png",
        website: "#"
      }
    ]
  };

  const SponsorTier = ({ title, sponsors, color }: { title: string, sponsors: any[], color: string }) => (
    <div className="mb-12">
      <h2 
        className="text-3xl font-bold text-center mb-8"
        style={{ color }}
      >
        {title} Sponsors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} tier={title.toLowerCase()} />
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-8">
            <ShimmerTitle>Our Sponsors</ShimmerTitle>
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl mb-4" style={{ color: colors.textColor }}>
              Thank you to our amazing sponsors who make Formula Slug possible!
            </p>
            <p className="text-lg" style={{ color: colors.gray[300] }}>
              Your support drives innovation, excellence, and the future of electric racing at UC Santa Cruz.
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-16">
            
            <SponsorTier 
              title="Gold" 
              sponsors={sponsors.gold}
              color={colors.secondary}
            />
            
            <SponsorTier 
              title="Silver" 
              sponsors={sponsors.silver}
              color={colors.gray[400]}
            />
            
            <SponsorTier 
              title="Bronze" 
              sponsors={sponsors.bronze}
              color={colors.gray[500]}
            />
          </div>

          {/* Become a Sponsor Section */}
          <div 
            className="mt-20 p-8 rounded-lg text-center"
            style={{ backgroundColor: colors.background.secondary }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textColor }}>
              Become a Sponsor
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.gray[300] }}>
              Join our mission to push the boundaries of electric vehicle technology and support the next generation of engineers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">

                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Support cutting-edge electric vehicle development
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Invest in hands-on learning through applied engineering
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Competition</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Help us compete at the highest level
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 rounded-md font-semibold transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary, color: colors.textColor }}
              >
                Contact Us About Sponsorship
              </a>
              <a 
                href="mailto:formulaslug@ucsc.edu"
                className="px-8 py-3 rounded-md font-semibold border-2 transition-colors duration-200 hover:opacity-90"
                style={{ 
                  borderColor: 'white', 
                  color: 'white',
                  backgroundColor: 'transparent'
                }}
              >
                Email Us Directly
              </a>
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.textColor }}>
              Sponsorship Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Brand Visibility", description: "Logo placement on car, website, and materials" },
                { title: "Networking", description: "Connect with engineering students and faculty" },
                { title: "Recruitment", description: "Access to talented engineering graduates" },
                { title: "Influence", description: "Get your tools or services in front of numerous future engineers" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: colors.background.secondary }}
                >
                  <h3 className="font-semibold mb-3" style={{ color: colors.textColor }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.gray[300] }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
