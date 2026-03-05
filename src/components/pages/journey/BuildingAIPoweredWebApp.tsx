import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function BuildingAIPoweredWebApp() {
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
              December 2025
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
            Building My First AI-Powered Web App
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From AI curiosity to shipping a healthcare solution
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
              The Project: GlucoCheck
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Built GlucoCheck to learn how to integrate AI into web applications. Created a diabetes
              risk assessment tool where users fill out a health questionnaire, and the AI analyzes their
              responses to generate personalized risk assessments in Bahasa Indonesia. Learned how to work
              with AI APIs, prompt engineering to get clear and helpful responses, and present complex AI
              outputs in a user-friendly way. First real experience wrapping AI capabilities into an
              actual product.
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

          {/* How It Works */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              How It Works
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Users answer a series of health-related questions, and the backend sends this data to an AI
              service (like OpenAI's API) with a carefully crafted prompt. The AI analyzes the responses
              considering factors like age, BMI, family history, physical activity, and diet. It then
              generates a personalized risk assessment with recommendations. The tricky part wasn't the
              frontend or backend — it was the prompt engineering. Getting the AI to return responses that
              were accurate, helpful, culturally appropriate (in Bahasa Indonesia), and formatted in a way
              the frontend could display cleanly.
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
              {["AI", "React", "Tailwind CSS", "Prompt Engineering", "API Integration"].map((skill) => (
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

          {/* Key Insights */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Key Insights
            </h2>
            <ul
              className="space-y-4"
              style={{ color: "var(--text-secondary)" }}
            >
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Prompt Engineering is Crucial:</strong> The quality of AI output depends heavily on how you phrase the prompt
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>User Experience Matters:</strong> Presenting AI outputs in a way users can understand and act on is equally important as the AI itself
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Localization is Important:</strong> Generating outputs in Bahasa Indonesia made the app accessible to a wider user base
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>AI is a Tool, Not Magic:</strong> It's powerful but requires thoughtful integration and validation
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
              GlucoCheck taught me that AI isn't just about fancy algorithms — it's about solving real
              problems for real people. Building a health assessment tool meant understanding that my
              code could actually impact someone's health decisions, so accuracy and clarity were
              critical. This project sparked my obsession with AI, making me realize that the most
              interesting problems to solve are those that combine strong product thinking with powerful
              AI capabilities. It also made me hungry to go deeper into ML and AI engineering, which led
              me to apply for the DBS Coding Camp.
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
