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
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-black dark:text-white font-bold  mb-2 ">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full-stack developer creating amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Social</h4>
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
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-black dark:text-white" /> using{' '}
              <span className="text-black dark:text-white font-semibold">Astro.js</span>
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 mt-4 md:mt-0"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
