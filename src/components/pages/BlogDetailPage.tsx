import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BlogDetailPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Back Link */}
                <a
                    href="/blog"
                    className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${isDark ? "text-[#A3A3A3] hover:text-white" : "text-gray-500 hover:text-gray-900"
                        }`}
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </a>

                {/* Article Header */}
                <header className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded border ${isDark ? "border-[#262626] text-[#A3A3A3]" : "border-gray-200 text-gray-500"
                            }`}>
                            <Tag size={12} />
                            Tutorial
                        </span>
                        <div className={`flex items-center gap-1.5 text-xs ${isDark ? "text-[#555]" : "text-gray-400"}`}>
                            <Calendar size={12} />
                            Feb 21, 2026
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs ${isDark ? "text-[#555]" : "text-gray-400"}`}>
                            <Clock size={12} />
                            5 min read
                        </div>
                    </div>

                    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Getting Started with React: A Comprehensive Guide
                    </h1>

                    <p className={`text-xl leading-relaxed ${isDark ? "text-[#A3A3A3]" : "text-gray-600"}`}>
                        This is a dummy article description. You can replace this content with your actual blog post details later.
                    </p>
                </header>

                {/* Article Content */}
                <article className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`}>
                    <p className={isDark ? "text-[#A3A3A3]" : "text-gray-600"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h2 className={`text-2xl font-bold mt-10 mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Understanding the Basics
                    </h2>
                    <p className={isDark ? "text-[#A3A3A3]" : "text-gray-600"}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className={`my-10 p-6 rounded-lg border ${isDark ? "bg-[#1A1A1A] border-[#262626]" : "bg-gray-50 border-gray-200"
                        }`}>
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            Pro Tip
                        </h3>
                        <p className={`text-sm ${isDark ? "text-[#A3A3A3]" : "text-gray-600"}`}>
                            Always keep your components small and focused on a single task. This makes them easier to test and reuse across your application.
                        </p>
                    </div>

                    <h2 className={`text-2xl font-bold mt-10 mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Advanced Concepts
                    </h2>
                    <p className={isDark ? "text-[#A3A3A3]" : "text-gray-600"}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                </article>

                {/* Footer / Share */}
                <footer className={`mt-16 pt-8 border-t ${isDark ? "border-[#262626]" : "border-gray-100"}`}>
                    <div className="flex items-center justify-between">
                        <div className={`text-sm ${isDark ? "text-[#555]" : "text-gray-400"}`}>
                            Written by Muhamad Fazrin Nugraha
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
