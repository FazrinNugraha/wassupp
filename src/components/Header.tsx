import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

return (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-[#2d3e4f] shadow-lg' : 'bg-transparent'
    }`}
  >
    <nav className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-xl font-bold text-[#3ecf8e] hover:text-[#2eb67d] transition-colors whitespace-nowrap"
        >
          Muhamad Fazrin Nugraha
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 ">
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-centern justify-end space-x-4 w-64">
          <a
            href="https://github.com/FazrinNugraha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/muhamad-fazrin-nugraha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nugrahafadzrin@gmail.com"
            className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-[#2d3e4f] space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-[#94a3b8] hover:text-[#3ecf8e] hover:bg-[#1a1a2e] rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-[#2d3e4f]">
            <a
              href="https://github.com/FazrinNugraha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muhamad-fazrin-nugraha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nugrahafadzrin@gmail.com"
              className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  </header>
  );
}