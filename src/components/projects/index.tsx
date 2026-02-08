import { useTheme } from "../../context/ThemeContext";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="min-h-screen">
            <main>
                <section className="max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-5 md:px-6">
                    {/* Header */}
                    <ProjectsHeader />

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div
                            className={`hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 -translate-x-1/2 ${isDark ? "bg-[#262626]" : "bg-gray-200"}`}
                        />

                        {/* Projects */}
                        <div className="space-y-20">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

// Re-export for convenience
export { projects } from "./projectsData";
export type { Project } from "./projectsData";
