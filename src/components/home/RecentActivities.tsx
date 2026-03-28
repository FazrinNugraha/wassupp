import React from "react";
import { useTheme } from "../../context/ThemeContext";

const highlights = [
  {
    role: "AI Engineer",
    phase: "Februari 2026 - Juni 2026",
    title: "Coding Camp 2026 powered by DBS Foundation",
    description:
      "Got into Coding Camp 2026 powered by DBS Foundation and chose the AI Engineer track. Currently going through an intensive 4-5 month program learning machine learning, deep learning, and MLOps.",
    badgeColor: "text-blue-500",
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/20",
  },
  {
    role: "Frontend Engineer",
    phase: "September 2025",
    title: "Finalist Hackaton x Amartha 2025",
    description:
      "My first hackathon — made it to Finalist Top 15 out of 150+ teams. Spent 24 hours building SocialCollateral AI as the frontend dev in a 5-person team. We created a system that uses graph analytics, NLP, and computer vision to help microfinance lenders assess group trust.",
    badgeColor: "text-purple-500",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
  },
];

export default function RecentActivities() {
  const { theme } = useTheme();

  return (
    <section
      id="decisions"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16 scroll-mt-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Top divider */}
      <div
        className="pt-12 mb-8 flex flex-col items-start gap-4"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <h2
          className="text-2xl font-bold mt-2"
          style={{ color: "var(--text-primary)" }}
        >
          Latest Highlights
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="relative z-10">
              {/* Date + Badge Row */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.phase}
                </span>
                <div
                  className={`inline-flex items-center text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md border ${item.badgeColor}  ${item.badgeBorder}`}
                >
                  {item.role}
                </div>
              </div>

              {/* Highlight Title */}
              <h3
                className="text-2xl font-bold leading-relaxed mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-md text-justify leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}