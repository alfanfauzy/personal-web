import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import Title from "@/components/ui/title";
import { DATA } from "@/data/resume";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const ProjectPage = () => {
    return (
        <section id="projects">
            <Title title={"My Project"} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.projects.slice(2).map((project, id) => (
                    <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                        <ProjectCard
                            href={project.href}
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
};

export default ProjectPage;
