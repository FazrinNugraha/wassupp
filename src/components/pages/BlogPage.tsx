import React from "react";
import BlogSection from "../home/BlogSection";
import { useTheme } from "../../context/ThemeContext";

export default function BlogPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Blog
                </h2>
                <p className={`mb-16 max-w-3xl mx-auto text-center text-lg ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                    Thoughts on software development, AI, and lessons from building real-world projects.
                </p>
            </div>
            <BlogSection />
        </div>
    );
}
