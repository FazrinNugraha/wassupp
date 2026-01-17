import React from 'react';
import { Trophy, GitCommit, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Trophy, label: 'Projects', value: '8+' },
    { icon: GitCommit, label: 'Commits', value: '500+' },
    { icon: Users, label: 'Clients', value: '10+' },
  ];

  const timeline = [
    {
      date: 'January 2026',
      type: 'LEARNING',
      title: 'Leveling Up System Design Skills',
      description: 'Dedicated focused effort to improve system design skills after struggling in senior engineer interviews. Studied real-world architectures, practiced with peers, and started documenting design decisions systematically.',
      skills: ['System Design', 'Architecture', 'Technical Documentation', 'Trade-off Analysis'],
    },
    {
      date: 'December 2025',
      type: 'ACHIEVEMENT',
      title: 'Advanced Full-Stack Development',
      description: 'Mastered advanced concepts in backend architecture, database optimization, and deployed multiple production applications with millions of users. Gained expertise in scaling and performance optimization.',
      skills: ['Node.js', 'PostgreSQL', 'System Architecture', 'DevOps'],
    },
    {
      date: 'September 2024',
      type: 'MILESTONE',
      title: 'Freelance Development Journey',
      description: 'Started working as a freelance developer, collaborating with diverse clients on complex projects. Delivered production-ready applications and learned project management skills.',
      skills: ['Project Management', 'Client Communication', 'Full-Stack Development'],
    },
    {
      date: 'June 2023',
      type: 'LEARNING',
      title: 'TypeScript & Modern Frontend',
      description: 'Dove deep into TypeScript and advanced React patterns. Contributed to open-source projects and mentored junior developers.',
      skills: ['TypeScript', 'React', 'Testing', 'Code Quality'],
    },
    {
      date: 'March 2022',
      type: 'MILESTONE',
      title: 'First Production Application',
      description: 'Successfully deployed first production web application used by 1000+ users. Learned about deployment, monitoring, and handling real user feedback.',
      skills: ['Deployment', 'Monitoring', 'Performance', 'User Experience'],
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050f19] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3ecf8e" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-10 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <line x1="0" y1="0" x2="400" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <line x1="400" y1="0" x2="0" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="150" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="200" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <rect x="50" y="50" width="300" height="300" stroke="#3ecf8e" strokeWidth="2"/>
          <rect x="100" y="100" width="200" height="200" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="50" y1="50" x2="350" y2="350" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white ">
            About Me
          </h2>
          <p className="text-gray-400">
            Learn more about my journey and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Profile Image */}
          <div className="animate-fade-right">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-[#3ecf8e] to-[#5edeb3] rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-linear-to-br from-[#1a2332] to-[#0f172a] rounded-2xl p-1 overflow-hidden">
                <img
                  src="public/pp.jpeg"
                  alt="Profile"
                  className="rounded-2xl w-full h-110 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="animate-fade-left">
            <p className="text-lg text-[#cbd5e1] mb-6 leading-relaxed">
              I'm a full-stack developer passionate about crafting user-centric solutions
              that solve real-world problems. With expertise in modern web technologies and
              a keen eye for design, I create applications that are both beautiful and
              functional.
            </p>
            <p className="text-lg text-[#cbd5e1] mb-6 leading-relaxed">
              My journey in tech started with curiosity about how websites work, which evolved
              into a deep passion for building scalable applications. I love collaborating with
              teams and continuously learning new technologies to stay ahead of the curve.
            </p>
            <p className="text-lg text-[#cbd5e1] mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#3ecf8e] text-[#050f19] font-semibold rounded-lg hover:bg-[#5edeb3] transition-all duration-300 hover:scale-105"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-[#3ecf8e] text-[#3ecf8e] font-semibold rounded-lg hover:bg-[#3ecf8e] hover:text-[#050f19] transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass rounded-lg p-6 text-center animate-zoom-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Icon className="w-8 h-8 text-[#3ecf8e] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#94a3b8]">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="animate-fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Journey
          </h3>
          <p className="text-[#cbd5e1] mb-12 max-w-3xl">
            A timeline of my professional growth and learning progression. This isn't a resume—it's
            a story of how I've evolved as an engineer, the pivotal moments that shaped my
            thinking, and the skills I've developed along the way.
          </p>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className="relative pl-12 animate-fade-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-3 h-3 bg-[#3ecf8e] rounded-full"></div>

                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[5px] top-4 w-0.5 h-24 bg-[#2d3e4f]"></div>
                )}

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#94a3b8] text-sm font-medium">{item.date}</span>
                    <span className="text-xs font-semibold text-[#3ecf8e] border border-[#3ecf8e] px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>

                  <p className="text-[#cbd5e1] mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-3">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-[#1a2332] border border-[#2d3e4f] text-[#cbd5e1] rounded hover:border-[#3ecf8e] hover:text-[#3ecf8e] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-[#3ecf8e] text-sm font-medium hover:text-[#5edeb3] transition-colors inline-flex items-center gap-1"
                  >
                    Read more
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
