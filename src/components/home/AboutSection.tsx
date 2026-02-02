import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const [expandAbout, setExpandAbout] = useState(false);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-6 border-t-2 border-[#262626] pt-12">
        <p className="text-xl font-bold text-[#FAFAFA] leading-relaxed">
          I'm <strong>Fazrin</strong>, a Junior Fullstack Developer currently working
          with RaectJs and MongoDB
        </p>
        <p className="text-lg text-[#A3A3A3] leading-relaxed">
          Outside of coding, I enjoy watching movies and exploring new cafes in
          town.
        </p>
        <a
          href="/journey"
          className="hover-text inline-flex items-center gap-2 text-[#FAFAFA] font-medium hover:underline mb-8"
        >
          Read my journey
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Bio Section */}
      <div className="space-y-6 border-t-2 border-[#262626] pt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#FAFAFA]">About</h2>
          <button
            onClick={() => setExpandAbout(!expandAbout)}
            className="text-[#A3A3A3] hover:text-[#FAFAFA] font-medium text-sm transition-colors border-b border-transparent hover:border-[#A3A3A3] pb-1 "
          >
            {expandAbout ? "Show Less" : "Full Version"}
          </button>
        </div>

        {!expandAbout ? (
          <div className="space-y-6">
            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              I'm Fazrin, a 6th-semester Informatics student transitioning from{" "}
              <strong className="font-bold text-white">
                Full-Stack Development
              </strong>{" "}
              to AI and Machine Learning.
            </p>
            <p className="text-lg text-justify text-[#A3A3A3] leading-relaxed">
              My journey began in{" "}
              <strong className="font-bold text-white">
                Full-Stack Development
              </strong>
              , where I focused on building functional applications using the{" "}
              <strong className="font-bold text-white">MERN stack</strong>—one
              of my key projects being a Comprehensive{" "}
              <strong className="font-bold text-white">
                Learning Management System (LMS)
              </strong>
              . However, as I sought to solve more complex problems, I developed
              GlucoCheck. Integrating AI into web platform that provides
              personalized diabetes risk analysis was a turning point; it opened
              up a new perspective for me, because it wasn’t just in building
              interfaces, but in how a system 'thinks' and processes data.
            </p>
            <p className="text-lg text-justify text-[#A3A3A3] leading-relaxed">
              Since then, I’ve pivoted toward AI and Machine Learning. I
              recently applied this focus during a major{" "}
              <strong className="font-bold text-white">Hackathon</strong>, where
              I served as the{" "}
              <strong className="font-bold text-white">
                Frontend Engineer
              </strong>{" "}
              for SocialCollateral AI, a microfinance platform. Collaborating
              closely with a Product Manager and data team, we successfully
              secured a spot in the{" "}
              <strong className="font-bold text-white">
                Top 15 out of 150+ teams.
              </strong>
            </p>
            <p className="text-lg text-justify text-[#A3A3A3] leading-relaxed">
              Today, as a 6th-semester Informatics student and a participant in
              the{" "}
              <strong className="font-bold text-white">
                DBS Foundation Coding Camp (AI Engineer Path)
              </strong>
              , I am leveraging my web development background to specialize in{" "}
              <strong className="font-bold text-white">
                Deep Learning and MLOps
              </strong>
              —aiming to build scalable, intelligent systems.
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              My Journey into Tech started with a 2-week bootcamp—and I haven't
              stopped building since.
            </p>
            <p className="text-lg text-justify text-[#A3A3A3] leading-relaxed">
              In early 2024, I joined RevoU's Software Engineering Bootcamp
              knowing nothing about code. Two weeks of HTML, CSS, JavaScript,
              and Git gave me just enough to realize I wanted more. So I kept
              going.
            </p>
            <p className="text-xl text-justify text-[#A3A3A3] leading-relaxed">
              I taught myself MySQL—understanding how data is structured,
              queried, and managed. From there, I jumped into full-stack
              development by taking a MERN course and building an LMS (Learning
              Management System) alongside it. I learned React, Express,
              MongoDB, JWT authentication, file uploads, even payment gateway
              integration. I didn't understand everything perfectly, but
              building while learning made concepts stick faster than tutorials
              alone.
            </p>
            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              Then I got curious about AI.
            </p>
            <p className="text-xl text-justify text-[#A3A3A3] leading-relaxed">
              I built GlucoCheck—a web app where users answer health questions
              and AI generates personalized diabetes risk assessments in Bahasa
              Indonesia. It was my first real experience integrating AI into a
              product: working with APIs, tuning prompts to get useful
              responses, and designing user flows around AI-powered features.
              That project taught me something important: AI is powerful, but
              only when wrapped in the right experience.
            </p>
            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              That curiosity led to my first hackathon.
            </p>
            <p className="text-xl text-justify text-[#A3A3A3] leading-relaxed">
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
            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              That experience changed my direction entirely.
            </p>
            <p className="text-xl text-justify text-[#A3A3A3] leading-relaxed">
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

            <p className="text-xl font-bold text-justify text-white leading-relaxed">
              I document my work because context matters.
            </p>
            <p className="text-xl text-justify text-[#A3A3A3] leading-relaxed">
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

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-center"
          >
            See My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
