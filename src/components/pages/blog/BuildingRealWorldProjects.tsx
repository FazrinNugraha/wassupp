import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BuildingRealWorldProjects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
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
                border: "1px solid #10b98140",
                backgroundColor: "#10b9811a",
                color: "#10b981",
              }}
            >
              <Tag size={12} />
              Article
            </span>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar size={12} />
              Feb 23, 2026
            </div>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={12} />7 min read
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Building Real-World Projects: Architecting a Learning Management System with the MERN Stack
          </h1>

          <p
            className="text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Building a production-ready Learning Management System (LMS) goes beyond following basic tutorials.
          </p>
        </header>

        {/* Article Content */}
        <article
          className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`}
        >
          <p className="text-lg leading-relaxed mt-8 first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-[#10b981]" style={{ color: "var(--text-secondary)" }}>
            This post breaks down the backend architecture of my MERN stack LMS, focusing on real-world challenges like secure authentication, robust data validation, and seamless media handling.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            The MERN Stack Explained
          </h2>
          <p style={{ color: "var(--text-secondary)" }} className="mb-6">
            Choosing the right tools is about solving specific business logic. Here is how I structured the backend architecture:
          </p>
          <ul className="space-y-4 mb-8" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>MongoDB & Mongoose:</strong> Designed scalable schemas to efficiently manage complex relationships between Users, Courses, Categories, and Transactions.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Express.js & Node.js:</strong> Built a clean, modular MVC (Model-View-Controller) architecture to power high-performance RESTful APIs and handle student enrollments.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>React:</strong> Powers the frontend SPA, ensuring zero-reload transitions when a student navigates between course catalogs and learning materials.
              </p>
            </li>
          </ul>

          <div
            className="my-10 p-8 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div 
              className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
              style={{ backgroundColor: "#10b981" }}
            ></div>
            <h3
              className="text-xs font-bold mb-6 uppercase tracking-widest relative z-10"
              style={{ color: "#10b981" }}
            >
              Lessons Learned
            </h3>
            <p className="text-md leading-relaxed mb-4 relative z-10" style={{ color: "var(--text-primary)" }}>
              Building this backend from scratch taught me crucial lessons about data integrity and system security:
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
                 <p className="text-md leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Data Validation is Non-Negotiable:</strong> I integrated Zod to strictly validate all incoming API payloads (e.g., user registrations, course creations) before they ever interact with the database.
                 </p>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
                 <p className="text-md leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Handling Media Efficiently:</strong> Managing file uploads requires care. I utilized Multer to securely process and store image assets like course thumbnails and student avatars.
                 </p>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
                 <p className="text-md leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Middleware Abstraction is Key:</strong> To keep my controllers clean and readable, I isolated repetitive logic—such as JWT verification and Zod schema validation—into dedicated reusable Express middlewares.
                 </p>
              </li>
            </ul>
          </div>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Best Practices and Tips
          </h2>
          <p style={{ color: "var(--text-secondary)" }} className="mb-6">
            Based on my experience architecting this platform, here are the core principles I apply to ensure a secure and scalable backend:
          </p>
          <ul className="space-y-4 mb-8" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Robust JWT Authentication:</strong> Never trust client-side states. Secure your endpoints using JSON Web Tokens (JWT) to authenticate users and restrict access to premium course details.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Organized Folder Structure:</strong> Separation of concerns matters. Dividing the codebase into routes, controllers, models, and utils drastically improves maintainability as the application grows.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Secure Transaction Tracking:</strong> When dealing with payments and enrollments, always implement a dedicated transaction flow (using dedicated controllers and models) to reliably track student access rights.
              </p>
            </li>
          </ul>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Future Improvements: Scaling for Performance
          </h2>
          <p style={{ color: "var(--text-secondary)" }} className="mb-6">
            While the current architecture handles functional requirements perfectly, there is always room to optimize for speed. My next goals for improving the web's performance include:
          </p>
          <ul className="space-y-4 mb-8" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Real-time Interactive Features:</strong>  I plan to integrate Socket.io to enable real-time communication between students and instructors. This will power instant notifications for course updates and create interactive learning dashboards that reflect student progress the moment it happens, without needing a page refresh..
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10b981" }}></div>
              <p className="text-md leading-relaxed">
                <strong style={{ color: "var(--text-primary)" }}>Video Transcription & Summary:</strong> AI-powered transcription and summarization will be embedded directly into the course video experience. Every lecture uploaded by instructors gets automatically converted into readable transcripts and concise key point summaries, making it easier for students to review materials, search for specific topics, and learn at their own pace — all without any additional effort from the instructor.
              </p>
            </li>
          </ul>
        </article>

        {/* Footer / Share */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              Written by Muhamad Fazrin Nugraha
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
