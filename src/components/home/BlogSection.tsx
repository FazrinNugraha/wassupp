import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function BlogSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const placeholderPosts = [
        {
            slug: "getting-started-with-react",
            title: "Getting Started with React",
            description:
                "Exploring the fundamentals of React and how to build efficient user interfaces.",
            tag: "Tutorial",
            statusColor: "orange",
        },
        {
            slug: "diving-into-ai",
            title: "Diving into AI & ML",
            description:
                "My journey into learning Artificial Intelligence and Machine Learning from scratch.",
            tag: "Insight",
            statusColor: "blue",
        },
        {
            slug: "building-real-world-projects",
            title: "Building Real-World Projects",
            description:
                "What I learned while building fullstack applications with MERN stack.",
            tag: "Article",
            statusColor: "purple",
        },
    ];

    return (
        <section
            id="blog"
            className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16"
        >
            <div className="space-y-6">
                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {placeholderPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group relative p-6 rounded-lg transition-all duration-300"
                            style={{
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--bg-card)',
                                boxShadow: 'var(--card-shadow)',
                            }}
                        >
                            {/* Tag */}
                            <span
                                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded border mb-4 border-${post.statusColor}-500 text-${post.statusColor}-500`}
                            >
                                {post.tag}
                            </span>

                            {/* Title */}
                            <h3
                                className="text-lg font-bold mb-2"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed mb-4"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {post.description}
                            </p>

                            {/* Read More (active link) */}
                            <a
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                                style={{ color: 'var(--link-blue)' }}
                            >
                                <BookOpen size={14} />
                                Read article
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
