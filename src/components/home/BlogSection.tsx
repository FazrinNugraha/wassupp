import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function BlogSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const placeholderPosts = [
    {
      slug: "integration-payment-gateway-midtrans",
      title: "Integration Payment Gateway Midtrans",
      description:
        "Integrating Midtrans payment gateway into a web application.",
      tag: "Tutorial",
      tagColor: "#3b82f6",
      tagBg: "#3b82f61a",
      tagBorder: "#3b82f640",
      date: "28/3/2026",
    },
    {
      slug: "why-astro-for-portfolio",
      title: "Why I Chose Astro.js for My Portfolio",
      description:
        "Why I use Astro.js for my portfolio.",
      tag: "Insight",
      tagColor: "#a855f7",
      tagBg: "#a855f71a",
      tagBorder: "#a855f740",
      date: "8/10/2026",
    },
    {
      slug: "building-real-world-projects",
      title: "Building Real-World Projects",
      description:
        "What I learned while building fullstack applications with MERN stack.",
      tag: "Article",
      tagColor: "#10b981",
      tagBg: "#10b9811a",
      tagBorder: "#10b98140",
      date: "23/1/2026",
    },
  ];

  return (
    <section
      id="blog"
      className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16"
    >
      <div className="space-y-6">
        {/* Blog Articles List */}
        {placeholderPosts.map((post, index) => (
          <a
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 px-4 -mx-4 transition-all duration-300 cursor-pointer hover:pl-2"
            style={{ borderBottom: "2px solid var(--border-color)" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex-1 min-w-0">
              {/* Tag */}
              <span
                className="inline-block text-sm font-semibold px-2.5 py-1 rounded mb-3"
                style={{
                  color: post.tagColor,
                  border: `1px solid ${post.tagBorder}`,
                }}
              >
                {post.tag}
              </span>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold mb-2 transition-all"
                style={{
                  color:
                    hoveredIndex === index
                      ? isDark
                        ? "white"
                        : "#000"
                      : "var(--text-primary)",
                }}
              >
                {post.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4 transition-all"
                style={{
                  color:
                    hoveredIndex === index
                      ? isDark
                        ? "white"
                        : "#000"
                      : "var(--text-secondary)",
                }}
              >
                {post.description}
              </p>
            </div>

            {/* Date - Stay on the right on larger screens */}
            <div className="sm:flex-shrink-0 sm:text-right">
              <div
                className="text-base flex items-center gap-2 sm:justify-end transition-all group-hover:font-bold"
                style={{
                  color:
                    hoveredIndex === index
                      ? isDark
                        ? "white"
                        : "#000"
                      : "var(--text-muted)",
                }}
              >
                {post.date}
                <ArrowUpRight size={14} className="flex-shrink-0" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
