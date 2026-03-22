import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipient = 'saisonavm1997@gmail.com';
        const subject = `Portfolio contact from ${formData.name || 'Website Visitor'}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

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

    const contactInfo = [
        { icon: Mail, text: 'saisonavm1997@gmail.com', label: 'Email', href: 'mailto:saisonavm1997@gmail.com' },
        { icon: Phone, text: '+91 9182736455', label: 'Phone', href: 'tel:+919182736455' },
        { icon: MapPin, text: 'Erode, Tamil Nadu', label: 'Location' }
    ];

    return (
        <section id="contact" ref={ref}>
            <div className="contact-container">
                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.span
                        className="hero-tagline"
                        style={{ textAlign: 'center', display: 'block' }}
                        variants={itemVariants}
                    >
                        What's Next?
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        className="contact-desc"
                        variants={itemVariants}
                    >
                        I'm currently looking for new opportunities, specifically internships and junior developer roles.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    <motion.div
                        className="glass-card contact-form-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <motion.div
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 }}
                            >
                                <label>Your Name</label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                <label>Your Email</label>
                                <motion.input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 }}
                            >
                                <label>Message</label>
                                <motion.textarea
                                    name="message"
                                    className="form-input"
                                    rows="5"
                                    placeholder="Let's build something together..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary contact-btn"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                                <motion.span
                                    style={{ display: 'inline-block', marginLeft: '8px' }}
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5, rotate: -15 }}
                                >
                                    <Send size={18} style={{ verticalAlign: 'middle' }} />
                                </motion.span>
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="contact-info-item"
                                whileHover={{
                                    scale: 1.05,
                                    y: -3
                                }}
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.9 + index * 0.1 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon size={20} />
                                </motion.div>
                                {item.href ? (
                                    <a href={item.href} className="contact-info-link">{item.text}</a>
                                ) : (
                                    <span>{item.text}</span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
