import React from 'react'
import ProjectCard from './project-card'
import { projectsData } from '@/data/projects'

const Projects = () => {
  return (
    <>
     {/* Projects Section */}
        <section id="projects" className="p-8 py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </section>

    </>
  )
}

export default Projects
