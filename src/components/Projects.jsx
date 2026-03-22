import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Folder, GitBranch, Code2, Terminal, Play } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'Weather Prediction',
        desc: 'Real-time weather forecasting app with location-based predictions, interactive charts, and 7-day forecast using live weather APIs.',
        tech: ['React', 'OpenWeather API', 'JavaScript'],
        image: '/projects/weather_prediction.svg',
        challenge: 'Key: Integrated live weather API with dynamic UI updates.',
        type: 'Frontend',
        status: 'Completed',
        github: 'https://github.com/SAI-SON/Weather-Forecast',
        demo: 'https://weather-prediction.saison02.tech'
    },
    {
        title: 'Placement Assistant',
        desc: 'AI-powered placement preparation platform with resume analysis, interview tracking, and company insights.',
        tech: ['Next.js', 'TypeScript', 'Firebase'],
        image: '/projects/placement_assistant.png',
        challenge: 'Key: Integrated AI for smart resume scoring.',
        type: 'Full Stack',
        status: 'Completed',
        github: 'https://github.com/SAI-SON/Placement-Assistant',
        demo: 'https://placement-assistant.saison02.tech/'
    },
    {
        title: 'Hand Cricket',
        desc: 'Interactive hand cricket game where you challenge the computer in this classic game of skill and luck.',
        tech: ['React', 'JavaScript', 'CSS'],
        image: '/projects/hand_cricket.png',
        challenge: 'Key: Implemented smart AI difficulty levels and game logic.',
        type: 'Frontend',
        status: 'Completed',
        github: 'https://github.com/SAI-SON/Hand-Cricket',
        demo: 'https://sai-son.github.io/Hand-Cricket/'
    },
    {
        title: 'LoveLens',
        desc: 'FLAMES-based relationship compatibility app that matches two names and reveals a fun connection result with animated transitions.',
        tech: ['React', 'JavaScript', 'FLAMES Logic'],
        image: '/projects/lovelens.svg',
        challenge: 'Key: Implemented deterministic FLAMES elimination logic with engaging result states.',
        type: 'Frontend',
        status: 'Completed',
        github: 'https://github.com/SAI-SON/LoveLens.git',
        demo: 'https://lovelens-flames.saison02.tech'
    },
    {
        title: 'Github-dev-analyzer',
        desc: 'Developer profile analytics dashboard that fetches GitHub data and visualizes repositories, language usage, and contribution insights.',
        tech: ['React', 'GitHub API', 'Chart.js'],
        image: '/projects/github_dev_analyzer.svg',
        challenge: 'Key: Unified multi-endpoint GitHub API data into a clean, insight-focused UI.',
        type: 'Frontend',
        status: 'Completed',
        github: 'https://github.com/SAI-SON/Github-Profile-Analyzer.git',
        demo: 'https://github-dev-analyzer.saison02.tech'
    }
];

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="projects" ref={ref} className="projects-section">
            {/* Background Terminal Lines */}
            <div className="projects-bg-code">
                <motion.div
                    className="bg-code-line"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 0.05 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    {`git commit -m "Building amazing projects" 🚀`}
                </motion.div>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Featured Projects
            </motion.h2>

            {/* Git Branch Visualization */}
            <motion.div
                className="git-branch-visual"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
            >
                <div className="branch-line">
                    <motion.div
                        className="branch-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </div>
                <div className="branch-commits">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="commit-dot"
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{
                                delay: 0.8 + index * 0.3,
                                type: "spring",
                                stiffness: 300
                            }}
                            whileHover={{ scale: 1.5 }}
                        >
                            <span className="commit-label">{project.title.split(' ')[0]}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="glass-card project-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -15,
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Project Type Badge */}
                        <motion.div
                            className={`project-type-badge ${project.type.toLowerCase().replace(' ', '-')}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            {project.type === 'Frontend' && <Code2 size={12} />}
                            {project.type === 'Backend' && <Terminal size={12} />}
                            {project.type === 'Full Stack' && <GitBranch size={12} />}
                            <span>{project.type}</span>
                        </motion.div>

                        {/* Status Indicator */}
                        <div className={`status-indicator ${project.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                            <span className="status-dot"></span>
                            <span className="status-text">{project.status}</span>
                        </div>

                        <motion.div
                            className="project-image-container"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Code Window Style Preview with Image */}
                            <div className="project-preview">
                                <div className="preview-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="preview-title">{project.title}</span>
                                </div>
                                <div className="preview-content">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="project-info">
                            <motion.div
                                className="project-tech"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                {project.tech.map((t, techIndex) => (
                                    <motion.span
                                        key={t}
                                        className="tech-tag"
                                        whileHover={{
                                            scale: 1.1,
                                            y: -2
                                        }}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                                    >
                                        <span className="tech-dot"></span>
                                        {t}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <motion.h3
                                className="project-title"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                className="project-desc"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                {project.desc}
                            </motion.p>

                            <motion.div
                                className="project-challenge"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <Terminal size={14} />
                                {project.challenge}
                            </motion.div>

                            <motion.div
                                className="project-links"
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <motion.a
                                    href={project.github || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label="GitHub"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: 'var(--accent-primary)'
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </motion.a>
                                <motion.a
                                    href={project.demo || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link demo"
                                    aria-label="Demo"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: 'var(--accent-secondary)'
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Play size={18} />
                                    <span>Demo</span>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
