import React, { useState, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    phase: 'PHASE : SEPT 2025',
    phaseColor: 'text-blue-500',
    title: 'Hackaton x Amartha 2025',
    role: 'FRONTEND ENGINEER · 2025',
    status: 'FEATURED',
    statusColor: 'bg-blue-500',
    description:
      'This project introduces "Jaringan Amanah", a system that transforms qualitative social assets into a quantitative Group Trust Score Social Graph Engine. The system calculates Group Trust Scores by integrating graph analysis, natural language processing (NLP) powered by Google Gemini, and Computer Vision ',
    tech: [ 'TypeScript', 'Tailwind','React', 'Sigma js','Chart js','Python','FastAPI','Google Cloud','Google Gemini' ],
    thumbnails: ['amarta.jpg','amarta2.jpg','amarta3.jpg','mvp1.jpg','mvp 2.jpg'],
    sourceCode: 'https://github.com/SocialCollateralAI',
    liveDemo: 'https://socialcollateral-landingpage.vercel.app/',
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
    thumbnails: [],
    sourceCode: '#',
    liveDemo: '#',
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
    thumbnails: [],
    sourceCode: '#',
    liveDemo: '#',
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
    thumbnails: [],
    sourceCode: '#',
    liveDemo: '#',
    link: '#project-4',
    side: 'left'
  }
];

// Photo carousel component untuk setiap project
const PhotoCarousel = ({ thumbnails }: { thumbnails: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

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
              className="absolute top-6 right-6 z-[60] p-4 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              aria-label="Close fullscreen"
            >
              <X className="w-7 h-7 text-white" strokeWidth={3} />
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
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
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
          {/* Vertical Timeline Line (limited height so it doesn't stretch full page) */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-[#262626] -translate-x-1/2"></div>

          {/* Projects */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute left-1/2 top-24 w-4 h-4 ${project.statusColor} rounded-full -translate-x-1/2 z-10 border-4 border-[#141414]`}></div>
                
                {/* Content - Compact Layout */}
                <div className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center max-w-4xl mx-auto`}>
                  {/* Thumbnail - Compact Size */}
                  <div className={`${project.side === 'left' ? 'md:order-1' : 'md:order-2'}`}>
                    <PhotoCarousel thumbnails={project.thumbnails} />
                  </div>

                  {/* Project Card - Minimal (match thumbnail height) */}
                  <div className={`block min-h-[320px] flex flex-col justify-center ${project.side === 'left' ? 'md:order-2' : 'md:order-1'}`}>
                    {/* Phase Label */}
                    <div className="mb-2">
                      <span className={`text-xs font-bold ${project.phaseColor} uppercase tracking-wider`}>
                        {project.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    {/* Short Description (primary content) */}
                    <p className="text-base text-[#A3A3A3] mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Compact pills (max 3) + status pill */}
                    <div className="flex flex-wrap gap-2 mb-3 items-center">
                      {project.tech.slice(0, 10).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-transparent border border-[#e6e6e6]/6 text-[#A3A3A3] rounded"
                        >
                          {tech}
                        </span>
                      ))}

                      {/* Status pills */}
                      {project.status === 'FEATURED' && (
                        <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded">Featured</span>
                      )}
                      {project.status === 'ONGOING' && (
                        <span className="text-xs px-2 py-1 bg-emerald-500 text-white rounded">Ongoing</span>
                      )}
                      {project.status === 'COMPLETED' && (
                        <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded">Completed</span>
                      )}
                    </div>

                    {/* View Links (simple) */}
                    <div className="flex gap-6 text-blue-500 text-sm font-medium">
                      {project.sourceCode !== '#' && (
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Source Code <ArrowRight size={14} /></a>
                      )}
                      {project.liveDemo !== '#' && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Live Demo <ArrowRight size={14} /></a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}