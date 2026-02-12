import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { label: "github", url: "https://github.com/FazrinNugraha" },
        {
            label: "linkedin",
            url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
        },
        {
            label: "gmail",
            url: "/contact",
        },
    ];

    return (
        <footer className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-8">
                {/* Footer Content */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t-2 pt-12 ${isDark ? 'border-[#262626]' : 'border-gray-200'}`}>

                    {/* Brand */}
                    <div>
                        <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Let's Connect
                        </h2>

                        <p className={`mb-6 text-justify leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                            If you want to get in touch with me about something or just to say hi,
                            reach out on social media or send me an email.
                        </p>

                        {/* Social Links */}
                        <div className={`flex flex-wrap items-center gap-2 ${isDark ? 'text-[#A3A3A3]' : 'text-gray-600'}`}>
                            {socialLinks.map((social, index) => (
                                <React.Fragment key={social.label}>

                                    <a
                                        href={social.url}
                                        target={social.url.startsWith('/') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className={`border-b transition-all duration-300 pb-px ${isDark
                                            ? 'border-gray-500 hover:border-white hover:text-white'
                                            : 'border-gray-400 hover:border-black hover:text-black hover:font-semibold'
                                            }`}
                                    >
                                        {social.label}
                                    </a>

                                    {index !== socialLinks.length - 1 && (
                                        <span className="mx-1">/</span>
                                    )}

                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`space-y-6 border-t-2 pt-12 ${isDark ? 'border-[#262626]' : 'border-gray-200'}`}>

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            &copy; {currentYear} All rights reserved build with{" "}
                            <strong>Astro.Js</strong>
                        </p>

                        {/* Back to Top */}
                        <a
                            href="#home"
                            className={`transition-colors duration-300 mt-4 md:mt-0 ${isDark
                                ? 'text-gray-300 hover:text-white'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            ↑ Back to top
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}
