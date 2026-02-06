import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import('./HomePage'));
const Projects = lazy(() => import('./Projects'));
const JourneyPage = lazy(() => import('./JourneyPage'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));

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
                <main className="grow">
                    <Suspense fallback={<div className="min-h-screen"></div>}>
                        {page === 'home' && <HomePage />}
                        {page === 'projects' && <Projects />}
                        {page === 'journey' && <JourneyPage />}
                        {page === 'skills' && <Skills />}
                        {page === 'contact' && <Contact />}
                    </Suspense>
                </main>
                {page === 'home' && <Footer />}
            </div>
        </ThemeProvider>
    );
}
