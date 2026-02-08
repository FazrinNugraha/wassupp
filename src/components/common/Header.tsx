import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('/');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        // Set active item based on current path
        if (typeof window !== 'undefined') {
            setActiveItem(window.location.pathname);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'HOME', href: '/' },
        { label: 'PROJECTS', href: '/projects' },
        { label: 'JOURNEY', href: '/journey' },
        { label: 'SKILLS', href: '/skills' },
        { label: 'CONTACT', href: '/contact' },
    ];

    const handleNavClick = (href: string) => {
        setActiveItem(href);
    };

    const isDark = theme === 'dark';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? isDark
                    ? 'glass border-b border-gray-800 shadow-lg'
                    : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
                : isDark
                    ? 'bg-[#1A1A1A]/95 backdrop-blur-sm'
                    : 'bg-gray-50/95 backdrop-blur-sm'
                }`}
        >
            {/* Desktop Navigation */}
            <nav className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    {/* Desktop Menu - Centered */}
                    <div className="flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${activeItem === item.href
                                        ? isDark ? 'text-white' : 'text-gray-900'
                                        : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dark Mode Toggle (Desktop) */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`transition-colors p-1 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Horizontal Scrollable */}
            <nav className="md:hidden">
                <div className={`flex items-center justify-between h-14 px-4 ${isDark ? 'border-b border-gray-800/50' : 'border-b border-gray-200'}`}>
                    {/* Scrollable Menu Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex-1 overflow-x-auto scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        <div className="flex items-center space-x-6 px-1 min-w-max">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`text-sm font-medium tracking-wide whitespace-nowrap py-4 transition-all duration-300 ${activeItem === item.href
                                        ? isDark ? 'text-white' : 'text-gray-900'
                                        : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-700'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dark Mode Toggle (Mobile) */}
                    <button
                        onClick={toggleTheme}
                        className={`transition-colors p-2 ml-2 shrink-0 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
