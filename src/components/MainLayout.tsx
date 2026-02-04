// import React from 'react';
// import AppWrapper from './AppWrapper';
// import Header from './Header';
// import Footer from './Footer';
// import HomePage from './HomePage';
// import Projects from './Projects';
// import JourneyPage from './JourneyPage';
// import Skills from './Skills';
// import Contact from './Contact';

// type PageType = 'home' | 'projects' | 'journey' | 'skills' | 'contact';

// interface MainLayoutProps {
//     page: PageType;
// }

// export default function MainLayout({ page }: MainLayoutProps) {
//     return (
//         <AppWrapper>
//             <Header />
//             <main className="flex-grow">
//                 {page === 'home' && <HomePage />}
//                 {page === 'projects' && <Projects />}
//                 {page === 'journey' && <JourneyPage />}
//                 {page === 'skills' && <Skills />}
//                 {page === 'contact' && <Contact />}
//             </main>
//             <Footer />
//         </AppWrapper>
//     );
// }
