import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function GettingHandsOnWithMySQL() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const accentColor = "#10B981";

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
              December 2024
            </span>
            <span
              className="text-xs font-semibold border px-2.5 py-1 rounded"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              LEARNING
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Getting Hands-On with MySQL
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            My first deep dive into the world of databases
          </p>
        </header>

        {/* Article Content */}
        <article>
          {/* Overview */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Overview
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Started learning MySQL — my first real dive into the world of databases. I picked up the
              basics: CRUD operations, structuring tables, managing relationships, and writing queries
              that actually make sense. Built a few practice projects along the way to solidify my
              understanding and get comfortable working with data — an important step toward building more
              complete, data-driven applications.
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

          {/* Key Learnings */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Key Learnings
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Learning MySQL opened my eyes to how data is actually stored and retrieved. I understood
              that it's not just about writing queries — it's about designing efficient table structures,
              understanding relationships between tables, and optimizing queries for performance. I learned
              about normalization, indexes, and how to write JOIN queries to fetch data from multiple
              tables. This knowledge became invaluable when I started building full-stack applications
              where data management is critical.
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
              {["MySQL", "Database Management", "CRUD Operations", "Table Structure"].map((skill) => (
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
              This period of learning MySQL was essential because it showed me that frontend and
              database are two sides of the same coin. I can't build a complete application without
              understanding how to store and retrieve data efficiently. This foundation in databases
              prepared me perfectly for when I started learning about MongoDB and building full-stack
              applications with Node.js later on.
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
