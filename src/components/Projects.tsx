import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    phase: 'PHASE 1: JAN 2026',
    phaseColor: 'text-blue-500',
    title: 'Rebuilding the Payment System',
    role: 'LEAD ENGINEER · 2026',
    status: 'FEATURED',
    statusColor: 'bg-blue-500',
    description:
      'Reduced payment processing time by 60% and improved reliability to 99.9% uptime',
    problem: 'Kami memulai dengan sistem payment yang lambat dan sering gagal. Timeout terjadi pada 15% transaksi, menyebabkan customer frustration dan revenue loss.',
    solution: 'Redesign arsitektur dengan event-driven pattern, implement circuit breaker, dan optimasi database queries. Hasilnya? Processing time turun 60% dan uptime naik ke 99.9%.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    thumbnail: '', // Paste image URL here
    link: '#project-1',
    side: 'left'
  },
  {
    id: 2,
    phase: 'PHASE 2: NOV 2025',
    phaseColor: 'text-emerald-500',
    title: 'Real-Time Analytics Dashboard',
    role: 'FULL-STACK ENGINEER · 2025',
    status: 'ONGOING',
    statusColor: 'bg-emerald-500',
    description:
      'Built a real-time analytics platform processing 100K+ events per second with sub-second latency',
    problem: 'Business team membutuhkan insight real-time untuk decision making, tapi existing dashboard hanya update setiap 15 menit dan tidak scalable.',
    solution: 'Build event streaming pipeline dengan Kafka dan WebSocket untuk real-time updates. Implement ClickHouse untuk fast analytical queries. Dashboard sekarang update sub-second dengan 100K+ events/sec.',
    tech: ['React', 'WebSocket', 'ClickHouse', 'Kafka'],
    thumbnail: '', // Paste image URL here
    link: '#project-2',
    side: 'right'
  },
  {
    id: 3,
    phase: 'PHASE 3: AUG 2025',
    phaseColor: 'text-orange-500',
    title: 'Microservices Migration',
    role: 'SENIOR ENGINEER · 2025',
    status: 'COMPLETED',
    statusColor: 'bg-gray-500',
    description:
      'Led migration from monolith to microservices architecture, reducing deployment time by 75%',
    problem: 'Monolithic architecture membuat deployment lambat (2 jam per release) dan team dependencies tinggi. Satu bug bisa down seluruh sistem.',
    solution: 'Gradual migration ke microservices dengan strangler pattern. Implement service mesh untuk observability. Deployment time turun ke 30 menit, zero-downtime deployments achieved.',
    tech: ['Docker', 'Kubernetes', 'GraphQL', 'Go'],
    thumbnail: '', // Paste image URL here
    link: '#project-3',
    side: 'left'
  },
  {
    id: 4,
    phase: 'PHASE 4: MAY 2024',
    phaseColor: 'text-orange-500',
    title: 'API Gateway Redesign',
    role: 'BACKEND ENGINEER · 2024',
    status: 'COMPLETED',
    statusColor: 'bg-gray-500',
    description:
      'Redesigned API gateway to handle 10M+ requests daily with improved caching and rate limiting',
    problem: 'API gateway menjadi bottleneck dengan response time >500ms pada peak hours. Rate limiting tidak efektif dan caching strategy buruk.',
    solution: 'Redesign dengan Redis cluster untuk distributed caching, implement token bucket algorithm untuk rate limiting, dan optimize routing logic. Response time turun ke <100ms.',
    tech: ['Node.js', 'Redis', 'AWS', 'Nginx'],
    thumbnail: '', // Paste image URL here
    link: '#project-4',
    side: 'right'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <section className="max-w-6xl mx-auto py-24 px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-[#A3A3A3] mb-6 max-w-4xl mx-auto leading-relaxed">
            Case studies that demonstrate how I approach complex problems, make technical
            decisions, and deliver measurable impact. Each project tells the story of the challenge,
            the constraints, the decisions made, and the outcomes achieved.
          </p>
          <p className="text-sm text-[#737373]">
            {projects.length} projects · {projects.filter(p => p.status === 'FEATURED').length} featured
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Content */}
                <div className={`md:grid md:grid-cols-2 md:gap-12 md:items-start relative`}>
                  {/* Center Dot - positioned between two columns */}
                  <div className={`hidden md:block absolute left-1/2 top-0 w-4 h-4 ${project.statusColor} rounded-full -translate-x-1/2 z-10 border-4 border-[#141414]`}></div>
                  
                  {/* Vertical Line from dot */}
                  {index < projects.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-4 w-0.5 h-[calc(100%+96px)] bg-[#262626] -translate-x-1/2"></div>
                  )}

                  {/* Thumbnail - left side for left projects, right side for right projects */}
                  <div className={`mb-6 md:mb-0 ${project.side === 'left' ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="h-[500px] bg-[#1A1A1A] border border-[#262626] rounded-lg overflow-hidden hover:border-[#404040] transition-colors">
                      {project.thumbnail ? (
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 bg-[#262626] rounded-full flex items-center justify-center">
                              <span className="text-4xl">📊</span>
                            </div>
                            <p className="text-sm text-[#737373] font-medium">Project Screenshot</p>
                            <p className="text-xs text-[#525252] mt-1">Coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Card */}
                  <a
                    href={project.link}
                    className={`block p-6 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-white hover:bg-[#202020] transition-all group ${project.side === 'left' ? 'md:order-1' : 'md:order-2'}`}
                  >
                    {/* Phase Label */}
                    <div className="mb-4">
                      <span className={`text-xs font-bold ${project.phaseColor} uppercase tracking-wider`}>
                        {project.phase}
                      </span>
                    </div>
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-4">
                      {project.status === 'FEATURED' && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 border border-blue-500 px-2.5 py-1 rounded">
                          ★ FEATURED
                        </span>
                      )}
                      {project.status === 'ONGOING' && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 border border-emerald-500 px-2.5 py-1 rounded">
                          ONGOING
                        </span>
                      )}
                      {project.status === 'COMPLETED' && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 border border-orange-500 px-2.5 py-1 rounded">
                          COMPLETED
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <p className="text-xs font-medium text-[#737373] uppercase tracking-wider mb-3">
                      {project.role}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E5E5E5] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#A3A3A3] mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem */}
                    <div className="mb-4 p-4 bg-[#141414] border-l-2 border-red-500 rounded">
                      <p className="text-sm font-semibold text-red-400 mb-2">Problem:</p>
                      <p className="text-sm text-[#A3A3A3] leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-5 p-4 bg-[#141414] border-l-2 border-emerald-500 rounded">
                      <p className="text-sm font-semibold text-emerald-400 mb-2">Solution:</p>
                      <p className="text-sm text-[#A3A3A3] leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 bg-[#141414] border border-[#262626] text-[#A3A3A3] rounded hover:border-[#404040] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Link */}
                    <div className="flex items-center gap-2 text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors">
                      Source Code
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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