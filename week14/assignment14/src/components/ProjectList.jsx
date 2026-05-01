import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projectData";

function ProjectList() {
    return (
        <div>
            <h1>Projects</h1>
            <div className = "project-grid">
                {projects.map((project) => (
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
        </div>
    );
}

export default ProjectList;