import React from 'react';

export default function Skills() {
  // Tech Stack dengan Real Icons dari CDN
  const techStackCategories = [
    {
      category: 'Frontend',
      techs: [
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Astro.js', icon: 'https://astro.build/assets/press/astro-icon-light.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Zustand', icon: 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg' },
        { name: 'React Query', icon: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png' },
        { name: 'shadcn/ui', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
        { name: 'Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
      ],
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Bun', icon: 'https://bun.sh/logo.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Hono', icon: 'https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title.png' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'Appwrite', icon: 'https://appwrite.io/assets/logotype/logo.png' },
      ],
    },
    {
      category: 'Tools & Others',
      techs: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ],
    },
  ];

  // Skills dengan Persentase
  const skillsByLevel = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 90 },
    { name: 'Git & GitHub', level: 93 },
    { name: 'Astro', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'JavaScript', level: 93 },
    { name: 'Express', level: 88 },
    { name: 'CSS/HTML', level: 90 },
    { name: 'REST APIs', level: 90 },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 bg-[#050f19] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-skills" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3ecf8e" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-skills)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="100" stroke="#3ecf8e" strokeWidth="1"/>
          <circle cx="200" cy="200" r="50" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="0" y1="200" x2="400" y2="200" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="200" y1="0" x2="200" y2="400" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute top-1/4 left-0 w-80 h-80 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <polygon points="200,50 350,200 200,350 50,200" stroke="#3ecf8e" strokeWidth="2"/>
          <polygon points="200,100 300,200 200,300 100,200" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Proficient in modern technologies for building scalable web applications
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tech Stack
          </h3>
          <div className="space-y-10">
            {techStackCategories.map((category) => (
              <div key={category.category}>
                <h4 className="text-lg font-semibold text-[#3ecf8e] mb-4 pl-2 border-l-2 border-[#3ecf8e]">
                  {category.category}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="glass rounded-lg p-6 flex items-center justify-center hover:border-[#3ecf8e] transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-center">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-12 h-12 mb-2 mx-auto object-contain group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <p className="text-sm text-[#cbd5e1] group-hover:text-[#3ecf8e] transition-colors">
                          {tech.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills dengan Progress Bar */}
        <div className="glass rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-10">
            Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsByLevel.map((skill) => (
              <div key={skill.name}>
                {/* Label */}
                <div className="flex justify-between mb-2">
                  <span className="text-[#cbd5e1] font-medium">
                    {skill.name}
                  </span>
                  <span className="text-[#3ecf8e] text-sm font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3ecf8e] to-[#5edeb3] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(62, 207, 142, 0.1);
        }
      `}</style>
    </section>
  );
}