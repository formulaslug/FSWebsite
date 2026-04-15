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

const benefits = [
  {
    title: "Brand Visibility",
    description:
      "Your logo prominently displayed on our Formula SAE Electric vehicle, team apparel, and digital platforms — gaining direct exposure within the UC Santa Cruz community and beyond.",
  },
  {
    title: "Recruiting Pipeline",
    description:
      "Direct access to UCSC's top engineering talent in Electrical, CS, and Computer Engineering. Formula Slug alumni have gone on to Tesla, Apple, Zero Motorcycles, and Joby Aviation. Our 150+ members are motivated, hands-on problem solvers.",
  },
  {
    title: "Technical Collaboration",
    description:
      "Opportunities for joint research, product testing, and prototype development. Our teams work on battery management, motor control, composite materials, and autonomous systems — ideal for industry partnerships.",
  },
  {
    title: "Community Impact",
    description:
      "Support hands-on STEM education at one of California's premier research universities. Your sponsorship directly bridges academic theory with real-world engineering challenges.",
  },
];

const contributions = [
  {
    label: "FUNDING",
    body: "The team depends on sponsor funding to purchase the materials and components required to build our car.",
  },
  {
    label: "RESOURCES",
    body: "In-kind donations such as parts and services give us the resources to turn our project into reality.",
  },
  {
    label: "GUIDANCE",
    body: "Working with unexplored technology creates challenges. Industry expertise helps us shape the engineers of the future.",
  },
];

const stats = [
  { value: "150+", label: "Active Members" },
  { value: "10+", label: "Engineering Disciplines" },
  { value: "7+", label: "Years of Competition" },
];

export default function BecomeSponsorPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />

        {/* Page title */}
        <div className="pt-[12vh] pb-6 text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            <ShimmerTitle>Become a Sponsor</ShimmerTitle>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

          {/* Hero blurb */}
          <p
            className="text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.gray[300] }}
          >
            Formula Slug is dedicated to empowering the next generation of
            engineers through hands-on design and development of electric
            vehicles in the Formula SAE competition. By sponsoring our team,
            you&apos;re directly funding experiential learning for the largest
            engineering club at UC Santa Cruz.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 sm:p-8 text-center"
                style={{ backgroundColor: colors.background.secondary }}
              >
                <div
                  className="text-3xl sm:text-5xl font-bold mb-1"
                  style={{ color: colors.electricBlue }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] sm:text-sm tracking-wide sm:uppercase sm:tracking-widest leading-tight"
                  style={{ color: colors.gray[400] }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Why Partner With Us */}
          <section>
            <h2
              className="text-3xl font-bold text-center mb-10"
              style={{ color: colors.slugYellow }}
            >
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl p-6 flex gap-4"
                  style={{
                    backgroundColor: colors.background.secondary,
                    borderLeft: `3px solid ${colors.electricBlue}`,
                  }}
                >
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: colors.electricBlue }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: colors.gray[400] }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Make a Difference */}
          <section>
            <h2
              className="text-3xl font-bold text-center mb-10"
              style={{ color: colors.slugYellow }}
            >
              Make a Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contributions.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: colors.background.secondary }}
                >
                  <div
                    className="text-sm font-bold tracking-widest mb-3"
                    style={{ color: colors.electricBlue }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="w-8 mx-auto mb-4 h-px"
                    style={{ backgroundColor: colors.electricBlue }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: colors.gray[400] }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-6">
            <h2 className="text-4xl font-bold" style={{ color: colors.textColor }}>
              Ready to Partner With Us?
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: colors.gray[300] }}>
              Review our sponsorship packet to explore Gold, Silver, and Bronze
              tiers — or reach out to discuss a custom package tailored to your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="/assets/FormulaSlug_Sponsorship_Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg font-bold text-base transition-opacity duration-200 hover:opacity-85"
                style={{
                  backgroundColor: colors.electricBlue,
                  color: "#fff",
                }}
              >
                View Sponsorship Packet
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-lg font-bold text-base transition-colors duration-200 hover:bg-white"
                style={{
                  border: `2px solid ${colors.gray[500]}`,
                  color: colors.gray[300],
                }}
              >
                Contact Us
              </a>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
