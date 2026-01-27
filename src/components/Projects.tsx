import React, { useState, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    thumbnails: ['test.jpg'], // Add multiple images here
    link: '#project-1',
    side: 'right'
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
    thumbnails: [], // Add multiple images here
    link: '#project-2',
    side: 'left'
  },
  {
    id: 3,
    phase: 'PHASE 3: AUG 2025',
    phaseColor: 'text-orange-500',
    title: 'Microservices Migration',
    role: 'SENIOR ENGINEER · 2025',
    status: 'COMPLETED',
    statusColor: 'bg-orange-500',
    description:
      'Led migration from monolith to microservices architecture, reducing deployment time by 75%',
    problem: 'Monolithic architecture membuat deployment lambat (2 jam per release) dan team dependencies tinggi. Satu bug bisa down seluruh sistem.',
    solution: 'Gradual migration ke microservices dengan strangler pattern. Implement service mesh untuk observability. Deployment time turun ke 30 menit, zero-downtime deployments achieved.',
    tech: ['Docker', 'Kubernetes', 'GraphQL', 'Go'],
    thumbnails: [], // Add multiple images here
    link: '#project-3',
    side: 'right'
  },
  {
    id: 4,
    phase: 'PHASE 4: MAY 2024',
    phaseColor: 'text-orange-500',
    title: 'API Gateway Redesign',
    role: 'BACKEND ENGINEER · 2024',
    status: 'COMPLETED',
    statusColor: 'bg-orange-500',
    description:
      'Redesigned API gateway to handle 10M+ requests daily with improved caching and rate limiting',
    problem: 'API gateway menjadi bottleneck dengan response time >500ms pada peak hours. Rate limiting tidak efektif dan caching strategy buruk.',
    solution: 'Redesign dengan Redis cluster untuk distributed caching, implement token bucket algorithm untuk rate limiting, dan optimize routing logic. Response time turun ke <100ms.',
    tech: ['Node.js', 'Redis', 'AWS', 'Nginx'],
    thumbnails: [], // Add multiple images here
    link: '#project-4',
    side: 'left'
  }
];

// Photo carousel component untuk setiap project
const PhotoCarousel = ({ thumbnails }: { thumbnails: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!thumbnails || thumbnails.length === 0) {
    return (
      <div className="h-[320px] bg-[#1A1A1A] border border-[#262626] rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-[#262626] rounded-full flex items-center justify-center">
            <span className="text-4xl">📸</span>
          </div>
          <p className="text-sm text-[#737373] font-medium">Project Screenshot</p>
          <p className="text-xs text-[#525252] mt-1">Coming soon</p>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div 
        className="relative h-[320px] bg-[#1A1A1A] border border-[#262626] rounded-lg overflow-hidden cursor-pointer hover:border-white transition-colors"
        onClick={() => setIsFullscreen(true)}
      >
        <img
          src={thumbnails[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        {thumbnails.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {thumbnails.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-medium z-20">
              {currentIndex + 1} / {thumbnails.length}
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close fullscreen"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Fullscreen Image */}
            <img
              src={thumbnails[currentIndex]}
              alt={`Project screenshot ${currentIndex + 1}`}
              className="max-w-95vw max-h-95vh object-contain"
            />

            {/* Navigation Buttons - Fullscreen */}
            {thumbnails.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                {/* Dots Indicator - Fullscreen */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {thumbnails.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Counter - Fullscreen */}
                <div className="absolute bottom-6 right-6 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium">
                  {currentIndex + 1} / {thumbnails.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

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
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#262626] -translate-x-1/2"></div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute left-1/2 top-16 w-4 h-4 ${project.statusColor} rounded-full -translate-x-1/2 z-10 border-4 border-[#141414]`}></div>
                
                {/* Content - Compact Layout */}
                <div className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center max-w-4xl mx-auto`}>
                  {/* Thumbnail - Compact Size */}
                  <div className={`${project.side === 'left' ? 'md:order-1' : 'md:order-2'}`}>
                    <PhotoCarousel thumbnails={project.thumbnails} />
                  </div>

                  {/* Project Card - Compact */}
                  <a
                    href={project.link}
                    className={`block p-7 bg-[#1A1A1A] border border-[#262626] rounded-lg hover:border-white hover:bg-[#202020] transition-all group ${project.side === 'left' ? 'md:order-2' : 'md:order-1'}`}
                  >
                    {/* Phase Label */}
                    <div className="mb-3">
                      <span className={`text-xs font-bold ${project.phaseColor} uppercase tracking-wider`}>
                        {project.phase}
                      </span>
                    </div>
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-3">
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
                    <p className="text-xs font-medium text-[#737373] uppercase tracking-wider mb-2">
                      {project.role}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E5E5E5] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A3A3A3] mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem */}
                    <div className="mb-3 p-3 bg-[#141414] border-l-2 border-red-500 rounded">
                      <p className="text-xs font-semibold text-red-400 mb-1">Problem:</p>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-3 p-3 bg-[#141414] border-l-2 border-emerald-500 rounded">
                      <p className="text-xs font-semibold text-emerald-400 mb-1">Solution:</p>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-[#141414] border border-[#262626] text-[#A3A3A3] rounded hover:border-[#404040] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Link */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors">
                        Source Code
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex items-center gap-2 text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors">
                        Live Demo
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
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