import React from 'react';

export default function JourneyPage() {
  const timeline = [
    {
      date: 'September 2024',
      type: 'LEARNING',
      typeColor: 'border-emerald-500 text-emerald-500',
      dotColor: 'bg-emerald-500',
      title: 'Bootcamp Revou Fundamental Course',
      description: 'Joined an intensive software engineering bootcamp for 2 weeks focused on learning the basics of web development. I practiced building responsive and user-friendly websites using HTML, CSS, and JavaScript. The program also introduced Git for version control and modern development workflows, helping me understand how real-world web applications are built from development to deployment.',
      skills: ['HTML', 'CSS', 'Java Script', 'Git','Responsive Design' ],
    },
    {
      date: 'October 2025',
      type: 'TRANSITION',
      typeColor: 'border-orange-500 text-orange-500',
      dotColor: 'bg-orange-500',
      title: 'Recognizing and Recovering from Burnout',
      description: 'Hit a wall after months of unsustainable pace. Learning to recognize burnout signs and establish better boundaries was crucial for long-term sustainability in this career.',
      skills: ['Work-Life Balance', 'Mental Health', 'Sustainable Productivity', 'Self-Care'],
    },
    {
      date: 'December 2024',
      type: 'ACHIEVEMENT',
      typeColor: 'border-blue-500 text-blue-500',
      dotColor: 'bg-blue-500',
      title: 'Advanced Full-Stack Development',
      description: 'Mastered advanced concepts in backend architecture, database optimization, and deployed multiple production applications with millions of users. Gained expertise in scaling and performance optimization.',
      skills: ['Node.js', 'PostgreSQL', 'System Architecture', 'DevOps'],
    },
    {
      date: 'September 2024',
      type: 'MILESTONE',
      typeColor: 'border-purple-500 text-purple-500',
      dotColor: 'bg-purple-500',
      title: 'Freelance Development Journey',
      description: 'Started working as a freelance developer, collaborating with diverse clients on complex projects. Delivered production-ready applications and learned project management skills.',
      skills: ['Project Management', 'Client Communication', 'Full-Stack Development'],
    },
    {
      date: 'June 2023',
      type: 'LEARNING',
      typeColor: 'border-emerald-500 text-emerald-500',
      dotColor: 'bg-emerald-500',
      title: 'TypeScript & Modern Frontend',
      description: 'Dove deep into TypeScript and advanced React patterns. Contributed to open-source projects and mentored junior developers.',
      skills: ['TypeScript', 'React', 'Testing', 'Code Quality'],
    },
    {
      date: 'March 2022',
      type: 'MILESTONE',
      typeColor: 'border-purple-500 text-purple-500',
      dotColor: 'bg-purple-500',
      title: 'First Production Application',
      description: 'Successfully deployed first production web application used by 1000+ users. Learned about deployment, monitoring, and handling real user feedback.',
      skills: ['Deployment', 'Monitoring', 'Performance', 'User Experience'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Journey
        </h2>
        <p className="text-[#A3A3A3] mb-16 max-w-3xl mx-auto text-center text-lg">
          A timeline of my professional growth and learning progression. This isn't a resume—it's
          a story of how I've evolved as an engineer, the pivotal moments that shaped my
          thinking, and the skills I've developed along the way.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-[#262626]"></div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className="relative pl-8 group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-3 w-4 h-4 ${item.dotColor} rounded-full transition-transform group-hover:scale-125`}></div>

                {/* Card Content */}
                <div className="border border-[#262626] rounded-lg p-6 bg-[#1A1A1A] hover:border-[#404040] transition-all duration-300">
                  {/* Date and Type Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#A3A3A3] text-xs font-medium uppercase tracking-wider">{item.date}</span>
                    <span className={`text-xs font-semibold border px-2.5 py-1 rounded ${item.typeColor}`}>
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[#A3A3A3] mb-4 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wide mb-3">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 bg-[#1A1A1A] border border-[#262626] text-white rounded hover:border-blue-500 hover:text-blue-300 transition-all"
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