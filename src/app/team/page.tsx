"use client";

/*
  I'm really not sure how to make this look good,
  I want big high quality photos of every subteam doing their work and a small photo of the subteam leader.
  Each team needs a blurb, no call to action, that's what the join team is for
  Front page links need to have seperate anchor tags here, we also need outreach/finance on front page
*/

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { colors } from "@/config/colors";


export default function TeamPage() {
  const CompositesBlurb = "Pushing the limits of performance starts with cutting weight without compromising strength. Our composites team engineers precision carbon fiber components such as the aerodynamics package, steering wheel, seat, body shell, and accumulator fan cowling Every part we craft blends lightweight efficiency with durability that endures the high forces of racing."
  const VDBlurb = "Vehicle Dynamics is the invisible foundation of all motor vehicles. Our members often work between subteams, focusing on the physics behind every static and dynamic property of our cars. We design things that often cannot be seen, but are impossible to ignore. If you’re looking for a physics/mathematics-driven position, please consider joining Vehicle Dynamics!"
  const ErgonomicsBlurb = "The Ergonomics team focuses on systems that directly interact with the driver, focused on driver performance, connection, usability, safety, and comfort. They are responsible for the research, design, manufacturing, and testing of the pedal box, driver seating, steering system, brakes, and play a large role in the overall cockpit/chassis design. Their work heavily impacts the drivability and driving experience of the car."
  const AccumulatorBlurb = "The accumulator team builds the battery pack that powers the car—it’s a subteam where mechanical and electrical work come together. With tasks ranging from pack design to modeling the container and cooling systems, we ensure the accumulator delivers power safely and reliably."
  const OutreachBlurb = "The Outreach Team at Formula Slug is responsible for both internal and external promotion, helping to shape and maintain the team’s image and brand. Through social media, partnerships with industry and academia, and engaging storytelling, the team connects with supporters, potential sponsors, and new talent. By showcasing the daily innovations and the collaboration behind every project, Outreach highlights Formula Slug not just as a team that engineers a car, but as a supportive, hands-on community dedicated to excellence both on and off the track."
  const FinanceBlurb = "The finance team is an amazing opportunity to gain experience understanding how different parts of an organization come together to make financial decisions. We work directly with subteams to create budgets and track expenses, while also coordinating fundraising efforts and developing financial proposals."
  const AerodynamicsBlurb = "The aerodynamics subteam develops high-performance wings and bodywork to optimize downforce and minimize drag for maximum lap times. Join us to gain hands-on experience with CFD analysis, wind tunnel testing, and composite manufacturing while designing the aerodynamic package that gives our car its competitive edge."
  const FirmwareBlurb = "JAAAAAACKKKK"
  const SoftwareBlurb = "The software team develops tools and systems that support vehicle simulation and autonomous driving. We build models to predict performance, design algorithms for control and perception, and ensure the car can make real-time decisions on and off the track. Our work connects data, software, and hardware to improve both driver and vehicle performance. The software team will be a big commitment and we expect dedication and curiosity whether you come in with no experience or lots of experience."
  const ChassisBlurb = "GAAAAVINNNNNN"
  const ManufacturingBlurb = "BEN GRAU!"
  const WeldingBlurb = "Mr Morenious"
  const SuspensionBlurb = "MIRA"
  const HVBlurb = "The High Voltage team's primary responsibility is ensuring the energy inside the accumulator makes its way to the motor. This involves designing circuits that interface with the motor controller, placing high-current cabling to carry the power, collaborating with other teams to optimally position tractive system components, and more! In addition to the on-board system, we also design and assemble a custom charger for the accumulator."

  const subteamCard = ({
    subteam,
    teamPhoto,
    blurb,
    leftPhoto,
  }: {
    subteam: any;
    teamPhoto: string;
    blurb: string;
    leftPhoto: boolean;
  }) => {
    const photoElement = (
      <div className="flex items-center justify-center w-2/3 p-4">
        <img
          src={`/photos/${teamPhoto}`}
          alt={`${subteam} Team Photo`}
          className="w-full h-full object-cover"
          style={{ margin: "4vw" }}
        />
      </div>
    );

    const textElement = (
      <div className="h-full flex flex-col justify-center items-center w-1/3 p-4">
        <h2
          className="text-5xl font-semibold mb-2 text-center"
          style={{
        marginTop: "5vh",
        color: colors.slugYellow,
        textShadow: `2px 2px 0px ${colors.electricBlue}`,
          }}
        >
          {subteam}
        </h2>
        <p 
          className="text-white text-center text-2xl flex items-center justify-center h-full">{blurb}</p>
      </div>
    );

    return (
      <div
        className="flex"
        style={{
          padding: "0",
          width: "100vw",
          height: "50vh",
        }}
      >
        <div className="flex w-full h-full">
          {leftPhoto ? (
            <>
              {photoElement}
              {textElement}
            </>
          ) : (
            <>
              {textElement}
              {photoElement}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
    <div style={{ margin: 0, padding: 0, width: '100%' }}>
      <Navbar />
        
        <div>
          <h1 
            className="text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-8"
            style={{
              color: "white"
            }}
          >
            Meet the Team
          </h1>
          
            <div className="flex flex-col">
            {subteamCard({ subteam: "Aerodynamics", teamPhoto: "Aerodynamics.jpg", blurb: AerodynamicsBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Composites", teamPhoto: "Composites.png", blurb: CompositesBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "Chassis", teamPhoto: "Chassis.png", blurb: ChassisBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Vehicle Dynamics", teamPhoto: "VehicleDynamics.png", blurb: VDBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "Ergonomics", teamPhoto: "Ergonomics.png", blurb: ErgonomicsBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Accumulator", teamPhoto: "Accumulator.png", blurb: AccumulatorBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "Outreach", teamPhoto: "Outreach.jpg", blurb: OutreachBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Finance", teamPhoto: "Finance.JPG", blurb: FinanceBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "Firmware", teamPhoto: "Firmware.jpg", blurb: FirmwareBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Software", teamPhoto: "Software.png", blurb: SoftwareBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "Manufacturing", teamPhoto: "Manufacturing.png", blurb: ManufacturingBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Welding", teamPhoto: "Welding.jpg", blurb: WeldingBlurb, leftPhoto: false })}
            {subteamCard({ subteam: "High Voltage", teamPhoto: "HV.jpg", blurb: HVBlurb, leftPhoto: true })}
            {subteamCard({ subteam: "Suspension", teamPhoto: "Suspension.jpg", blurb: SuspensionBlurb, leftPhoto: false })}


            </div>
        </div>
      </div>
    </main>
  );
}