import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Database, Server, Code2, Globe, Terminal, Layers } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Full Stack Developer';

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
        return () => clearInterval(typeInterval);
    }, []);

    // Animation variants for staggered children
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

    const socialVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1 + i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
            }
        })
    };

    // Tech stack icons for floating animation
    const techIcons = [
        { icon: Database, label: 'Database', x: '10%', y: '20%', delay: 0 },
        { icon: Server, label: 'Backend', x: '85%', y: '25%', delay: 0.5 },
        { icon: Code2, label: 'Frontend', x: '15%', y: '75%', delay: 1 },
        { icon: Globe, label: 'Web', x: '80%', y: '70%', delay: 1.5 },
        { icon: Terminal, label: 'CLI', x: '5%', y: '50%', delay: 2 },
        { icon: Layers, label: 'Stack', x: '92%', y: '50%', delay: 2.5 },
    ];

    // Code snippet lines for animation
    const codeLines = [
        { text: 'const developer = {', color: '#c792ea' },
        { text: '  name: "Saison",', color: '#82aaff' },
        { text: '  skills: ["React", "Java", "Node"],', color: '#c3e88d' },
        { text: '  passion: "Building solutions"', color: '#ffcb6b' },
        { text: '};', color: '#c792ea' },
    ];

    return (
        <section className="hero" id="home">
            {/* Animated Background Glow */}
            <motion.div
                className="hero-bg-glow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Floating Particles */}
            <div className="hero-particles">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="particle" />
                ))}
            </div>

            {/* Floating Tech Icons */}
            <div className="floating-tech-icons">
                {techIcons.map((tech, i) => (
                    <motion.div
                        key={tech.label}
                        className="floating-icon"
                        style={{ left: tech.x, top: tech.y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 0.3,
                            scale: 1,
                            y: [0, -15, 0],
                        }}
                        transition={{
                            opacity: { delay: tech.delay, duration: 0.5 },
                            scale: { delay: tech.delay, duration: 0.5 },
                            y: {
                                delay: tech.delay + 0.5,
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.2,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <tech.icon size={28} />
                        <span className="icon-label">{tech.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Connection Lines Animation */}
            <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    d="M 10 50 Q 30 30, 50 50 T 90 50"
                    stroke="url(#gradient1)"
                    strokeWidth="0.3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M 20 20 Q 50 50, 80 20"
                    stroke="url(#gradient2)"
                    strokeWidth="0.2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>
            </svg>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    variants={itemVariants}
                    className="hero-tagline"
                >
                    Hey, I’m
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="hero-title"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Saison<span className="logo-dot">.</span>
                </motion.h1>

                {/* Typing Animation for Role */}
                <motion.div
                    variants={itemVariants}
                    className="typing-container"
                >
                    <span className="typing-text">{typedText}</span>
                    <span className="typing-cursor">|</span>
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="hero-subtitle"
                >
                    I build scalable applications with an engineering mindset.
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}
                >
                  
                </motion.p>

                {/* Tech Stack Pills */}
                <motion.div
                    className="tech-stack-pills"
                    variants={itemVariants}
                >
                    {['React', 'Java', 'Node.js', 'MySQL', 'REST API'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            className="tech-pill"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                            whileHover={{
                                scale: 1.1,
                                y: -3,
                                boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)"
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="hero-cta"
                >
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                <div className="hero-socials">
                    {[
                        { icon: Github, href: "#", label: "GitHub" },
                        { icon: Linkedin, href: "#", label: "LinkedIn" },
                        { icon: Mail, href: "#", label: "Email" }
                    ].map((social, i) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            className="nav-link"
                            custom={i}
                            variants={socialVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.3,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={social.label}
                        >
                            <social.icon size={22} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
