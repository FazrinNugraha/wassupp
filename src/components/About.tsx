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
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#141414] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-10 right-0 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <line x1="0" y1="0" x2="400" y2="400" stroke="#ffffff" strokeWidth="2"/>
          <line x1="400" y1="0" x2="0" y2="400" stroke="#ffffff" strokeWidth="2"/>
          <circle cx="200" cy="200" r="150" stroke="#ffffff" strokeWidth="2"/>
          <circle cx="200" cy="200" r="200" stroke="#ffffff" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <rect x="50" y="50" width="300" height="300" stroke="#ffffff" strokeWidth="2"/>
          <rect x="100" y="100" width="200" height="200" stroke="#ffffff" strokeWidth="1"/>
          <line x1="50" y1="50" x2="350" y2="350" stroke="#ffffff" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white ">
            About Me
          </h2>
          <p className="text-gray-400">
            Learn more about my journey and experience
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12 items-center mb-20">
          
          {/* Right: Bio */}
         <div className="animate-fade-left px-6 py-16 border-t-2 border-[#262626]">

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer passionate about crafting user-centric solutions
              that solve real-world problems. With expertise in modern web technologies and
              a keen eye for design, I create applications that are both beautiful and
              functional.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech started with curiosity about how websites work, which evolved
              into a deep passion for building scalable applications. I love collaborating with
              teams and continuously learning new technologies to stay ahead of the curve.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
          <div className="animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Journey
          </h2>
          <p className="text-[#cbd5e1] mb-12 max-w-3xl mx-auto text-center">
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
                <div className="absolute left-0 top-1 w-3 h-3 bg-white rounded-full"></div>

                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[5px] top-4 w-0.5 h-24 bg-gray-700"></div>
                )}

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-gray-300 text-sm font-medium">{item.date}</span>
                    <span className="text-xs font-semibold text-white border border-white px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-3">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded hover:border-white hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-white text-sm font-medium hover:text-gray-300 transition-colors inline-flex items-center gap-1"
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
