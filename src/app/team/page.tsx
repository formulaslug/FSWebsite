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

    const subteamCard = ({ subteam, Leaderphoto, teamPhoto, blurb }: { subteam: any, Leaderphoto: string, teamPhoto: string, blurb: string }) => (
        <div className="flex"style={{
            backgroundColor: colors.background.card,
            padding: "0",
            width: "100vw",
            height: "25vh",
        }}>
            <h2 className="text-xl font-semibold mb-2">{subteam}</h2>
            <div className="w-20vh h-full">
            <img 
                src={`/leaders/${Leaderphoto}`} 
                alt={`${subteam} Leader`} 
                className=" h-full m-0"
            />
            </div>
            <p className="text-gray-400">Team Photo: {teamPhoto}</p>
            <p className="text-gray-400">Blurb: {blurb}</p>

        </div>
    );


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
          
          <div className="flex">

            {subteamCard({ subteam: "Aerodynamics", Leaderphoto: "Megh.jpeg", teamPhoto: "team1.jpg", blurb: "Building the future." })}

          </div>
        </div>
      </div>
    </main>
  );
}