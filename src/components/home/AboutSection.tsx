import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function AboutSection() {
  const [expandAbout, setExpandAbout] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16"
    >
      <div
        className="pt-12 pb-12"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <p
          className="text-xl font-bold leading-relaxed pb-4"
          style={{ color: "var(--text-primary)" }}
        >
          I'm <strong>Fazrin</strong>, a Fullstack Developer working with
          RaectJs and MongoDB. Currently diving deep into AI and Machine
          Learning
        </p>
        <p
          className="text-lg leading-relaxed pb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Outside of coding, I enjoy watching movies and exploring new cafes in
          town.
        </p>
        <a
          href="/journey"
          className="mt-2 py-1 text-base font-medium inline-flex items-center gap-2 group/link relative overflow-hidden"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="relative">
            Read my journey
            <span
              className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover/link:w-full"
              style={{ backgroundColor: "var(--text-primary)" }}
            />
          </span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
            →
          </span>
        </a>
      </div>

      {/* Bio Section */}
      <div
        className="space-y-6 pt-12"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
          <button
            onClick={() => setExpandAbout(!expandAbout)}
            className="font-medium text-sm transition-colors border-b border-transparent pb-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {expandAbout ? "Show Less" : "Full Version"}
          </button>
        </div>

        {!expandAbout ? (
          <div className="space-y-6">
            <p
              className="text-xl font-bold text-justify leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              Hi, I'm Fazrin.{" "}
              A{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Full-Stack Developer
              </strong>{" "}
              transitioning into{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                AI & Machine Learning
              </strong>
              .
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm a 6th-semester Informatics student passionate about bridging
              the gap between functional web interfaces and intelligent systems.
              From building{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                MERN-stack applications
              </strong>{" "}
              to developing AI-driven solutions like{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                GlucoCheck
              </strong>
              , I focus on how systems process data to solve complex problems.
              Currently specializing in{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Deep Learning and MLOps
              </strong>{" "}
              at the{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                DBS Foundation Coding Camp
              </strong>{" "}
              to build scalable, production-ready AI.
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Today, as part of the{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                DBS Foundation Coding Camp (AI Engineer Path)
              </strong>
              , I leverage my web development background to specialize in{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Deep Learning and MLOps
              </strong>
              , aiming to build systems that are both scalable and smart.
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p
              className="text-xl font-bold text-justify leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              My Journey into Tech
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              My journey into tech started with a leap of faith: a two-week
              bootcamp at{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                RevoU
              </strong>
              . I came in with zero coding experience, but
              after learning the basics of web development, I was hooked—I
              didn't just want to consume technology, I wanted to build it. To
              escape "tutorial hell," I dove straight into{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                full-stack development
              </strong>
              . I built a complete{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Learning Management System
              </strong>{" "}
              from scratch using the{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                MERN stack
              </strong>
              , which taught me that the fastest way
              to grow is by tackling the "unknowns" head-on.
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              As I got more comfortable with web development, I started
              wondering how AI could solve real-world problems. This curiosity
              led me to build{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                GlucoCheck
              </strong>
              , an AI-powered web app for
              personalized diabetes risk assessments in Bahasa Indonesia. This
              project was a major turning point; it showed me that AI is
              incredibly powerful, but only when it is wrapped in an intuitive,
              user-friendly experience.
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              To push my limits, I joined a{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                24-hour national hackathon
              </strong>
              , where my team built{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                SocialCollateral AI
              </strong>{" "}
              and proudly made it to the{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Top 15 out of 150+ teams
              </strong>
              . Translating complex AI data into simple
              dashboards under extreme pressure completely changed my
              trajectory. I realized my true passion lies in building
              intelligent systems, which led me to the AI path at{" "}
              <strong
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Coding Camp 2026 by DBS Foundation
              </strong>
              , where I'm now learning to train and
              deploy production-ready AI models.
            </p>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Through all of this, I've learned that good engineering is about
              more than just shipping features—it demands clarity. I carefully
              document my work because context matters, whether for a teammate
              or for myself six months down the line. I'm early in my career,
              but my focus is clear: I want to build things that matter and
              share the lessons I learn along the way.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
          <a
            href="/projects"
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Check My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 text-center"
            style={{
              border: "2px solid var(--text-primary)",
              color: "var(--text-primary)",
              backgroundColor: "transparent",
            }}
          >
            Know Me Better
          </a>
        </div>
      </div>
    </section>
  );
}
