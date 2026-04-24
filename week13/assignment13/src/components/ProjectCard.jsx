function ProjectCard({title, author, image, link, description}) {
    return (
        <article className="project-card">
            <img src = {image} alt={title} className="project-image"/>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
            <a href={link} target="-blank" rel="noopener noreferrer"> More Here </a>
            
        </article>
    );
}

export default ProjectCard;