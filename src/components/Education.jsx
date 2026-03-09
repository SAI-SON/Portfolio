import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const educationData = [
    {
        year: '2023 - Present',
        degree: 'Bachelor of Engineering (B.E)',
        institution: 'Nandha Engineering College',
        status: 'Currently in 3rd Year',
        description: 'Focusing on core Computer Science and Engineering principles, data structures, and algorithm design.',
        icon: GraduationCap
    },
    {
        year: '2024 - Present',
        degree: 'Full Stack Web Development Training',
        institution: 'IFC, Bhavani',
        status: 'Professional Certification',
        description: 'Intensive training on modern web technologies including React, Node.js, and Advanced Java.',
        icon: Award
    }
];

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardVariants = {
        hidden: (index) => ({
            opacity: 0,
            x: index % 2 === 0 ? 80 : -80,
            rotateY: index % 2 === 0 ? 15 : -15
        }),
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="education" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Educational Journey
            </motion.h2>

            <div className="timeline">
                {educationData.map((edu, index) => (
                    <div key={index} className="timeline-item">
                        <motion.div
                            className="timeline-dot"
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{
                                delay: index * 0.3,
                                type: "spring",
                                stiffness: 300,
                                damping: 15
                            }}
                        />
                        <motion.div
                            className="glass-card timeline-content"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.span
                                className="timeline-date"
                                initial={{ opacity: 0, y: -10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.2 }}
                            >
                                {edu.year}
                            </motion.span>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                <motion.div
                                    className="timeline-icon"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <edu.icon size={20} />
                                </motion.div>
                                <h3>{edu.degree}</h3>
                            </div>

                            <motion.p
                                style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.2 }}
                            >
                                {edu.institution}
                            </motion.p>

                            <motion.p
                                style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.2 }}
                            >
                                {edu.status}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.2 }}
                            >
                                {edu.description}
                            </motion.p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
