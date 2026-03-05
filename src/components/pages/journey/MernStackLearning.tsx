import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function MernStackLearning() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const accentColor = "#A855F7";

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
              July 2025
            </span>
            <span
              className="text-xs font-semibold border px-2.5 py-1 rounded"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              MILESTONE
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Building My First Full-Stack Project with MERN Stack
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From theory to real-world full-stack development
          </p>
        </header>

        {/* Article Content */}
        <article>
          {/* The Project */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              The Project: Learning Management System
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Jumped into full-stack development by building a Learning Management System through a
              MERN stack course. Learned React, Express, and MongoDB by actually using them — setting
              up authentication with JWT, building CRUD features, handling file uploads, and integrating
              a payment gateway with Midtrans. Didn't understand everything perfectly, but building a
              real project while learning helped things click far faster than just watching tutorials ever
              could.
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

          {/* What Made This Special */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              What Made This Special
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              This was my first real full-stack project, and it changed everything. I went from building
              static websites to creating applications with actual databases, user authentication, and
              payment processing. Learning JWT authentication meant I understood how backend protects user
              data. Building CRUD features taught me how frontend and backend communicate. Integrating
              Midtrans payment gateway showed me how real-world applications handle sensitive transactions.
              Every part of the stack suddenly made sense.
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
              {["MongoDB", "Express", "React", "Node.js"].map((skill) => (
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

          {/* Key Features Built */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Key Features Built
            </h2>
            <ul
              className="space-y-4"
              style={{ color: "var(--text-secondary)" }}
            >
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>User Authentication:</strong> JWT-based login system with secure password handling
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Course Management:</strong> Complete CRUD operations for courses, lessons, and content
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>File Uploads:</strong> Students can upload assignments, teachers can provide feedback
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Payment Integration:</strong> Integrated Midtrans for course purchases
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
              This MERN stack project was transformative. It showed me I could build production-level
              applications. More importantly, it revealed how much I still had to learn — about error
              handling, security, testing, and deployment. But that challenge excited me rather than
              discouraged me. This milestone marked the transition from "learning to code" to "being a
              developer" in my mind. From here on, I wasn't just trying to understand concepts — I was
              building solutions to real problems.
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
