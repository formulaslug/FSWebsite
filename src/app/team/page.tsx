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
  const subteamCard = ({
    subteam,
    Leaderphoto,
    teamPhoto,
    blurb,
    leftPhoto,
  }: {
    subteam: any;
    Leaderphoto: string;
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
      <div className="h-full flex-col justify-center items-center w-1/3 p-4">
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
        <p className="text-gray-400 text-center">{blurb}</p>
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
            {subteamCard({ subteam: "Aerodynamics", Leaderphoto: "Megh.jpeg", teamPhoto: "airfoilCFD.png", blurb: "wings wings wings wings.", leftPhoto: true })}
            {subteamCard({ subteam: "Aerodynamics", Leaderphoto: "Megh.jpeg", teamPhoto: "airfoilCFD.png", blurb: "Building the future.", leftPhoto: false })}
            {subteamCard({ subteam: "Aerodynamics", Leaderphoto: "Megh.jpeg", teamPhoto: "airfoilCFD.png", blurb: "Building the future.", leftPhoto: true })}
            </div>
        </div>
      </div>
    </main>
  );
}