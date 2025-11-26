import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SEO from "../components/seo";

import 'typeface-pt-sans';
import "../styles/design-system.css";
import "../styles/page-transition.css";
import { initAllAnimations } from "../utils/animations";

const ProfilePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initAllAnimations();
  }, []);

  const experiences = [
    {
      company: "PT Gajicermat Mandiri Digital Indonesia",
      role: "Frontend Developer",
      period: "Jan 2022 - Present",
      location: "Jakarta Selatan, Jakarta Raya, Indonesia",
      description: "Frontend Developer focusing on Finance and HRIS Services.",
      achievements: [
        "Developed Two Mobile Apps project using React Native for Finance Service (UangCermat & Internal App).",
        "Built Two Web Apps using Next.js for Finance Service (Internal Users).",
        "Developed A Web App using React.js for Finance Service.",
        "Created 2 Web Apps using Next.js for HRIS Service.",
        "Built 3 Mobile Apps using React Native for HRIS Service (KerjaCermat & 2 Internal Apps).",
        "Finished a fast-paced Epic Ticket in two weeks to build a new app for financial service."
      ],
      stack: ["React Native", "TypeScript", "Formik", "React Query", "Next.js"]
    },
    {
      company: "Tokodistributor",
      role: "Frontend Web Developer",
      period: "Apr 2019 - Dec 2021",
      location: "Jakarta, Jakarta Raya, Indonesia",
      description: "Responsible for B2B Marketplace Web & Mobile development.",
      achievements: [
        "Integrated PWA using Framework7 React.",
        "Improved Web Reseller Performance (PageSpeed) significantly (e.g., Homepage 35 -> 80, Product Detail 62 -> 91).",
        "Optimized SEO with schema markup and dynamic meta tags.",
        "Rewrote Web Desktop to React 16 including multiple modules (Cart, Chat, SEO, Offline mode).",
        "Implemented State Management using Redux and React Hooks.",
        "Rewrote Mobile Web Modules to Vue.js.",
        "Integrated chat features (Qiscus) and custom expedition services."
      ],
      stack: ["React 16", "Redux", "Framework7", "Vue.js", "PWA", "SEO"]
    },
    {
      company: "Satu Pintu Kemenparekraf",
      role: "React Developer",
      period: "May 2021 - May 2021",
      location: "Jakarta Timur",
      description: "Freelance project to repair existing platform.",
      stack: ["React.js", "Web Development"]
    },
    {
      company: "Skillomo",
      role: "React Developer",
      period: "Apr 2021 - Apr 2021",
      location: "Jakarta Timur",
      description: "Initiated Skillomo React.js Learner platform.",
      stack: ["React.js"]
    },
    {
      company: "Open Source",
      role: "Individual Contributor",
      period: "Jul 2020 - Apr 2021",
      description: "Active contributor to various open source projects.",
      achievements: [
        "React JS ID - Community contribution.",
        "DuckDuckGo - Indonesian Translations.",
        "Vest - Added __DEV__ = true to development build.",
        "Hospital Run - UI Translation Fixes."
      ],
      stack: ["Open Source", "GitHub", "Translations"]
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent-primary)] selection:text-white overflow-x-hidden">
      <SEO
        title="Profile"
        description="Learn more about Andrel Karunia Sitanggang, a Frontend Developer with experience in React, React Native, and Next.js."
        pathname="/profile/"
      />
      
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Scroll Progress */}
        <div className="scroll-progress"></div>

        {/* Hero Bio */}
        <section className="px-4 mb-20 reveal-on-scroll">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full mb-8 flex items-center justify-center text-5xl shadow-glow animate-float">
              👨‍💻
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Andrel Karunia Sitanggang
            </h1>
            <h2 className="text-xl md:text-2xl text-[var(--color-accent-primary)] mb-8 font-medium">
              Frontend Developer & Mobile Specialist
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-8">
              I am a passionate software developer with over 5 years of experience in building high-quality web and mobile applications. 
              My expertise lies in the React ecosystem (React.js, React Native, Next.js) where I strive to create performant, 
              accessible, and user-centric digital experiences. I love solving complex problems and continuously learning new technologies.
            </p>
             <div className="flex justify-center gap-4">
              <a href="/#contact" className="btn btn-primary btn-fancy">Contact Me</a>
              <a href="https://github.com/gaweki" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Profile</a>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12 reveal-on-scroll">
              <span className="text-3xl mr-4">🚀</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Professional Experience</h2>
            </div>

            <div className="relative border-l-2 border-[var(--color-border)] ml-4 md:ml-8 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-12 reveal-on-scroll">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent-primary)] shadow-glow"></div>
                  
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent-primary)] transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{exp.company}</h3>
                        <p className="text-[var(--color-accent-primary)] font-medium text-lg">{exp.role}</p>
                      </div>
                      <div className="text-sm text-[var(--color-text-muted)] font-mono mt-2 md:mt-0 bg-[var(--color-surface-elevated)] px-3 py-1 rounded-full inline-block">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-[var(--color-text-secondary)] mb-2 italic">{exp.location}</p>
                    <p className="text-[var(--color-text-primary)] mb-4">{exp.description}</p>
                    
                    {exp.achievements && (
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-[var(--color-text-secondary)] text-sm">
                            <span className="mr-2 text-[var(--color-accent-primary)]">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-4 mb-20 reveal-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="text-3xl mr-4">🎓</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Education</h2>
            </div>
            
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 card-glow-border">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Universitas Gadjah Mada (UGM)</h3>
                  <p className="text-[var(--color-accent-secondary)] text-lg">Associate's degree, Elektronika dan Instrumentasi</p>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] font-mono mt-2 md:mt-0 bg-[var(--color-surface-elevated)] px-3 py-1 rounded-full">
                  2013 - 2017
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                <strong>Activities:</strong> BEM KM UGM, Gadjah Mada Menginspirasi, Paguyuban SOSMAS UGM
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ProfilePage;
