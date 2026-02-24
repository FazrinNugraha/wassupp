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
                    className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
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
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-secondary)',
                            }}
                        >
                            <Tag size={12} />
                            Tutorial
                        </span>
                        <div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <Calendar size={12} />
                            Feb 21, 2026
                        </div>
                        <div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <Clock size={12} />
                            5 min read
                        </div>
                    </div>

                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Getting Started with React: A Comprehensive Guide
                    </h1>

                    <p
                        className="text-xl leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        This is a dummy article description. You can replace this content with your actual blog post details later.
                    </p>
                </header>

                {/* Article Content */}
                <article className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h2
                        className="text-2xl font-bold mt-10 mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Understanding the Basics
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div
                        className="my-10 p-6 rounded-lg"
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                        }}
                    >
                        <h3
                            className="text-lg font-bold mb-2"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Pro Tip
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Always keep your components small and focused on a single task. This makes them easier to test and reuse across your application.
                        </p>
                    </div>

                    <h2
                        className="text-2xl font-bold mt-10 mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Advanced Concepts
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                </article>

                {/* Footer / Share */}
                <footer
                    className="mt-16 pt-8"
                    style={{ borderTop: '1px solid var(--border-color)' }}
                >
                    <div className="flex items-center justify-between">
                        <div
                            className="text-sm"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            Written by Muhamad Fazrin Nugraha
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
