import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Projects from './Projects';
import JourneyPage from './JourneyPage';
import Skills from './Skills';
import Contact from './Contact';

type PageType = 'home' | 'projects' | 'journey' | 'skills' | 'contact';

interface AppWrapperProps {
    page: PageType;
}

export default function AppWrapper({ page }: AppWrapperProps) {
    return (
        <ThemeProvider>
            {/* Background color handled by global.css (body/html) to prevent flash */}
            <div className="min-h-screen transition-colors duration-300">
                <Header />
                <main className="flex-grow">
                    {page === 'home' && <HomePage />}
                    {page === 'projects' && <Projects />}
                    {page === 'journey' && <JourneyPage />}
                    {page === 'skills' && <Skills />}
                    {page === 'contact' && <Contact />}
                </main>
                {page === 'home' && <Footer />}
            </div>
        </ThemeProvider>
    );
}
