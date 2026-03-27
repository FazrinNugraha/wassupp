import React from "react";
import { useTheme } from "../../context/ThemeContext";

// Color mapping for dot colors to actual hex values
const colorMap: Record<string, string> = {
  emerald: "#10B981",
  purple: "#A855F7",
  blue: "#3B82F6",
  orange: "#F97316",
};

// Extract color name from Tailwind class like "bg-emerald-500" → "emerald"
function extractColorName(twClass: string): string {
  const match = twClass.match(/(?:bg|text|border)-(\w+)-\d+/);
  return match ? match[1] : "blue";
}

// Convert journey title to slug for URL
function getJourneySlug(title: string): string {
  const slugMap: Record<string, string> = {
    "Bootcamp Revou Fundamental Course": "bootcamp-revou-fundamental",
    "Getting Hands-On with MySQL": "getting-hands-on-with-mysql",
    "Building My First Full-Stack Project with MERN Stack": "mern-stack-learning",
    "Finalist Hackaton x Amartha 2025": "hackathon-amaratha-finalist",
    "Building My First AI-Powered Web App": "building-ai-powered-web-app",
    "AI Engineer Path: DBS Foundation Coding Camp 2026": "dbs-coding-camp-ai-engineer",
  };
  return slugMap[title] || title.toLowerCase().replace(/\s+/g, "-");
}

export default function JourneyPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timeline = [
    {
      date: "September 2024",
      type: "LEARNING",
      typeColor: "border-emerald-500 text-emerald-500",
      dotColor: "bg-emerald-500",
      title: "Bootcamp Revou Fundamental Course",
      description:
        "A two-week intensive bootcamp where I built responsive websites using HTML, CSS, and JavaScript. Gained hands-on experience with Git and real-world development workflows.",
      skills: ["HTML", "CSS", "Java Script", "Git", "Responsive Design"],
      colorSkill: "bg-emerald-500",
    },
    {
      date: "DECEMBER 2024",
      type: "LEARNING",
      typeColor: "border-emerald-500 text-emerald-500",
      dotColor: "bg-emerald-500",
      title: "Getting Hands-On with MySQL",
      description:
        "An introduction to MySQL and database fundamentals — CRUD, relationships, and writing meaningful queries. Solidified through hands-on projects as a key step toward data-driven development.",
      skills: [
        "MySQL",
        "Database Management",
        "CRUD Operations",
        "Table Structure",
      ],
      colorSkill: "bg-emerald-500",
    },
    {
      date: "JULY 2025",
      type: "MILESTONE",
      typeColor: "border-purple-500 text-purple-500",
      dotColor: "bg-purple-500",
      title: "Building My First Full-Stack Project with MERN Stack",
      description:
        "Built a full Learning Management System using the MERN stack — covering auth with JWT, CRUD features, file uploads, and payment integration with Midtrans. Learned by building, which made everything click far faster than tutorials alone.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      colorSkill: "bg-purple-500",
    },
    {
      date: "OCTOBER 2025",
      type: "ACHIEVEMENT",
      typeColor: "border-blue-500 text-blue-500",
      dotColor: "bg-blue-500",
      title: "Finalist Hackaton x Amartha 2025",
      description:
        "Reached top 15 out of 200+ teams in my first hackathon, building SocialCollateral AI in 24 hours as the frontend developer. A microfinance trust assessment system combining graph analytics, NLP, and computer vision — built with React, TypeScript, and integrated with a FastAPI + Gemini backend.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "FastAPI",
        "Google Gemini",
        "Google Cloud Vision",
      ],
      colorSkill: "bg-blue-500",
    },
    {
      date: "DECEMBER 2025",
      type: "MILESTONE",
      typeColor: "border-purple-500 text-purple-500",
      dotColor: "bg-purple-500",
      title: "Building My First AI-Powered Web App",
      description:
        "Built GlucoCheck to learn how to integrate AI into a real product — a diabetes risk assessment tool powered by AI that delivers personalized results in Bahasa Indonesia. First hands-on experience with AI APIs and prompt engineering.",
      skills: ["AI", "React", "Tailwind CSS"],
      colorSkill: "bg-purple-500",
    },
    {
      date: "FEBRUARY 2026",
      type: "LEARNING",
      typeColor: "border-emerald-500 text-emerald-500",
      dotColor: "bg-emerald-500",
      title: "AI Engineer Path: DBS Foundation Coding Camp 2026",
      description:
        "Accepted into Coding Camp 2026 by DBS Foundation on the AI Engineer track — a 4-5 month intensive covering machine learning, deep learning, and MLOps. Currently building toward a production-ready AI capstone.",
      skills: ["Machine Learning", "Deep Learning", "MLOps", "AI Engineering"],
      colorSkill: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Journey
        </h2>
        <p
          className="mb-16 max-w-3xl mx-auto text-center text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          A timeline of my professional growth and learning progression. This
          isn't a resume—it's a story of how I've evolved as an engineer, the
          pivotal moments that shaped my thinking, and the skills I've developed
          along the way.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1.75 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "var(--border-color)" }}
          ></div>

          <div className="space-y-6">
            {timeline.map((item, index) => {
              const accentColor =
                colorMap[extractColorName(item.dotColor)] || "#3B82F6";

              return (
                <div key={item.date} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-3 w-4 h-4 ${item.dotColor} rounded-full transition-transform group-hover:scale-125`}
                  ></div>

                  {/* Card Content */}
                  <div
                    className="rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                    style={{
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    {/* Date and Type Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-medium uppercase tracking-wider"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.date}
                      </span>
                      <span
                        className={`text-xs font-semibold border px-2.5 py-1 rounded ${item.typeColor}`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Title - hover changes to accent color */}
                    <h4
                      className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:!important"
                      style={{
                        color: "var(--text-primary)",
                        ["--accent-color" as string]: accentColor,
                      }}
                      onMouseEnter={(e) => {
                        // Title hover handled by parent group
                      }}
                    >
                      <span
                        className="transition-colors duration-300"
                        style={{ color: "inherit" }}
                        ref={(el) => {
                          if (!el) return;
                          const parent = el.closest(".group");
                          if (!parent) return;
                          parent.addEventListener("mouseenter", () => {
                            el.style.color = accentColor;
                          });
                          parent.addEventListener("mouseleave", () => {
                            el.style.color = "";
                          });
                        }}
                      >
                        {item.title}
                      </span>
                    </h4>

                    {/* Description */}
                    <p
                      className="text-justify mb-4 leading-relaxed text-sm md:text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs px-3 py-1.5 rounded transition-all duration-300 cursor-default"
                            style={{
                              border: "1px solid var(--border-color)",
                              backgroundColor: "var(--bg-card)",
                              color: "var(--text-primary)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = accentColor;
                              e.currentTarget.style.color = accentColor;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "";
                              e.currentTarget.style.color = "";
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <a
                      href={`/journey/${getJourneySlug(item.title)}`}
                      className="text-sm font-medium inline-flex items-center gap-1.5 group/link relative overflow-hidden"
                      style={{ color: accentColor }}
                    >
                      <span className="relative">
                        Read more
                        <span
                          className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover/link:w-full"
                          style={{ backgroundColor: accentColor }}
                        />
                      </span>
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
