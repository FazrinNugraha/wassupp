import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const [expandAbout, setExpandAbout] = useState(false);

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-5 py-16 pt-32 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="space-y-8 flex flex-col justify-start">
              {/* Main Headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight tracking-tight">
                  I don't just ship projects. I document decisions, trade-offs, and outcomes.
                </h2>
                <p className="text-xl md:text-lg text-[#A3A3A3] leading-relaxed">
                  A portfolio built around case studies — not screenshots.
                </p>
                <p className="text-xl text-[#A3A3A3] leading-relaxed">
                  Muhamad Fazrin Nugraha · Senior Software Engineer
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#FFFFFF] text-[#141414] font-medium rounded hover:bg-[#FAFAFA] transition-colors text-sm"
                >
                  Explore Case Studies
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#decisions"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-[#262626] text-[#FAFAFA] font-medium rounded hover:bg-[#1A1A1A] transition-colors text-sm"
                >
                  How I Make Decisions
                </a>
              </div>
            </div>

            {/* Right Column - Featured Projects */}
            <div className="space-y-10 lg:space-y-6">
              <a
                href="#project-1"
                className="block p-6 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-[#FFFFFF] hover:bg-[#202020] transition-all group flex-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
                    Case · Lead Engineer
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#A3A3A3] group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                  Rebuilding the Payment System
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Reduced payment processing time by 60% and improved reliability to 99.9% uptime ahdsjadnbada
                </p>
              </a>

              <a
                href="#project-2"
                className="block p-6 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-[#FFFFFF] hover:bg-[#202020] transition-all group flex-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
                    Case · Full-Stack Engineer
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#A3A3A3] group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                  Real-Time Analytics Dashboard
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Built a real-time analytics platform processing 100K+ events per second with sub-second latency
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-6 border-t-2 border-[#262626] pt-12">
          <p className="text-xl text-[#FAFAFA] leading-relaxed">
            I'm <strong>Fazrin</strong>, Software Engineer focused on building systems that move real business metrics.
          </p>
          <p className="text-xl text-[#A3A3A3] leading-relaxed">
            Every major decision is documented—because great engineers don't just build things, they explain why.
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

          <p className="text-xl text-gray-300 leading-relaxed">
            I'm a full-stack developer passionate about crafting user-centric solutions that solve real-world problems. With expertise in modern web technologies, I create applications that are both beautiful and functional.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey in tech started with curiosity about how websites work, which evolved into a deep passion for building scalable applications. I love collaborating with teams and continuously learning new technologies to stay ahead of the curve.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

          {/* Expanded content */}
          {expandAbout && (
            <div className="space-y-4  ">
              <p className="text-xl text-gray-300 leading-relaxed">
                Throughout my career, I've worked on diverse projects ranging from payment systems to real-time analytics platforms. Each project taught me something valuable about system design, user experience, and the importance of clear documentation.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                I believe in writing code that's not just functional, but also maintainable and well-documented. I'm a strong advocate for best practices and continuous improvement in engineering teams.
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

      {/* Recent Decisions */}
      <section id="decisions" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#FAFAFA]">Recent Decisions</h2>
          {/* <a
            href="#all-decisions"
            className="text-[#A3A3A3] hover:text-[#FAFAFA] font-medium hover:underline"
          >
            View all
          </a> */}
        </div>

        <div className="space-y-8">
          {/* Decision 1 */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-[#A3A3A3] uppercase tracking-wide">
              PHASE : Jun 2024
            </p>
            <h2 className="text-2xl font-bold text-[#FAFAFA]">
              Transitioning to Remote-First Team Structure
            </h2>
            <p className="text-[#A3A3A3] leading-relaxed">
              Post-pandemic, our team was split between office and remote workers. The hybrid model created two classes of employees and made collaboration inconsistent. We needed to decide on a deliberate approach.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="space-y-3 pt-8 border-t-2 border-[#262626]">
            <p className="text-sm font-medium text-[#A3A3A3] uppercase tracking-wide">
              Mar 2024
            </p>
            <h3 className="text-2xl font-bold text-[#FAFAFA]">
              Adopting Event-Driven Architecture for Order Processing
            </h3>
            <p className="text-[#A3A3A3] leading-relaxed">
              Our synchronous order processing pipeline was becoming a bottleneck. Long-running operations blocked the checkout flow, and failures in downstream services caused cascading issues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}