import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projectData";

function Projects({limit}) {
    const displayed = limit ? projects.slice(0, limit) : projects;
    return (
            <div className = "project-grid">
                {displayed.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        author={project.author}
                        image={project.image}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
    );
}

export default Projects;