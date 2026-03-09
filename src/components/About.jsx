import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Layout, Cpu, Zap } from 'lucide-react';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    // Orbiting tech icons
    const orbitIcons = [
        { icon: Code2, label: 'React', color: '#61dafb' },
        { icon: Database, label: 'MySQL', color: '#00758f' },
        { icon: Server, label: 'Node.js', color: '#68a063' },
        { icon: Layout, label: 'HTML/CSS', color: '#e34c26' },
        { icon: Cpu, label: 'Java', color: '#f89820' },
        { icon: Zap, label: 'APIs', color: '#06b6d4' },
    ];

    return (
        <section id="about" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                About Me
            </motion.h2>

            <motion.div
                className="about-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div
                    className="about-text"
                    variants={itemVariants}
                >
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        I'm a Third-year IT Engineering student at <strong>Nandha Engineering College</strong>, specializing in <strong>Java</strong> and <strong>React</strong>. I build scalable, clean-code applications with a focus on performance and reliability.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Trained at <strong>IFC, Bhavani, Erode</strong>, I bridge the gap between complex engineering concepts and user-centric web solutions. I'm dedicated to continuous learning and solving real-world problems through logical architecture.
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="stat-item">
                            <motion.span
                                className="stat-number"
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 0.8, type: "spring" }}
                            >
                                3+
                            </motion.span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <motion.span
                                className="stat-number"
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 0.9, type: "spring" }}
                            >
                                5+
                            </motion.span>
                            <span className="stat-label">Technologies</span>
                        </div>
                        <div className="stat-item">
                            <motion.span
                                className="stat-number"
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                1+
                            </motion.span>
                            <span className="stat-label">Year Coding</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-image-wrapper"
                    variants={itemVariants}
                >
                    {/* Orbit Animation Container */}
                    <div className="orbit-container">
                        {/* Center Profile */}
                        <motion.div
                            className="orbit-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={inView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="profile-initials">S</div>
                            <div className="profile-ring"></div>
                            <div className="profile-ring ring-2"></div>
                        </motion.div>

                        {/* Orbiting Icons */}
                        <div className="orbit-ring">
                            {orbitIcons.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="orbit-icon"
                                    style={{
                                        '--orbit-delay': `${index * -4}s`,
                                        '--icon-color': item.color
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                                    whileHover={{
                                        scale: 1.3,
                                        zIndex: 10
                                    }}
                                >
                                    <item.icon size={20} />
                                    <span className="orbit-label">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background Glow */}
                        <div className="orbit-glow"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
