import React from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-8 flex flex-col justify-start">

            {/* Badge */}
            {/* <span
              className={`inline-flex items-center self-start text-xs font-semibold px-3 py-1.5 rounded-full border ${isDark
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-emerald-500/30 bg-emerald-50 text-emerald-600"
                }`}
            >
              Portfolio
            </span> */}

            {/* Headline */}
            <div className="space-y-6">
              <h2
                className={`max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                  }`}
              >
                Great work deserves great documentation. I make sure every
                decision is captured.
              </h2>

              <p
                className={`text-xl md:text-lg leading-relaxed ${isDark ? "text-[#A3A3A3]" : "text-gray-600"
                  }`}
              >
                Process and context, not just pretty pictures.
              </p>

              {/* Avatar */}
              <div className="flex items-center">
                <div
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 ${isDark
                    ? "border-[#262626] bg-[#1A1A1A] hover:border-[#404040]"
                    : "border-gray-200 bg-white hover:border-gray-400 shadow-sm"
                    }`}
                >
                  <img
                    src="/public/profile/pepe.jpeg"
                    alt="Fazrin Nugraha"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/30"
                  />

                  <span
                    className={`text-sm font-medium ${isDark ? "text-[#A3A3A3]" : "text-gray-600"
                      }`}
                  >
                    Hi, I'm
                  </span>

                  <span
                    className={`text-sm font-semibold ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                      }`}
                  >
                    Muhamad Fazrin Nugraha
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/projects"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2 font-medium rounded transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 ${isDark
                  ? "bg-white text-[#141414] hover:bg-[#FAFAFA]"
                  : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
              >
                Explore Case Studies
                <ArrowRight size={16} />
              </a>

              <a
                href="/blog"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2 border font-medium rounded transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 ${isDark
                  ? "border-[#262626] text-[#FAFAFA] hover:bg-[#1A1A1A]"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
                  }`}
              >
                Latest Posts
                <ArrowRight size={16} />
              </a>
            </div>

          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-6 m-6">

            {/* Post 1 */}
            <article
              className={`p-8 border rounded-lg transition-all hover:-translate-y-1 ${isDark
                ? "bg-[#1A1A1A] border-[#262626] hover:border-gray-500"
                : "bg-white border-gray-200 hover:border-gray-400 shadow-sm"
                }`}
            >
              <h3
                className={`text-xl font-bold ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                  }`}
              >
                POSTS COMING SOON
              </h3>

              <a
                href="#article-1"
                className={`mt-2 inline-flex items-center gap-2 transition-all hover:gap-3 ${isDark ? "text-[#A3A3A3]" : "text-gray-500"
                  }`}
              >
                Read article
                <ArrowRight size={16} />
              </a>
            </article>


            {/* Post 2 */}
            <article
              className={`p-8 border rounded-lg transition-all hover:-translate-y-1 ${isDark
                ? "bg-[#1A1A1A] border-[#262626] hover:border-gray-500"
                : "bg-white border-gray-200 hover:border-gray-400 shadow-sm"
                }`}
            >
              <h3
                className={`text-xl font-bold ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                  }`}
              >
                POSTS COMING SOON
              </h3>

              <a
                href="#article-2"
                className={`mt-2 inline-flex items-center gap-2 transition-all hover:gap-3 ${isDark ? "text-[#A3A3A3]" : "text-gray-500"
                  }`}
              >
                Read article
                <ArrowRight size={16} />
              </a>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}