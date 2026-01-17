import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050f19] border-t border-[#2d3e4f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-[#3ecf8e] font-bold  mb-2 ">
              Portfolio
            </h3>
            <p className="text-[#94a3b8]">
              Full-stack developer creating amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              {[
                { label: 'GitHub', url: 'https://github.com/FazrinNugraha' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/' },
                { label: 'Email', url: 'nugrahafadzrin@gmail.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2d3e4f] py-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#94a3b8] text-sm">
              &copy; {currentYear} All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-[#3ecf8e]" /> using{' '}
              <span className="text-[#3ecf8e] font-semibold">Astro.js</span>
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              className="text-[#94a3b8] hover:text-[#3ecf8e] transition-colors duration-300 mt-4 md:mt-0"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
