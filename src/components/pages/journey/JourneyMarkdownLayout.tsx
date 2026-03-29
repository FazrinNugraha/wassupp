import React, { useEffect, useRef } from "react";
import { useTheme } from "../../../context/ThemeContext";

interface JourneyMarkdownLayoutProps {
  frontmatter: {
    title: string;
    description?: string;
    date: string;
    type: string;
    accentColor: string;
    skills: string[];
  };
  children: React.ReactNode;
}

export default function JourneyMarkdownLayout({
  frontmatter,
  children,
}: JourneyMarkdownLayoutProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const contentRef = useRef<HTMLDivElement>(null);
  const accentColor = frontmatter.accentColor || "#3B82F6";

  useEffect(() => {
    if (!contentRef.current) return;

    const article = contentRef.current;

    // Style h2 headings with accent border
    const headings = article.querySelectorAll("h2");
    headings.forEach((h2) => {
      h2.style.fontSize = "1.5rem";
      h2.style.fontWeight = "700";
      h2.style.marginBottom = "1.25rem";
      h2.style.paddingLeft = "1rem";
      h2.style.borderLeft = `3px solid ${accentColor}`;
      h2.style.color = "var(--text-primary)";
    });

    // Style paragraphs
    const paragraphs = article.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.style.fontSize = "clamp(1rem, 2vw, 1.125rem)";
      p.style.lineHeight = "1.75";
      p.style.textAlign = "justify";
      p.style.color = "var(--text-secondary)";
      p.style.marginBottom = "0";
    });

    // Style hr elements as gradient separators
    const hrs = article.querySelectorAll("hr");
    hrs.forEach((hr) => {
      hr.style.border = "none";
      hr.style.height = "1px";
      hr.style.background = `linear-gradient(to right, ${accentColor}40, transparent)`;
      hr.style.marginTop = "3rem";
      hr.style.marginBottom = "3rem";
    });

    // Style list items with accent markers
    const listItems = article.querySelectorAll("li");
    listItems.forEach((li) => {
      li.style.display = "flex";
      li.style.alignItems = "flex-start";
      li.style.gap = "0.75rem";
      li.style.fontSize = "clamp(1rem, 2vw, 1.125rem)";
      li.style.lineHeight = "1.75";
      li.style.color = "var(--text-secondary)";
      li.style.listStyle = "none";

      // Style strong elements inside li
      const strong = li.querySelector("strong");
      if (strong) {
        strong.style.color = "var(--text-primary)";
      }
    });

    // Style ul elements
    const uls = article.querySelectorAll("ul");
    uls.forEach((ul) => {
      ul.style.listStyle = "none";
      ul.style.padding = "0";
      ul.style.margin = "0";
      ul.style.display = "flex";
      ul.style.flexDirection = "column";
      ul.style.gap = "1rem";

      // Add accent markers to li children
      const items = ul.querySelectorAll(":scope > li");
      items.forEach((li) => {
        // Check if the li already has a marker span
        if (!li.querySelector(".journey-marker")) {
          const marker = document.createElement("span");
          marker.className = "journey-marker";
          marker.style.color = accentColor;
          marker.style.marginTop = "0.375rem";
          marker.style.fontSize = "1.125rem";
          marker.style.flexShrink = "0";
          marker.textContent = "›";
          li.insertBefore(marker, li.firstChild);

          // Wrap the remaining content in a span
          const content = document.createElement("span");
          while (li.childNodes.length > 1) {
            content.appendChild(li.childNodes[1]);
          }
          li.appendChild(content);
        }
      });
    });

    // Handle skill tags from data attributes
    const skillContainers = article.querySelectorAll(".journey-skills");
    skillContainers.forEach((container) => {
      const skillsData = container.getAttribute("data-skills");
      if (!skillsData) return;

      const skills = skillsData.split(",").map((s) => s.trim());
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexWrap = "wrap";
      wrapper.style.gap = "0.5rem";

      skills.forEach((skill) => {
        const tag = document.createElement("span");
        tag.textContent = skill;
        tag.style.fontSize = "0.875rem";
        tag.style.padding = "0.5rem 1rem";
        tag.style.borderRadius = "9999px";
        tag.style.transition = "all 0.3s ease";
        tag.style.cursor = "default";
        tag.style.border = `1px solid ${accentColor}50`;
        tag.style.color = accentColor;
        tag.style.backgroundColor = `${accentColor}10`;

        tag.addEventListener("mouseenter", () => {
          tag.style.backgroundColor = accentColor;
          tag.style.color = "white";
          tag.style.borderColor = accentColor;
        });

        tag.addEventListener("mouseleave", () => {
          tag.style.backgroundColor = `${accentColor}10`;
          tag.style.color = accentColor;
          tag.style.borderColor = `${accentColor}50`;
        });

        wrapper.appendChild(tag);
      });

      container.replaceWith(wrapper);
    });
  }, [accentColor, children]);

  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Back Button */}
        <a
          href="/journey"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
        >
          <span>←</span> Back to Journey
        </a>

        {/* Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              {frontmatter.date}
            </span>
            <span
              className="text-xs font-semibold border px-2.5 py-1 rounded"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {frontmatter.type}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {frontmatter.description}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article ref={contentRef}>
          {children}
        </article>

        {/* Footer */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: `1px solid var(--border-color)` }}
        >
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            Part of my development journey
          </div>
        </footer>
      </section>
    </div>
  );
}
