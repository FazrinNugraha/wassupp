import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./common/Header";
import Footer from "./common/Footer";

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import("./pages/HomePage"));
const Projects = lazy(() => import("./projects"));
const JourneyPage = lazy(() => import("./pages/JourneyPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

//lazy load for blog
const AstroForPortfolio = lazy(
  () => import("./pages/blog/AstroForPortfolio"));

const GetStartedWithReact = lazy(
  () => import("./pages/blog/GetStartedWithReact"),
);

const BuildingRealWorldProjects = lazy(
  () => import("./pages/blog/BuildingRealWorldProjects"),
);

//lazy load for journey
const BootcampRevouFundamental = lazy(
  () => import("./pages/journey/BootcampRevouFundamental"),
);
const GettingHandsOnWithMySQL = lazy(
  () => import("./pages/journey/GettingHandsOnWithMySQL"),
);
const MernStackLearning = lazy(
  () => import("./pages/journey/MernStackLearning"),
);
const HackathonAmarathaFinalist = lazy(
  () => import("./pages/journey/HackathonAmarathaFinalist"),
);
const BuildingAIPoweredWebApp = lazy(
  () => import("./pages/journey/BuildingAIPoweredWebApp"),
);
const DBSCodingCampAIEngineer = lazy(
  () => import("./pages/journey/DBSCodingCampAIEngineer"),
);
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

type PageType =
  | "home"
  | "projects"
  | "journey"
  | "journey_detail"
  | "skills"
  | "contact"
  | "blog"
  | "blog_detail";

interface AppWrapperProps {
  page: PageType;
  blogSlug?: string;
  journeySlug?: string;
}

export default function AppWrapper({
  page,
  blogSlug,
  journeySlug,
}: AppWrapperProps) {
  const renderBlogDetail = () => {
    switch (blogSlug) {
      case "getting-started-with-react":
        return <GetStartedWithReact />;
      case "building-real-world-projects":
        return <BuildingRealWorldProjects />;
      case "why-astro-for-portfolio":
        return <AstroForPortfolio />;
      default:
        return null;
    }
  };

  const renderJourneyDetail = () => {
    switch (journeySlug) {
      case "bootcamp-revou-fundamental":
        return <BootcampRevouFundamental />;
      case "getting-hands-on-with-mysql":
        return <GettingHandsOnWithMySQL />;
      case "mern-stack-learning":
        return <MernStackLearning />;
      case "hackathon-amaratha-finalist":
        return <HackathonAmarathaFinalist />;
      case "building-ai-powered-web-app":
        return <BuildingAIPoweredWebApp />;
      case "dbs-coding-camp-ai-engineer":
        return <DBSCodingCampAIEngineer />;
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
            {page === "home" && <HomePage />}
            {page === "projects" && <Projects />}
            {page === "blog" && <BlogPage />}
            {page === "blog_detail" && renderBlogDetail()}
            {page === "journey" && <JourneyPage />}
            {page === "journey_detail" && renderJourneyDetail()}
            {page === "skills" && <Skills />}
            {page === "contact" && <Contact />}
          </Suspense>
        </main>
        {page === "home" && <Footer />}
      </div>
    </ThemeProvider>
  );
}
