import {useState} from "react";

function ProjectCard({title, author, image, link, description}) {

    const [isVisible, setIsVisible] = useState(false);
    
    function toggleDescriptionStatus() {
    setIsVisible((prevState) => !prevState);}

    return (
        <div>
            <article className="project-card">
                <img src = {image} alt={title} className="project-image"/>
                <h3 className="card-title">{title}</h3>
                {/* <p>{author}</p> */}
                <button className="button" onClick={toggleDescriptionStatus}>
                    {isVisible ? "Hide Description" : "See Description"}
                </button>

                {isVisible && (
                    <p>{description}</p>
                )}

                {/* <p>{description}</p> */}
                <a href={link} target="-blank" rel="noopener noreferrer" className="more-link"> p5.js link </a>
                
            </article>
        </div>
    );
}

export default ProjectCard;