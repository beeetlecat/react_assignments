import {useState} from "react";

function ProjectCard({title, author, image, link, description}) {

    const [isVisible, setIsVisible] = useState(false);
    
    function toggleDescriptionStatus() {
    setIsVisible((prevState) => !prevState);}

    return (
        <div>
            <article className="project-card">
                <img src = {image} alt={title} className="project-image"/>
                <h2>{title}</h2>
                <p>{author}</p>
                <button onClick={toggleDescriptionStatus}>
                    {isVisible ? "Hide Description" : "Description"}
                </button>

                {isVisible && (
                    <p>{description}</p>
                )}

                {/* <p>{description}</p> */}
                <a href={link} target="-blank" rel="noopener noreferrer"> More Here </a>
                
            </article>
        </div>
    );
}

export default ProjectCard;