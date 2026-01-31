import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    const [expandAbout, setExpandAbout] = useState(false);

    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-6 border-t-2 border-[#262626] pt-12">
                <p className="text-xl text-[#FAFAFA] leading-relaxed">
                    I'm <strong>Fazrin</strong>, a Junior Fullstack Developer who believes good documentation is just as important as good code.
                </p>
                <p className="text-lg text-[#A3A3A3] leading-relaxed">
                    I document the process behind my projects — it's how I learn and improve.
                </p>
                <a
                    href="/journey"
                    className="hover-text inline-flex items-center gap-2 text-[#FAFAFA] font-medium hover:underline mb-8"
                >
                    Read my journey
                    <ArrowRight size={18} />
                </a>
            </div>

            {/* Bio Section */}
            <div className="space-y-6 border-t-2 border-[#262626] pt-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#FAFAFA]">About</h2>
                    <button
                        onClick={() => setExpandAbout(!expandAbout)}
                        className="text-[#A3A3A3] hover:text-[#FAFAFA] font-medium text-sm transition-colors border-b border-transparent hover:border-[#A3A3A3] pb-1 "
                    >
                        {expandAbout ? "Show Less" : "Full Version"}
                    </button>
                </div>

                {!expandAbout ? (
                    <div className="space-y-6">
                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">
                            I'm Fazrin, a 6th-semester Informatics student transitioning from Full-Stack Development to AI and Machine Learning.
                        </p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">Started coding at RevoU learning HTML, CSS, and JavaScript. Got hooked, so I kept building: picked up MySQL, built a full-stack LMS with MERN, then created GlucoCheck—an AI-powered health assessment tool. That project made me realize I'm way more interested in building intelligent systems than just web apps.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">Competed in my first hackathon and made top 15 out of 200+ teams building SocialCollateral AI, a microfinance platform using graph analytics and AI. I handled the frontend and learned more in 24 hours than weeks of solo coding.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">Now I'm at Coding Camp 2026 (DBS Foundation) on the AI Engineer track, learning machine learning, deep learning, and MLOps—shifting my focus from building interfaces to building AI-powered systems.</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">
                            My Journey into Tech started with a 2-week bootcamp—and I haven't stopped building since.
                        </p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            In early 2024, I joined RevoU's Software Engineering Bootcamp knowing nothing about code. Two weeks of HTML, CSS, JavaScript, and Git gave me just enough to realize I wanted more. So I kept going.
                        </p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            I taught myself MySQL—understanding how data is structured, queried, and managed. From there, I jumped into full-stack development by taking a MERN course and building an LMS (Learning Management System) alongside it. I learned React, Express, MongoDB, JWT authentication, file uploads, even payment gateway integration. I didn't understand everything perfectly, but building while learning made concepts stick faster than tutorials alone.
                        </p>
                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">Then I got curious about AI.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            I built GlucoCheck—a web app where users answer health questions and AI generates personalized diabetes risk assessments in Bahasa Indonesia. It was my first real experience integrating AI into a product: working with APIs, tuning prompts to get useful responses, and designing user flows around AI-powered features. That project taught me something important: AI is powerful, but only when wrapped in the right experience.
                        </p>
                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">That curiosity led to my first hackathon.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            I joined a 24-hour competition with four teammates—most of us first-timers. Out of 200+ teams, we made it to the top 15 with SocialCollateral AI, a platform that helps microfinance lenders assess group trust using graph analytics, NLP, and computer vision. I handled the frontend: building dashboards to visualize borrower networks and displaying AI-generated insights in real-time.
                            We didn't win, but I learned more in that 24 hours than weeks of solo coding: how to ship fast, collaborate under pressure, and integrate complex AI outputs into something users can actually interact with.
                        </p>
                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">That experience changed my direction entirely.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            I realized I'm more excited about building intelligent systems than just web apps. So I applied to Coding Camp 2026 by DBS Foundation and got accepted into the AI Engineer track—a 900+ hour intensive program covering machine learning, deep learning, and MLOps.
                            Right now, I'm learning how to build production-ready AI systems: training models, tuning performance, deploying to cloud infrastructure, and monitoring them in the real world. I'm working toward a capstone project that combines everything I've learned so far.
                        </p>

                        <p className="text-xl font-bold text-justify text-gray-300 leading-relaxed">I document my work because context matters.</p>
                        <p className="text-xl text-justify text-gray-300 leading-relaxed">
                            Every project in my portfolio comes with decisions, trade-offs, and lessons learned—not just polished screenshots. I believe good engineering isn't just about shipping features; it's about leaving a clear record so future teams (or future me) can understand why things were built a certain way.
                            I'm still early in this journey, but I'm committed to building things that matter and documenting the process along the way.
                        </p>

                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                        href="/projects"
                        className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-center"
                    >
                        See My Work
                    </a>
                    <a
                        href="/contact"
                        className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
