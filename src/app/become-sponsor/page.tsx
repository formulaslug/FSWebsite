import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula Slug - Become a Sponsor",
  description: "Partner with Formula Slug, UC Santa Cruz's premier engineering team. Support the next generation of engineers.",
};

export default function BecomeSponsorPage() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <ShimmerTitle>Become a Sponsor</ShimmerTitle>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.gray[300] }}>
              Formula Slug is dedicated to empowering the next 
generation of engineers by providing hands-on 
experience through the design and development 
of electric vehicles as part of the Formula SAE 
competition. By sponsoring our team, you're directly contributing to hands-on engineering experience to the largest engineering club at UC Santa Cruz.
            </p>
          </div>

          {/* Why Partner With Us */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.textColor }}>
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Brand Visibility",
                  description: "Your logo prominently displayed on our Formula SAE Electric vehicle, team apparel, and digital platforms. Your company will gain exposure and visibility within the UC Santa Cruz community internally and reach broader audiences through our marketing and business operations.",
                },
                {
                  title: "Recruiting Pipeline", 
                  description: "Direct access to UC Santa Cruz's top engineering talent across Electrical, Computer Science, and Computer Engineering disciplines. Formula Slug alumni have gone on to work full-time at companies like Tesla, Apple, Zero Motorcycles and Joby Aviation. Our 150+ members represent motivated, hands-on problem solvers with real-world project experience in electric vehicle technology.",
                },
                {
                  title: "Technical Collaboration",
                  description: "Opportunities for joint research projects, product testing, and prototype development. Our multidisciplinary teams work on cutting-edge EV technology including battery management, motor control, composite materials, and autonomous systems, which are perfect for industry partnerships.",
                },
                {
                  title: "Community Impact",
                  description: "Support hands-on STEM education at UC Santa Cruz, one of California's premier research universities. Your sponsorship directly enables experiential learning that bridges academic theory with real-world engineering challenges.",
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: colors.background.secondary }}>
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: colors.textColor }}>
                      {benefit.title}
                    </h3>
                  </div>
                  <p style={{ color: colors.gray[400] }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What Your Sponsorship Does */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: colors.textColor }}>
                  What Your Sponsorship Does
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.gray[300] }}>
                  Your partnership directly fuels innovation and hands-on learning. Every dollar goes toward building 
                  tomorrow's engineers and advancing electric vehicle technology.
                </p>
                <ul className="space-y-4">
                  {[
                    "Parts & materials: Composite layups, motor components, battery cells",
                    "Tooling & manufacturing: Machine time, materials, shop supplies", 
                    "Student development: Workshops, internships, and future full-time engineers"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-2xl mr-3" style={{ color: colors.primary }}>•</span>
                      <span style={{ color: colors.gray[300] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Stats Card */}
              <div className="p-8 rounded-lg text-center" style={{ backgroundColor: colors.background.secondary }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.electricBlue }}>
                  By the Numbers
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: colors.textColor }}>150+</div>
                    <div className="text-sm" style={{ color: colors.gray[400] }}>Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: colors.textColor }}>10+</div>
                    <div className="text-sm" style={{ color: colors.gray[400] }}>Engineering Disciplines</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: colors.textColor }}>1</div>
                    <div className="text-sm" style={{ color: colors.gray[400] }}>Incredible Car</div>
                  </div>
                  <div className="text-sm mt-4" style={{ color: colors.gray[500] }}>
                    Students majoring in: Mechanical, Electrical, Computer Science, Computer Engineering, and more
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsorship CTA */}
          <section className="py-20 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-8" style={{ color: colors.textColor }}>
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: colors.gray[300] }}>
                Check out our{" "}
                <a
                  href="/assets/FormulaSlug_Sponsorship_Packet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold hover:opacity-80 transition-opacity"
                  style={{ color: colors.electricBlue }}
                >
                  sponsorship packet
                </a>
                , which includes gold, silver, and bronze sponsorship tiers.
              </p>
              <p className="text-base mt-8" style={{ color: colors.gray[500] }}>
                Interested in a custom sponsorship package? Reach out to discuss opportunities tailored to your organization.
              </p>
            </div>
          </section>

          
        </div>
      </div>
      <Footer />
    </main>
  );
}