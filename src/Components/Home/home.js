import React, { useState, useEffect } from "react";
import './home.css';
import image from './picture.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";



function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    const phrases = [
        "Full Stack Developer",
        "Web Designer",
        "Freelancer",
        "Tech Enthusiast"
    ];

    // Typewriting Text

    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const isComplete = charIndex === currentPhrase.length;

        const typingSpeed = isDeleting ? 50 : 100;

        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < currentPhrase.length) {
                    setText(currentPhrase.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setText(currentPhrase.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex]);

    // Mouse

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHidden(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    return (

        <div className="parent">
            <div className="div1">
                <div className="text-container" data-aos='fade'>
                    <h1>Hi, I'm Nithish</h1>
                    <p className="typewriter">{text}</p>
                    <Link to="/projects">
                        <button>View Projects</button>
                    </Link>
                </div>
                <div className="profile-container" data-aos='fade-left'>
                    <img className="profile" src={image} alt="Profile Picture" />
                </div>

            </div>

            <div className="div2">
                <div className="heading">
                    <h1 data-aos='zoom-in'>About !</h1>
                </div>
                <div className="main-content">
                    <div className="know-me">
                        <h1 className="heading-h3" data-aos='fade-right'>Know Me</h1>
                        {/* <br /> */}
                        <p className="para" data-aos='fade-right'>
                            I'm a <b>Full Stack Python Developer</b> passionate about <b>automation</b> and <b>RPA</b>, dedicated to building clean, responsive, and efficient web apps.
                        </p>
                        <br />
                        <p className="para" data-aos='fade-right'>
                            I enjoy simplifying complex tasks through smart workflows, intuitive UIs, and strong backend logic.
                        </p>
                        <br />
                        <p className="para" data-aos='fade-right'>
                            I’m always learning and love blending <b>development</b> with <b>automation</b> to create scalable, intelligent solutions.
                        </p>
                        <br />
                        <p className="para" data-aos='fade-right'>
                            I believe technology should work for people — making life easier, faster, and smarter.
                        </p>
                        <br />
                        <p className="para" data-aos='fade-right'>
                            Open to exciting opportunities to contribute, grow, and innovate. Let’s connect and build something great!
                        </p>
                    </div>
                    <div className="skills-content" >
                        <h1 className="heading-h3" data-aos='fade-left'>My Skills</h1>
                        {/* <br/> */}
                        <div className="skills" >
                            <div class="skills_skill" data-aos='fade-left'>HTML</div>
                            <div class="skills_skill" data-aos='fade-left'>CSS</div>
                            <div class="skills_skill" data-aos='fade-left'>JavaScript</div>
                            <div class="skills_skill" data-aos='fade-left'>React</div>
                            <div class="skills_skill" data-aos='fade-left'>Angular</div>
                            <div class="skills_skill" data-aos='fade-left'>Responsive Design</div>
                            <div class="skills_skill" data-aos='fade-left'>Git</div>
                            <div class="skills_skill" data-aos='fade-left'>Github</div>
                            <div class="skills_skill" data-aos='fade-left'>Python</div>
                            <div class="skills_skill" data-aos='fade-left'>Django</div>
                            <div class="skills_skill" data-aos='fade-left'>Airflow</div>
                            <div class="skills_skill" data-aos='fade-left'>PowerAutomate</div>
                            <div class="skills_skill" data-aos='fade-left'>Snowflake</div>
                            {/* <div class="skills_skill">Terminal</div> */}
                            <div class="skills_skill" data-aos='fade-left'>Linux</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div3">
                <div className="heading">
                    <h1 data-aos='zoom-in'>Professional Experience</h1>
                </div>
                <div className="experience-section" data-aos='fade-up'>
                    <div className="experience-card">
                        <div className="exp-left">
                            <h3 className="experience-heading">Programmer Analyst - Trainee</h3>
                            <p className="company">💼 Changepond Technologies</p>
                            <p className="duration">📅 October 2024 – Present</p>
                        </div>
                        {/* <div className="exp-right">
                            <ul>
                                <li>🛠️ Crafted dynamic full-stack web solutions using <strong>Django</strong> and <strong>React & Angular</strong>, delivering seamless user experiences.</li>
                                <li>🤖 Streamlined workflows by integrating <strong>RPA tools</strong> like <em>Power Automate</em> and <em>Apache Airflow</em>, saving countless manual hours.</li>
                                <li>⚡ Supercharged backend performance, optimizing APIs to achieve a <strong>30% boost in efficiency</strong>.</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className={`scroll-indicator ${hidden ? 'hidden' : ''}`}>
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Home;
