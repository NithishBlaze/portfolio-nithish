import ProjectCard from "./projectcard";
import './project.css'


function Project() {

    

    const projects = [
        {
            title: "Portfolio Website",
            description: 'Personal Portfolio created using REACT',
            imageUrl: 'https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio.jpg',
            projectLink: ''
        },
        {
            title: "Room Booking Website",
            description: 'Responsive and cool Room Booking Management website using Angular, Django, SQL',
            imageUrl: 'https://opengeekslab.com/wp-content/smush-webp/2021/11/Expert-Guide-to-Step-by-Step-Hotel-Software-Development.png.webp',
            projectLink: ''
        },
        {
            title: "DIY NAS HomeServer",
            description: 'Built a Network Attached Storage Homeserver using old PC and configed with TrueNAS Core.',
            imageUrl: 'https://www.truenas.com/wp-content/uploads/2024/05/TrueNAS-Scale-UI.png',
            projectLink: ''
        },
        {
            title: 'Simple JAVA ChatBot',
            description: 'Created using Java and its core components.',
            imageUrl: 'https://miro.medium.com/v2/resize:fit:700/1*kv0XkhW5JOFDrnukjmXliw.jpeg',
            projectLink: ''
        },
        {
            title: 'SplitZen',
            description: 'On Development',
            imageUrl: 'https://cdn.techjockey.com/blog/wp-content/uploads/2022/08/04143915/split-expenses-app-feature-image.jpg?d=840',
            projectLink: ''
        },
    ]
    return (
        <div className="parent">
            <h1>My work</h1>
            <div className="card-display">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default Project;