import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SEO from "../components/seo";

import 'typeface-pt-sans';
import "../styles/design-system.css";
import "../styles/page-transition.css";
import { initAllAnimations } from "../utils/animations";

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initAllAnimations();
  }, []);

  const projects = [
    {
      title: "UangCermat",
      description: "Finance Service Mobile App built with React Native. Features secure transactions, financial tracking, and internal user management.",
      longDescription: "A comprehensive mobile application for financial management. Implements secure authentication, transaction processing, budget tracking, and detailed financial reporting. Built with React Native and TypeScript for cross-platform compatibility.",
      tags: ["React Native", "TypeScript", "Finance", "Mobile"],
      link: "#",
      type: "Mobile App"
    },
    {
      title: "KerjaCermat",
      description: "HRIS Mobile Application for employee management, attendance, and payroll. Integrated with web dashboard.",
      longDescription: "An employee management solution featuring geolocation-based attendance, leave requests, payroll viewing, and company announcements. Seamlessly integrated with the HRIS web dashboard.",
      tags: ["React Native", "HRIS", "Android/iOS", "Redux"],
      link: "#",
      type: "Mobile App"
    },
    {
      title: "Tokodistributor PWA",
      description: "B2B Marketplace with PWA integration, optimized performance (Lighthouse score > 90), and dynamic SEO implementation.",
      longDescription: "Revamped the existing B2B marketplace to a Progressive Web App using React.js. Achieved significant performance improvements (PageSpeed 35 to 90), implemented dynamic SEO with Helmet, and added offline capabilities.",
      tags: ["React.js", "PWA", "SEO", "Redux", "Performance"],
      link: "https://tokodistributor.com",
      type: "Web App"
    },
    {
      title: "Internal HRIS Dashboard",
      description: "Comprehensive web dashboard for HR management using Next.js. Features complex data visualization and reporting.",
      longDescription: "A complex administrative dashboard for HR professionals. Features include employee data management, payroll processing, attendance analytics, and role-based access control. Built with Next.js for server-side rendering and performance.",
      tags: ["Next.js", "Web", "Dashboard", "Analytics"],
      link: "#",
      type: "Web App"
    },
    {
      title: "Tokodistributor Mobile Reseller",
      description: "Mobile web application for resellers with Framework7 React. Integrated chatting features and custom shipping.",
      longDescription: "A specialized mobile web view for resellers. Integrated third-party chat (Qiscus), custom expedition checks, auto-receipt generation, and complaint handling features.",
      tags: ["React", "Framework7", "Mobile Web", "Integration"],
      link: "https://m.tokodistributor.com",
      type: "Mobile Web"
    },
    {
      title: "React JS ID Website",
      description: "Open source contribution to the Indonesian React community website.",
      longDescription: "Contributed to the development and maintenance of the React JS Indonesia community website. Fixed conflict commits and improved localization/translation features.",
      tags: ["React", "Open Source", "Community"],
      link: "https://reactjs.id",
      type: "Open Source"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent-primary)] selection:text-white overflow-x-hidden">
      <SEO
        title="Projects"
        description="Explore my portfolio of web and mobile development projects including UangCermat, KerjaCermat, Tokodistributor, and more."
        pathname="/projects/"
      />
      
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Scroll Progress */}
        <div className="scroll-progress"></div>

        {/* Hero Section */}
        <section className="px-4 text-center reveal-on-scroll mb-16 relative">
          <div className="max-w-4xl mx-auto">
             <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-sm font-medium animate-fade-in">
              My Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-title">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl mb-8 hero-subtitle text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A collection of my professional work in fintech, e-commerce, and HRIS systems. 
              Focusing on performance, user experience, and scalable architecture.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {projects.map((project, index) => (
                <article 
                  key={index}
                  className="card card-3d card-glow-border reveal-on-scroll flex flex-col h-full"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge>{project.type}</Badge>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="mb-4 text-[var(--color-accent-secondary)] font-medium">
                    {project.description}
                  </p>
                  
                  <p className="text-sm mb-6 text-[var(--color-text-secondary)] flex-grow leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: 'var(--color-surface-hover)',
                          color: 'var(--color-text-primary)',
                          border: '1px solid var(--color-border)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  {project.link !== "#" && (
                     <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary w-full justify-center group-hover:border-[var(--color-accent-primary)] group-hover:text-[var(--color-accent-primary)]"
                        >
                          View Project
                        </a>
                     </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 reveal-on-scroll mt-12">
          <div className="max-w-3xl mx-auto text-center bg-[var(--color-surface)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Interested in collaboration?
            </h2>
            <p className="text-lg mb-8 text-[var(--color-text-secondary)]">
              I'm currently working on some exciting projects but always open to discussing new opportunities.
            </p>
            <a 
              href="mailto:andrel.sitanggang@gmail.com" 
              className="btn btn-primary btn-fancy animate-pulse-glow inline-flex items-center gap-2"
            >
              <span>📧</span> Get In Touch
            </a>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-[var(--color-accent-primary)]/20 text-[var(--color-accent-primary)] mb-2 inline-block">
    {children}
  </span>
);

export default ProjectsPage;
