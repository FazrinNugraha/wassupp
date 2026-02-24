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
                {/* Section Header */}
                {/* <div className="flex items-center justify-between mb-8">
                    <h2
                        className={`text-2xl font-bold ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                            }`}
                    >
                        Blog
                    </h2>
                </div> */}

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {placeholderPosts.map((post, index) => (
                        <article
                            key={index}
                            className={`group relative p-6 border rounded-lg transition-all duration-300 ${isDark
                                ? "border-[#262626] bg-[#1A1A1A] hover:border-[#404040]"
                                : "border-gray-200 bg-white hover:border-gray-400 shadow-sm"
                                }`}
                        >
                            {/* Tag */}
                            <span
                                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded border mb-4 ${isDark
                                    ? `border-${post.statusColor}-500 text-${post.statusColor}-500`
                                    : `border-${post.statusColor}-500 text-${post.statusColor}-500`
                                    }`}
                            >
                                {post.tag}
                            </span>

                            {/* Title */}
                            <h3
                                className={`text-lg font-bold mb-2 ${isDark ? "text-[#FAFAFA]" : "text-gray-900"
                                    }`}
                            >
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`text-sm leading-relaxed mb-4 ${isDark ? "text-[#A3A3A3]" : "text-gray-600"
                                    }`}
                            >
                                {post.description}
                            </p>

                            {/* Read More (active link) */}
                            <a
                                href={`/blog/${post.slug}`}
                                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isDark
                                    ? "text-blue-400 hover:text-blue-300"
                                    : "text-blue-600 hover:text-blue-700"
                                    }`}
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
