import React from 'react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/FazrinNugraha',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nugrahafazrinn?igsh=MXdkeXluZHM0cnN6dA',
    },
    {
      name: 'Whatsaap',
      url: 'https://wa.me/6289636507448',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 bg-[#141414] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <line x1="0" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="2"/>
          <line x1="400" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="2"/>
          <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="2"/>
          <rect x="100" y="100" width="200" height="200" stroke="currentColor" strokeWidth="1"/>
          <rect x="150" y="150" width="100" height="100" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Let's Talk */}
        <div className="text-left mb-16 md:mb-20">
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4">Let's Talk</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 md:mb-8 break-words">
            nugrahafadzrin@gmail.com
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl">
            I read every email. Expect a reply within a few days.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mb-8 md:mb-12" />

        {/* Elsewhere */}
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">
            Elsewhere
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-base md:text-lg"
              >
                {link.name}
                {index < socialLinks.length - 1 && <span className="hidden md:inline ml-6 text-gray-300 dark:text-gray-700">|</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
