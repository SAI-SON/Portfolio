import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-content">
                <motion.div
                    className="footer-brand"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="footer-logo">Saison<span className="logo-dot">.</span></span>
                </motion.div>

                <motion.div
                    className="footer-social"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            className="footer-social-link"
                            aria-label={social.label}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: 'var(--accent-primary)'
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <social.icon size={18} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.p
                    className="footer-credit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Designed & Built with{' '}
                    <motion.span
                        style={{ display: 'inline-block' }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        <Heart size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
                    </motion.span>
                    {' '}by Saison
                </motion.p>

                <motion.p
                    className="footer-copyright"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    © {currentYear} All rights reserved.
                </motion.p>
            </div>

            {/* Animated background line */}
            <motion.div
                className="footer-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            />
        </motion.footer>
    );
};

export default Footer;
