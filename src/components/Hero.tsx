import React, { useState, useEffect } from "react";
import { ArrowRight, FileText } from "lucide-react";

export default function Portfolio() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const strings = [
    "Transforming Ideas into Powerful Web Applications",
    "Building Scalable & User-Centric Solutions",
    "Creating Amazing Digital Experiences",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 50);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Hero Section */}
      <section id="home" className=" w-full px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8 flex flex-col justify-start">
              {/* Main Headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight tracking-tight">
                  I don't just ship projects. I document decisions, trade-offs, and outcomes.
                </h2>
                <p className="text-base md:text-lg text-[#A3A3A3] leading-relaxed">
                  A portfolio built around case studies — not screenshots.
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-[#262626] overflow-hidden flex-shrink-0">
                  <img
                    src="public/pp.jpeg"
                    alt="Firyan Fatih Fadilah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-[#FAFAFA] text-sm">Erland</p>
                  <p className="text-[#A3A3A3] text-xs">Senior Software Engineer</p>
                </div>
              </div>

              {/* Typing Animation */}
              <div className="min-h-[24px] flex items-center">
                <p className="text-base text-[#A3A3A3] leading-relaxed">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="#projects"
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
            <div className="lg:col-span-2 space-y-5">
              <a
                href="#project-1"
                className="block p-4 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-[#FFFFFF] hover:bg-[#202020] transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
                    Case · Lead Engineer
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#A3A3A3] group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">
                  Rebuilding the Payment System
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Reduced payment processing time by 60% and improved reliability to 99.9% uptime
                </p>
              </a>

              <a
                href="#project-2"
                className="block p-4 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-[#FFFFFF] hover:bg-[#202020] transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
                    Case · Full-Stack Engineer
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#A3A3A3] group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">
                  Real-Time Analytics Dashboard
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Built a real-time analytics platform processing 100K+ events per second with sub-second latency
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - removed duplicate section */}

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 ">
        <div className="space-y-6 border-t-2 border-[#262626] pt-12">
          <p className="text-xl text-[#FAFAFA] leading-relaxed">
            I'm <strong>Firyan</strong>, product engineer focused on building systems that move real business metrics.
          </p>
          <p className="text-xl text-[#A3A3A3] leading-relaxed">
            Every major decision is documented—because great engineers don't just build things, they explain why.
          </p>
          <a
            href="#journey"
            className="inline-flex items-center gap-2 text-[#FAFAFA] font-medium hover:underline"
          >
            Read my journey
            <ArrowRight size={18} />
          </a>
        </div>
      </section>


      {/* Recent Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#FAFAFA]">Recent Decisions</h2>
          <a
            href="#all-decisions"
            className="text-[#A3A3A3] hover:text-[#FAFAFA] font-medium hover:underline"
          >
            View all
          </a>
        </div>

        <div className="space-y-8">
          {/* Decision 1 */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-[#A3A3A3] uppercase tracking-wide">
              Jun 2024
            </p>
            <h3 className="text-2xl font-bold text-[#FAFAFA]">
              Transitioning to Remote-First Team Structure
            </h3>
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