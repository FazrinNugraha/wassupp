import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    category: 'Web Apps',
    description:
      'Interactive platform untuk 1000+ students dengan AI-powered course recommendations dan progress tracking real-time',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop',
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
    description:
      'Mobile health app untuk diabetes management dengan real-time blood sugar tracking dan medication reminders',
    image:
      'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=280&fit=crop',
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
    description:
      'Fully functional e-commerce platform dengan payment integration, inventory management, dan 50K+ monthly users',
    image:
      'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=280&fit=crop',
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
    description:
      'Modern responsive portfolio dengan Astro, React, dan Tailwind untuk showcase professional projects',
    image:
      'https://images.unsplash.com/photo-1647014260404-26900b2b9770?w=500&h=280&fit=crop',
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
    description:
      'Collaborative task manager dengan real-time updates, team collaboration features, dan productivity insights',
    image:
      'https://images.unsplash.com/photo-1516534775068-bb6baad4c105?w=500&h=280&fit=crop',
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
    description:
      'Real-time weather dashboard dengan 7-day forecast, weather alerts, dan beautiful data visualization',
    image:
      'https://images.unsplash.com/photo-1559589689-577888ab6a4f?w=500&h=280&fit=crop',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-supabase-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-supabase-text">
            Featured Projects
          </h2>
          <p className="text-supabase-text_muted max-w-2xl mx-auto">
            Explore my latest work showcasing expertise in full-stack
            development and modern web technologies
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 relative max-w-2xl mx-auto">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-supabase-text_muted"
            size={20}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full pl-12 pr-4 py-3
              bg-supabase-surface
              border border-supabase-border
              rounded-lg
              text-supabase-text
              placeholder:text-supabase-text_muted
              focus:outline-none focus:border-supabase-text
            "
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                group
                bg-[#121211]
                border border-supabase-border
                rounded-xl
                overflow-hidden
                transition
                hover:bg-supabase-surface_light
              "
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-supabase-text mb-2">
                  {project.title}
                </h3>

                <p className="text-supabase-text_muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-supabase-dark border border-supabase-border text-supabase-text_muted px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      px-4 py-2
                      bg-white text-black
                      font-semibold rounded-lg
                      hover:bg-gray-200
                      transition
                    "
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      px-4 py-2
                      border border-white
                      text-white
                      font-semibold rounded-lg
                      hover:bg-white hover:text-black
                      transition
                    "
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
