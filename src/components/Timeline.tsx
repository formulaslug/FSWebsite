// Thanks Gemini for the help

import React from "react";
import { colors } from "@/config/colors";

export interface TimelineEvent {
  title: string;
  body: React.ReactNode;
  date: string;
  align: "left" | "right";
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative w-full py-8">
      {/* Central Connecting Line */}
      <div className="absolute inset-0 flex justify-center pointer-events-none my-12">
        <div
          className="w-1 rounded-full hidden md:block h-full"
          style={{ background: colors.slugYellow }}
        />
      </div>

      {/* Timeline Events List */}
      <div className="space-y-12 relative">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              {/* Left Column */}
              {event.align === "left" ? (
                <TimelineCard event={event} align="right" />
              ) : (
                <div className="w-1/12 md:w-5/12" />
              )}

              {/* Center Dot Node */}
              <div className="w-2/12 flex justify-center z-10">
                <div
                  className="w-4 h-4 rounded-full shadow"
                  style={{
                    backgroundColor: colors.slugYellow,
                    border: `4px solid ${colors.electricBlue}`,
                  }}
                />
              </div>

              {/* Right Column */}
              {event.align === "left" ? (
                <div className="w-1/12 md:w-5/12" />
              ) : (
                <TimelineCard event={event} align="left" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineCardProps {
  event: TimelineEvent;
  align: "left" | "right";
}

const TimelineCard: React.FC<TimelineCardProps> = ({ event, align }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`w-9/12 md:w-5/12 ${
        isLeft ? "text-left pl-4 md:pl-8" : "text-right pr-4 md:pr-8"
      }`}
    >
      <div
        className="text-white p-4 rounded-xl shadow-lg transition-transform duration-200"
        style={{
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, ${colors.electricBlue}BB, ${colors.titleBlue}DD)`,
        }}
      >
        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
        <div className="text-sm opacity-90">{event.body}</div>
        <div
          className="text-xs mt-3 px-3 py-1 rounded-full inline-block font-semibold shadow-sm"
          style={{
            backgroundColor: colors.slugYellow,
            color: colors.primary,
          }}
        >
          {event.date}
        </div>
      </div>
    </div>
  );
};
