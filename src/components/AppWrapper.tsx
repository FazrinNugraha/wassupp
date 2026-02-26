import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './common/Header';
import Footer from './common/Footer';

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const Projects = lazy(() => import('./projects'));
const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const GetStartedWithReact = lazy(() => import('./pages/blog/GetStartedWithReact'));
const DivingIntoAI = lazy(() => import('./pages/blog/DivingIntoAI'));
const BuildingRealWorldProjects = lazy(() => import('./pages/blog/BuildingRealWorldProjects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

type PageType = 'home' | 'projects' | 'journey' | 'skills' | 'contact' | 'blog' | 'blog_detail';

interface AppWrapperProps {
    page: PageType;
    blogSlug?: string;
}

export default function AppWrapper({ page, blogSlug }: AppWrapperProps) {
    const renderBlogDetail = () => {
        switch (blogSlug) {
            case 'getting-started-with-react':
                return <GetStartedWithReact />;
            case 'diving-into-ai':
                return <DivingIntoAI />;
            case 'building-real-world-projects':
                return <BuildingRealWorldProjects />;
            default:
                return null;
        }
    };

    return (
        <ThemeProvider>
            {/* Background color handled by global.css (body/html) to prevent flash */}
            <div className="min-h-screen transition-colors duration-300">
                <Header />
                <main className="grow">
                    <Suspense fallback={<div className="min-h-screen"></div>}>
                        {page === 'home' && <HomePage />}
                        {page === 'projects' && <Projects />}
                        {page === 'blog' && <BlogPage />}
                        {page === 'blog_detail' && renderBlogDetail()}
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
