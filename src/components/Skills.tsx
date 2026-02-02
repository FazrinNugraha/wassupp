import React from 'react';

export default function Skills() {
  const techStackCategories = [
    {
      category: 'Frontend',
      techs: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Astro.js', icon: 'https://astro.build/assets/press/astro-icon-light.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'shadcn/ui', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },


      ],
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Bun', icon: 'https://bun.sh/logo.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      category: 'ML and AI',
      techs: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Bun', icon: 'https://bun.sh/logo.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      category: 'Tools & Others',
      techs: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#141414] text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies for building scalable web applications
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-12">
          {techStackCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold mb-6 border-l-2 border-gray-700 pl-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="
                      bg-zinc-900
                      border border-gray-800
                      rounded-xl
                      p-6
                      flex items-center justify-center
                      transition-all duration-300
                      hover:bg-zinc-800
                      hover:-translate-y-2
                      hover:scale-105
                      hover:shadow-lg hover:shadow-white/10
                      hover:border-white/50
                    "
                  >
                    <div className="text-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 mx-auto mb-3 object-contain"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      <p className="text-sm text-supabase-text_muted">
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
    </section>
  );
}
