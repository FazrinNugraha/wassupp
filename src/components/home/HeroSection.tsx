import React from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8 flex flex-col justify-start">
            {/* Main Headline */}
            <div className="space-y-6">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}>
                Great work deserves great documentation. I make sure every
                decision is captured.
              </h2>
              <p className={`text-xl md:text-lg leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                Process and context, not just pretty pictures.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                Hi, I'm Muhamad Fazrin Nugraha 👋
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/projects"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2 font-medium rounded transition-all duration-200 ease-out text-sm
                hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 ${isDark
                    ? 'bg-[#FFFFFF] text-[#141414] hover:bg-[#FAFAFA]'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
              >
                Explore Case Studies
                <ArrowRight size={16} />
              </a>
              <a
                href=""
                className={`inline-flex items-center justify-center gap-2 px-5 py-2 border font-medium rounded transition-all duration-200 ease-out text-sm
                hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 ${isDark
                    ? 'border-[#262626] text-[#FAFAFA] hover:bg-[#1A1A1A]'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                  }`}
              >
                Latest Posts
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column - Latest Articles */}
          <div className="space-y-4">
            {/* Coming Soon Badge */}
            <div className="flex items-center gap-2"></div>

            {/* Article Card 1 */}
            <article className={`p-6 border rounded-lg transition-all group ${isDark
                ? 'bg-[#1A1A1A] border-[#262626] hover:border-gray-500'
                : 'bg-white border-gray-200 hover:border-gray-400 shadow-sm'
              }`}>
              <div className="space-y-3">
                {/* Category & Meta */}
                <div className="flex items-center gap-2 text-sm"></div>

                {/* Title */}
                <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}>
                  POSTS COMING SOON
                </h3>

                {/* Read More Link */}
                <a
                  href="#article-1"
                  className={`inline-flex items-center gap-2 hover:gap-3 transition-all ${isDark ? 'text-[#A3A3A3]' : 'text-gray-500'}`}
                >
                  Read article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>

            {/* Article Card 2 */}
            <article className={`p-6 border rounded-lg transition-all group ${isDark
                ? 'bg-[#1A1A1A] border-[#262626] hover:border-gray-500'
                : 'bg-white border-gray-200 hover:border-gray-400 shadow-sm'
              }`}>
              <div className="space-y-3">
                {/* Category & Meta */}
                <div className="flex items-center gap-2 text-sm"></div>

                {/* Title */}
                <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-[#FAFAFA]' : 'text-gray-900'}`}>
                  POSTS COMING SOON
                </h3>

                {/* Read More Link */}
                <a
                  href="#article-2"
                  className={`inline-flex items-center gap-2 hover:gap-3 transition-all ${isDark ? 'text-[#A3A3A3]' : 'text-gray-500'}`}
                >
                  Read article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

