import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

function ProjectCard({title, description, imageUrl, projectLink}){

    useEffect(()=>{
        AOS.init({
            duration:800,
            once:true,
        })
    },[])
    return(
        <div className="project-card" data-aos='fade-up'>
            <img src={imageUrl} alt={title}/>
            <h4>{title}</h4>
            <p> {description} </p>
            <br/>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}
export default ProjectCard;