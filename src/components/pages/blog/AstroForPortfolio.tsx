import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function AstroForPortfolio() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Blog
        </a>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded"
              style={{
                border: "1px solid #a855f740",
                backgroundColor: "#a855f71a",
                color: "#a855f7",
              }}
            >
              <Tag size={12} />
              Insight
            </span>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar size={12} />
              Feb 22, 2026
            </div>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={12} />8 min read
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Why I use Astro.js for my portfolio
          </h1>

          <p
            className="text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            This is a dummy article description. You can replace this content
            with your actual blog post details later.
          </p>
        </header>

        {/* Article Content */}
        <article
          className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Getting Started with Machine Learning
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <blockquote
            className="my-12 pl-6 md:pl-8 py-2 relative"
          >
            <div 
              className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full"
              style={{ background: "linear-gradient(to bottom, #a855f7, transparent)" }}
            ></div>
            <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-6" style={{ color: "var(--text-primary)" }}>
              "AI and Machine Learning are not as intimidating as they seem.
              Start with the fundamentals and gradually build your knowledge
              from there."
            </p>
            <footer className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a855f7" }}>
              — Key Takeaway
            </footer>
          </blockquote>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Tools and Resources
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
        </article>

        {/* Footer / Share */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              Written by Muhamad Fazrin Nugraha
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
