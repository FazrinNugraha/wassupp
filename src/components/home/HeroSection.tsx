import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="max-w-7xl mx-auto px-5 py-16 pt-32 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8 flex flex-col justify-start">
                        {/* Main Headline */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight tracking-tight">
                                Great work deserves great documentation. I make sure every decision is captured.
                            </h2>
                            <p className="text-xl md:text-lg text-[#A3A3A3] leading-relaxed">
                                Process and context, not just pretty pictures.
                            </p>
                            <p className="text-base text-[#A3A3A3] leading-relaxed">
                                Muhamad Fazrin Nugraha · Junior Fullstack Developer
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#FFFFFF] text-[#141414] font-medium rounded hover:bg-[#FAFAFA] transition-colors text-sm"
                            >
                                Explore Case Studies
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#decisions"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-[#262626] text-[#FAFAFA] font-medium rounded hover:bg-[#1A1A1A] transition-colors text-sm"
                            >
                                Recent Activities
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Latest Articles */}
                    <div className="space-y-4">
                        {/* Coming Soon Badge */}
                        <div className="flex items-center gap-2">
                        </div>

                        {/* Article Card 1 */}
                        <article className="p-6 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-gray-500 transition-all group">
                            <div className="space-y-3">
                                {/* Category & Meta */}
                                <div className="flex items-center gap-2 text-sm">
                                    {/* <span className="text-md text-[#3B82F6] uppercase tracking-wide">
                                        ENGINEERING
                                    </span> */}
                                    {/* <span className="text-[#A3A3A3]">•</span>
                                    <span className="text-[#A3A3A3]">Jan 15, 2026</span>
                                    <span className="text-[#A3A3A3]">•</span>
                                    <span className="text-[#A3A3A3]">5 min read</span> */}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#FAFAFA] leading-tight">
                                    ARTICLES COMING SOON
                                </h3>

                                {/* Description */}
                                {/* <p className="text-sm text-justify text-[#A3A3A3] leading-relaxed">
                                    Exploring best practices and architectural patterns for creating maintainable microservices that can handle millions of requests.
                                </p> */}

                                {/* Read More Link */}
                                <a
                                    href="#article-1"
                                    className="inline-flex items-center gap-2 text-[#3B82F6]  hover:gap-3 transition-all"
                                >
                                    Read article
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>

                        {/* Article Card 2 */}
                        <article className="p-6 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-gray-500 transition-all group">
                            <div className="space-y-3">
                                {/* Category & Meta */}
                                <div className="flex items-center gap-2 text-sm">
                                    {/* <span className="text-md text-[#3B82F6] uppercase tracking-wide">
                                        DESIGN
                                    </span> */}
                                    {/* <span className="text-[#A3A3A3]">•</span>
                                    <span className="text-[#A3A3A3]">Jan 12, 2026</span>
                                    <span className="text-[#A3A3A3]">•</span>
                                    <span className="text-[#A3A3A3]">7 min read</span> */}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#FAFAFA] leading-tight">
                                    ARTICLES COMING SOON
                                </h3>

                                {/* Description */}
                                {/* <p className="text-sm  text-justify text-[#A3A3A3] leading-relaxed">
                                    Understanding how cognitive psychology principles influence user interface design and improve user experience.
                                </p>

                                {/* Read More Link */}
                                <a
                                    href="#article-2"
                                    className="inline-flex items-center gap-2 text-[#3B82F6]  hover:gap-3 transition-all"
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
