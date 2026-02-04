import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function JourneyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timeline = [
    {
      date: "September 2024",
      type: "LEARNING",
      typeColor: "border-emerald-500 text-emerald-500",
      dotColor: "bg-emerald-500",
      title: "Bootcamp Revou Fundamental Course",
      description:
        "Joined an intensive software engineering bootcamp for 2 weeks focused on learning the basics of web development. I practiced building responsive and user-friendly websites using HTML, CSS, and JavaScript. The program also introduced Git for version control and modern development workflows, helping me understand how real-world web applications are built from development to deployment.",
      skills: ["HTML", "CSS", "Java Script", "Git", "Responsive Design"],
    },
    {
      date: "DECEMBER 2024",
      type: "LEARNING",
      typeColor: "border-emerald-500 text-emerald-500",
      dotColor: "bg-emerald-500",
      title: "Getting Hands-On with MySQL",
      description:
        "Started learning MySQL—my first time dive into databases. Learned the basics: CRUD operations, how to structure tables, manage relationships, and write queries that actually make sense. Built a few practice projects to get the hang of it.",
      skills: ["MySQL", "Database Management", "CRUD Operations", "Table Structure"],
    },
    {
      date: "JULY 2025",
      type: "MILESTONE",
      typeColor: "border-purple-500 text-purple-500",
      dotColor: "bg-purple-500",
      title: "Building My First Full-Stack Project with MERN Stack",
      description:
        "Jumped into full-stack development by building an LMS (Learning Management System) through a MERN course. Learned React , Express, and MongoDB by actually using them—setting up authentication with JWT, building CRUD features, handling file uploads, even integrating a payment gateway MIDTRANS. Didn't understand everything 100%, but building a real project while learning helped things click faster than just watching tutorials.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      date: "OCTOBER 2025",
      type: "ACHIEVEMENT",
      typeColor: "border-blue-500 text-blue-500",
      dotColor: "bg-blue-500",
      title: "Finalist Hackaton x Amartha 2025",
      description:
        "Made it to top 15 out of 200+ teams in my first hackathon. Built SocialCollateral AI with a team of 5 as the frontend developer—a system that helps microfinance lenders assess group trust using AI. We integrated graph analytics to visualize borrower networks, NLP to analyze field reports, and computer vision for asset valuation. All built in 24 hours with React, TypeScript, Tailwind CSS, Chart.js for visualizations, and integrated with FastAPI backend powered by Google Gemini and Google Cloud Vision. Learned how to work under pressure, ship fast, and collaborate with backend, AI, and design teammates.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "FastAPI",
        "Google Gemini",
        "Google Cloud Vision",
      ],
    },
    {
      date: "DECEMBER 2025",
      type: "MILESTONE",
      typeColor: "border-purple-500 text-purple-500",
      dotColor: "bg-purple-500",
      title: "Building My First AI-Powered Web App",
      description:
        "Built GlucoCheck to learn how to integrate AI into web applications. Created a diabetes risk assessment tool where users fill out a health questionnaire, and the AI analyzes their responses to generate personalized risk assessments in Bahasa Indonesia. Learned how to work with AI APIs, prompt engineering to get clear and helpful responses, and present complex AI outputs in a user-friendly way. First real experience wrapping AI capabilities into an actual product.",
      skills: ["AI", "React", "Tailwind CSS"],
    },
    {
      date: "FEBRUARY 2026",
      type: "ACHIEVEMENT",
      typeColor: "border-blue-500 text-blue-500",
      dotColor: "bg-blue-500",
      title: "AI Engineer Path: DBS Foundation Coding Camp 2026",
      description:
        "Accepted into Coding Camp 2026 by DBS Foundation on the AI Engineer track. A 4-5 month intensive bootcamp covering machine learning, deep learning, and MLOps. Currently learning to build and deploy production-ready AI systems through hands-on projects and working on a capstone.",
      skills: ["Machine Learning", "Deep Learning", "MLOps", "AI Engineering"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Journey
        </h2>
        <p className={`mb-16 max-w-3xl mx-auto text-center text-lg ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
          A timeline of my professional growth and learning progression. This
          isn't a resume—it's a story of how I've evolved as an engineer, the
          pivotal moments that shaped my thinking, and the skills I've developed
          along the way.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-[7px] top-0 bottom-0 w-0.5 ${isDark ? 'bg-[#262626]' : 'bg-gray-200'}`}></div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.date} className="relative pl-8 group">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-3 w-4 h-4 ${item.dotColor} rounded-full transition-transform group-hover:scale-125`}
                ></div>

                {/* Card Content */}
                <div className={`border rounded-lg p-6 transition-all duration-300 ${isDark
                  ? 'border-[#262626] bg-[#1A1A1A] hover:border-[#404040]'
                  : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                  }`}>
                  {/* Date and Type Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-[#A3A3A3]' : 'text-gray-500'}`}>
                      {item.date}
                    </span>
                    <span
                      className={`text-xs font-semibold border px-2.5 py-1 rounded ${item.typeColor}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${isDark
                    ? 'text-white group-hover:text-blue-300'
                    : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className={`text-justify mb-4 leading-relaxed text-sm md:text-base ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${isDark ? 'text-[#A3A3A3]' : 'text-gray-500'}`}>
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs px-3 py-1.5 border rounded transition-all ${isDark
                            ? 'bg-[#1A1A1A] border-[#262626] text-white hover:border-blue-500 hover:text-blue-300'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    Read more
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
