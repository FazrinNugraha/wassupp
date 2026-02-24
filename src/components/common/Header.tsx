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
        { label: 'BLOG', href: '/blog' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? 'shadow-lg' : ''}`}
            style={{
                backgroundColor: isScrolled ? 'var(--header-scrolled-bg)' : 'var(--header-bg)',
                borderBottom: isScrolled ? '1px solid var(--header-scrolled-border)' : 'none',
            }}
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
                                    className="text-sm font-medium tracking-wide transition-colors duration-300"
                                    style={{
                                        color: activeItem === item.href
                                            ? 'var(--nav-text-active)'
                                            : 'var(--nav-text)',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeItem !== item.href) {
                                            e.currentTarget.style.color = 'var(--nav-text-hover)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeItem !== item.href) {
                                            e.currentTarget.style.color = 'var(--nav-text)';
                                        }
                                    }}
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
                            className="transition-colors p-1"
                            style={{ color: 'var(--toggle-text)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--toggle-hover)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--toggle-text)'; }}
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Horizontal Scrollable */}
            <nav className="md:hidden">
                <div
                    className="flex items-center justify-between h-14 px-4"
                    style={{ borderBottom: '1px solid var(--border-color)' }}
                >
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
                                    className="text-sm font-medium tracking-wide whitespace-nowrap py-4 transition-all duration-300"
                                    style={{
                                        color: activeItem === item.href
                                            ? 'var(--nav-text-active)'
                                            : 'var(--nav-text)',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeItem !== item.href) {
                                            e.currentTarget.style.color = 'var(--nav-text-hover)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeItem !== item.href) {
                                            e.currentTarget.style.color = 'var(--nav-text)';
                                        }
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dark Mode Toggle (Mobile) */}
                    <button
                        onClick={toggleTheme}
                        className="transition-colors p-2 ml-2 shrink-0"
                        style={{ color: 'var(--toggle-text)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--toggle-hover)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--toggle-text)'; }}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
