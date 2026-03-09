import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Database, Wrench, Brain, Server, GitBranch, Cpu } from 'lucide-react';
import './Skills.css';

const skills = [
    {
        category: 'Frontend',
        icon: Layout,
        color: '#61dafb',
        items: [
            { name: 'React', level: 65 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 75 }
        ]
    },
    {
        category: 'Backend',
        icon: Server,
        color: '#68a063',
        items: [
            { name: 'Node.js', level: 50 },
            { name: 'Java', level: 85 },
            { name: 'REST APIs', level: 70 }
        ]
    },
    {
        category: 'Database',
        icon: Database,
        color: '#00758f',
        items: [
            { name: 'MySQL', level: 75 },
            { name: 'MongoDB', level: 45 }
        ]
    },
    {
        category: 'Tools & DevOps',
        icon: GitBranch,
        color: '#f05032',
        items: [
            { name: 'Git & GitHub', level: 80 },
            { name: 'VS Code', level: 90 }
        ]
    },
    {
        category: 'Core Concepts',
        icon: Brain,
        color: '#9b59b6',
        items: [
            { name: 'Data Structures', level: 75 },
            { name: 'OOP Principles', level: 85 }
        ]
    }
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="skills" ref={ref} className="skills-section">
            {/* Background decoration */}
            <div className="skills-bg-decoration">
                <motion.div
                    className="floating-bracket left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 0.1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    {'</>'}
                </motion.div>
                <motion.div
                    className="floating-bracket right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 0.1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {'{ }'}
                </motion.div>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Technical Skillset
            </motion.h2>

            {/* Skills Architecture Diagram */}
            <motion.div
                className="skills-architecture"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
            >
                <div className="architecture-flow">
                    <motion.div
                        className="arch-node frontend"
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <Layout size={20} />
                        <span>Frontend</span>
                    </motion.div>
                    <motion.div
                        className="arch-connector"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    />
                    <motion.div
                        className="arch-node api"
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <Cpu size={20} />
                        <span>API</span>
                    </motion.div>
                    <motion.div
                        className="arch-connector"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    />
                    <motion.div
                        className="arch-node backend"
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <Server size={20} />
                        <span>Backend</span>
                    </motion.div>
                    <motion.div
                        className="arch-connector"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    />
                    <motion.div
                        className="arch-node database"
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <Database size={20} />
                        <span>Database</span>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        className="glass-card skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        style={{ '--card-accent': skillGroup.color }}
                    >
                        <div className="skill-header">
                            <motion.div
                                className="skill-icon"
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.1
                                }}
                                transition={{ duration: 0.5 }}
                                style={{ '--icon-color': skillGroup.color }}
                            >
                                <skillGroup.icon size={24} />
                            </motion.div>
                            <h3>{skillGroup.category}</h3>
                        </div>

                        <div className="skill-items">
                            {skillGroup.items.map((skill, skillIndex) => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-item-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <motion.span
                                            className="skill-percent"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                delay: 1 + index * 0.1 + skillIndex * 0.1,
                                                type: "spring"
                                            }}
                                        >
                                            {skill.level}%
                                        </motion.span>
                                    </div>
                                    <div className="skill-bar-container">
                                        <motion.div
                                            className="skill-bar"
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={inView ? {
                                                width: `${skill.level}%`,
                                                opacity: 1
                                            } : {}}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.5 + index * 0.1 + skillIndex * 0.15,
                                                ease: [0.6, -0.05, 0.01, 0.99]
                                            }}
                                            style={{ '--bar-color': skillGroup.color }}
                                        />
                                        {/* Data flow animation */}
                                        <motion.div
                                            className="data-packet"
                                            initial={{ left: '-10%' }}
                                            animate={inView ? {
                                                left: ['0%', `${skill.level}%`]
                                            } : {}}
                                            transition={{
                                                delay: 0.5 + index * 0.1 + skillIndex * 0.15,
                                                duration: 1.2,
                                                ease: "easeOut"
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Animated code decoration */}
                        <div className="skill-code-decoration">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 0.3 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                {`import { ${skillGroup.category} } from 'skills';`}
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
