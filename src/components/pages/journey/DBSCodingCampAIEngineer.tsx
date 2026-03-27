import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function DBSCodingCampAIEngineer() {
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
              February 2026
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
            AI Engineer Path: DBS Foundation Coding Camp 2026
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Accepted into an intensive 4-5 month machine learning bootcamp
          </p>
        </header>

        {/* Article Content */}
        <article>
          {/* The Opportunity */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              The Opportunity
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Accepted into Coding Camp 2026 by DBS Foundation on the AI Engineer track. A 4-5 month
              intensive bootcamp covering machine learning, deep learning, and MLOps. Currently learning
              to build and deploy production-ready AI systems through hands-on projects and working on a
              capstone.
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

          {/* Why This Matters */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Why This Matters
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Up until now, I've been building web applications that use AI services via APIs. But to
              truly become an AI engineer, I need to understand what's happening under the hood —
              training neural networks, tuning hyperparameters, evaluating models, and deploying them in
              production. This bootcamp moves me beyond being a web developer who integrates AI to being
              someone who can actually build and train AI systems. It's the next evolution of my journey.
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
              Technologies & Skills Being Developed
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "Deep Learning", "MLOps", "AI Engineering", "Neural Networks", "Data Science"].map((skill) => (
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

          {/* Program Structure */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              Program Structure
            </h2>
            <ul
              className="space-y-4"
              style={{ color: "var(--text-secondary)" }}
            >
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Machine Learning Fundamentals:</strong> Supervised learning, unsupervised learning, and evaluation metrics
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Deep Learning:</strong> Neural networks, CNNs, RNNs, transformers, and architectures for different tasks
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>MLOps & Deployment:</strong> Training pipelines, model monitoring, and production deployments
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span style={{ color: accentColor }} className="mt-1.5 text-lg">›</span>
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Capstone Project:</strong> Build and deploy an end-to-end ML system from problem definition to production
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

          {/* My Goals */}
          <div>
            <h2
              className="text-2xl font-bold mb-5 pl-4"
              style={{
                color: "var(--text-primary)",
                borderLeft: `3px solid ${accentColor}`,
              }}
            >
              My Goals
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-6 text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm entering this bootcamp with specific goals: First, I want to truly understand machine
              learning fundamentals so I can build effective models, not just use libraries. Second, I
              want to experience the full ML pipeline from data collection to deployment, understanding
              the challenges and best practices at each stage. Third, I want to build a capstone project
              that solves a real problem and demonstrates that I can take an idea from concept to
              production.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              Beyond technical skills, I want to join a cohort of like-minded people passionate about
              AI, form connections with mentors and peers who can challenge me to think deeper, and
              position myself for roles where I can build AI systems that have meaningful impact.
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
