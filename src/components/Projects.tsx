import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    category: 'Web Apps',
    description: 'Interactive platform untuk 1000+ students dengan AI-powered course recommendations dan progress tracking real-time',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    title: 'GlucoCheck',
    category: 'Mobile',
    description: 'Mobile health app untuk diabetes management dengan real-time blood sugar tracking dan medication reminders',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=280&fit=crop',
    tech: ['React Native', 'Firebase', 'Express'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    description: 'Fully functional e-commerce platform dengan payment integration, inventory management, dan 50K+ monthly users',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=280&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Apps',
    description: 'Modern responsive portfolio dengan Astro, React, dan Tailwind untuk showcase professional projects',
    image: 'https://images.unsplash.com/photo-1647014260404-26900b2b9770?w=500&h=280&fit=crop',
    tech: ['Astro', 'React', 'TailwindCSS', 'EmailJS'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 5,
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task manager dengan real-time updates, team collaboration features, dan productivity insights',
    image: 'https://images.unsplash.com/photo-1516534775068-bb6baad4c105?w=500&h=280&fit=crop',
    tech: ['React', 'Firebase', 'Redux', 'Material-UI'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'Web Apps',
    description: 'Real-time weather dashboard dengan 7-day forecast, weather alerts, dan beautiful data visualization',
    image: 'https://images.unsplash.com/photo-1559589689-577888ab6a4f?w=500&h=280&fit=crop',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
];
 

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050f19] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3ecf8e" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-projects)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/2 right-0 w-96 h-96 opacity-5 -translate-y-1/2">
        <svg viewBox="0 0 400 400" fill="none">
          <line x1="0" y1="0" x2="400" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <line x1="400" y1="0" x2="0" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="150" stroke="#3ecf8e" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <rect x="50" y="50" width="300" height="300" stroke="#3ecf8e" strokeWidth="2"/>
          <line x1="50" y1="200" x2="350" y2="200" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="200" y1="50" x2="200" y2="350" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Explore my latest work showcasing expertise in full-stack development,
            UI/UX design, and modern web technologies
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="mb-8 relative max-w-2xl mx-auto animate-fade-up"
          style={{
            animationDelay: '0.1s',
          }}
        >
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a2332] border border-[#2d3e4f] rounded-lg text-white placeholder-[#64748b] focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all"
          />
        </div>

       

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-hover group bg-[#1a2332] border border-[#2d3e4f] rounded-lg overflow-hidden animate-fade-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-[#0f172a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#3ecf8e] text-[#050f19] text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[#0f172a] border border-[#2d3e4f] text-[#3ecf8e] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#3ecf8e] text-[#050f19] font-semibold rounded-lg hover:bg-[#5edeb3] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#3ecf8e] text-[#3ecf8e] font-semibold rounded-lg hover:bg-[#3ecf8e] hover:text-[#050f19] transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#94a3b8] text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
