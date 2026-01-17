import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', 'JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },

      colors: {
        supabase: {
          dark: '#050f19',
          surface: '#0f172a',
          surface_light: '#1a2332',
          border: '#2d3e4f',
          text: '#f1f5f9',
          text_muted: '#94a3b8',
          accent: '#3ecf8e',
          accent_light: '#5edeb3',
          accent_dark: '#2ab47d',
        },
      },

      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
