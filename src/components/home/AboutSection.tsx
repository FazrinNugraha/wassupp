import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function AboutSection() {
  const [expandAbout, setExpandAbout] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-16">
      <div className={`space-y-6 border-t-2 pt-12 ${isDark ? 'border-[#262626]' : 'border-gray-200'}`}>
        <p className={`text-xl font-bold leading-relaxed ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}>
          I'm <strong>Fazrin</strong>, a Fullstack Developer working
          with RaectJs and MongoDB. Currently diving deep into AI and Machine Learning
        </p>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
          Outside of coding, I enjoy watching movies and exploring new cafes in
          town.
        </p>
        <a
          href="/journey"
          className={`hover-text inline-flex items-center gap-2 font-medium hover:underline mb-8 ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}
        >
          Read my journey
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Bio Section */}
      <div className={`space-y-6 border-t-2 pt-12 ${isDark ? 'border-[#262626]' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}>About</h2>
          <button
            onClick={() => setExpandAbout(!expandAbout)}
            className={`font-medium text-sm transition-colors border-b border-transparent pb-1 ${isDark ? 'text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#A3A3A3]' : 'text-gray-500 hover:text-gray-900 hover:border-gray-500'}`}
          >
            {expandAbout ? "Show Less" : "Full Version"}
          </button>
        </div>

        {!expandAbout ? (
          <div className="space-y-6">
            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              I'm Fazrin, a 6th-semester Informatics student transitioning from{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Full-Stack Development
              </strong>{" "}
              to AI and Machine Learning.
            </p>
            <p className={`text-lg text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              My journey began in{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Full-Stack Development
              </strong>
              , where I focused on building functional applications using the{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>MERN stack</strong>—one
              of my key projects being a Comprehensive{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Learning Management System (LMS)
              </strong>
              . However, as I sought to solve more complex problems, I developed
              GlucoCheck. Integrating AI into web platform that provides
              personalized diabetes risk analysis was a turning point; it opened
              up a new perspective for me, because it wasn’t just in building
              interfaces, but in how a system 'thinks' and processes data.
            </p>
            <p className={`text-lg text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              Since then, I’ve pivoted toward AI and Machine Learning. I
              recently applied this focus during a major{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Hackathon</strong>, where
              I served as the{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Frontend Engineer
              </strong>{" "}
              for SocialCollateral AI, a microfinance platform. Collaborating
              closely with a Product Manager and data team, we successfully
              secured a spot in the{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Top 15 out of 150+ teams.
              </strong>
            </p>
            <p className={`text-lg text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              Today, as a 6th-semester Informatics student and a participant in
              the{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                DBS Foundation Coding Camp (AI Engineer Path)
              </strong>
              , I am leveraging my web development background to specialize in{" "}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Deep Learning and MLOps
              </strong>
              —aiming to build scalable, intelligent systems.
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Journey into Tech started with a 2-week bootcamp—and I haven't
              stopped building since.
            </p>
            <p className={`text-lg text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              In early 2024, I joined RevoU's Software Engineering Bootcamp
              knowing nothing about code. Two weeks of HTML, CSS, JavaScript,
              and Git gave me just enough to realize I wanted more. So I kept
              going.
            </p>
            <p className={`text-xl text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              I taught myself MySQL—understanding how data is structured,
              queried, and managed. From there, I jumped into full-stack
              development by taking a MERN course and building an LMS (Learning
              Management System) alongside it. I learned React, Express,
              MongoDB, JWT authentication, file uploads, even payment gateway
              integration. I didn't understand everything perfectly, but
              building while learning made concepts stick faster than tutorials
              alone.
            </p>
            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Then I got curious about AI.
            </p>
            <p className={`text-xl text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              I built GlucoCheck—a web app where users answer health questions
              and AI generates personalized diabetes risk assessments in Bahasa
              Indonesia. It was my first real experience integrating AI into a
              product: working with APIs, tuning prompts to get useful
              responses, and designing user flows around AI-powered features.
              That project taught me something important: AI is powerful, but
              only when wrapped in the right experience.
            </p>
            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              That curiosity led to my first hackathon.
            </p>
            <p className={`text-xl text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              I joined a 24-hour competition with four teammates—most of us
              first-timers. Out of 200+ teams, we made it to the top 15 with
              SocialCollateral AI, a platform that helps microfinance lenders
              assess group trust using graph analytics, NLP, and computer
              vision. I handled the frontend: building dashboards to visualize
              borrower networks and displaying AI-generated insights in
              real-time. We didn't win, but I learned more in that 24 hours than
              weeks of solo coding: how to ship fast, collaborate under
              pressure, and integrate complex AI outputs into something users
              can actually interact with.
            </p>
            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              That experience changed my direction entirely.
            </p>
            <p className={`text-xl text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              I realized I'm more excited about building intelligent systems
              than just web apps. So I applied to Coding Camp 2026 by DBS
              Foundation and got accepted into the AI Engineer track—a 900+ hour
              intensive program covering machine learning, deep learning, and
              MLOps. Right now, I'm learning how to build production-ready AI
              systems: training models, tuning performance, deploying to cloud
              infrastructure, and monitoring them in the real world. I'm working
              toward a capstone project that combines everything I've learned so
              far.
            </p>

            <p className={`text-xl font-bold text-justify leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              I document my work because context matters.
            </p>
            <p className={`text-xl text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
              Every project in my portfolio comes with decisions, trade-offs,
              and lessons learned—not just polished screenshots. I believe good
              engineering isn't just about shipping features; it's about leaving
              a clear record so future teams (or future me) can understand why
              things were built a certain way. I'm still early in this journey,
              but I'm committed to building things that matter and documenting
              the process along the way.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
          <a
            href="/projects"
            className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center ${isDark
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-black text-white hover:bg-gray-800'
              }`}
          >
            See My Work
          </a>
          <a
            href="/contact"
            className={`px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300 text-center ${isDark
              ? 'border-white text-white hover:bg-white hover:text-black'
              : 'border-black text-gray-900 hover:bg-black hover:text-white'
              }`}
          >
            Know Me Better
          </a>

        </div>
      </div>
    </section>
  );
}
