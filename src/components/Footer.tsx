import React from "react";

export default function Footer() {
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
    <footer className="bg-[#141414] text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-5">
        <div className="border-t-2 border-[#262626] pt-8"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-16 pt-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl text-black dark:text-white font-bold mb-4">
              Let's Connect
            </h2>

            <p className="text-[#A3A3A3] dark:text-gray-300 mb-6">
              If you want to get in touch with me about something or just to say hi,
              reach out on social media or send me an email.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2 text-[#A3A3A3] dark:text-gray-300">
              {socialLinks.map((social, index) => (
                <React.Fragment key={social.label}>

                  <a
                    href={social.url}
                    target={social.url.startsWith('/') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="border-b border-gray-400 dark:border-gray-500 hover:border-white dark:hover:border-white hover:text-white dark:hover:text-white transition-all duration-300 pb-[1px]"
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
        <div className="border-t-2 border-[#262626] pt-12">

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} All rights reserved build with{" "}
              <strong>Astro.Js</strong>
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
