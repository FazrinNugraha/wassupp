import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function HackathonAmarathaFinalist() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const accentColor = "#3B82F6";

  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Back Button */}
        <a
          href="/journey"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          <span>←</span> Back to Journey
        </a>

        {/* Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              October 2025
            </span>
            <span
              className="text-xs font-semibold border px-2.5 py-1 rounded"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              ACHIEVEMENT
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Finalist in Hackathon x Amartha 2025
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Top 15 out of 200+ teams with an AI-powered fintech solution
          </p>
        </header>

        {/* Article Content */}
        <article>
          {/* The Challenge & Solution */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              The Challenge & Solution
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Made it to top 15 out of 200+ teams in my first hackathon. Built SocialCollateral AI with
              a team of 5 as the frontend developer—a system that helps microfinance lenders assess group
              trust using AI. We integrated graph analytics to visualize borrower networks, NLP to analyze
              field reports, and computer vision for asset valuation. All built in 24 hours with React,
              TypeScript, Tailwind CSS, Chart.js for visualizations, and integrated with FastAPI backend
              powered by Google Gemini and Google Cloud Vision.
            </p>
          </div>

          {/* Separator */}
          <div
            className="mb-12"
            style={{
              height: "1px",
              background: `linear-gradient(to right, ${accentColor}40, transparent)`,
            }}
          />

          {/* My Role */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              My Role as Frontend Developer
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              As the frontend developer, I was responsible for building the user interface that would
              display complex AI insights in an intuitive way. This meant creating interactive dashboards,
              integrating Chart.js for data visualization, and ensuring the UI could handle real-time
              updates from the backend. Working with graph data to visualize borrower networks required
              careful thinking about how to present complex financial relationships in a way that
              non-technical users could understand at a glance.
            </p>
          </div>

          {/* Separator */}
          <div
            className="mb-12"
            style={{
              height: "1px",
              background: `linear-gradient(to right, ${accentColor}40, transparent)`,
            }}
          />

          {/* Technologies & Skills */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Chart.js", "FastAPI", "Google Gemini", "Google Cloud Vision"].map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-default"
                  style={{
                    border: `1px solid ${accentColor}50`,
                    color: accentColor,
                    backgroundColor: `${accentColor}10`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = accentColor;
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${accentColor}10`;
                    e.currentTarget.style.color = accentColor;
                    e.currentTarget.style.borderColor = `${accentColor}50`;
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div
            className="mb-12"
            style={{
              height: "1px",
              background: `linear-gradient(to right, ${accentColor}40, transparent)`,
            }}
          />

          {/* What I Learned */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              What I Learned
            </h2>
            <ul
              className="space-y-4"
              style={{ color: "var(--text-secondary)" }}
            >
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Working Under Pressure:</strong> 24 hours to build a complete product teaches you to prioritize features quickly
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Cross-functional Collaboration:</strong> Working with backend, AI, and design teams showed me how different expertise comes together
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Data Visualization:</strong> Learned how to make complex AI outputs accessible to end-users
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Shipping Fast:</strong> Sometimes good enough shipped in 24 hours beats perfect never shipping
                </span>
              </li>
            </ul>
          </div>

          {/* Separator */}
          <div
            className="mb-12"
            style={{
              height: "1px",
              background: `linear-gradient(to right, ${accentColor}40, transparent)`,
            }}
          />

          {/* Impact & Takeaway */}
          <div>
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Impact & Takeaway
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              This hackathon was proof that I could build real solutions under real constraints. Making
              it to the finals out of 200+ teams validated all the learning I'd done up to that point.
              More importantly, it showed me that I'm capable of learning new technologies quickly (we
              used tools I'd never touched before), collaborating with strong team members, and shipping
              products that solve real problems. This experience made me crave building more AI-powered
              applications and deepened my interest in creating products that make a tangible difference.
            </p>
          </div>
        </article>

        {/* Footer */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: `1px solid var(--border-color)` }}
        >
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            Part of my development journey
          </div>
        </footer>
      </section>
    </div>
  );
}
