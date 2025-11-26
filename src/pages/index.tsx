import { useEffect, useState } from "react";
import 'typeface-pt-sans';
import Footer from "../components/footer";
import Header from "../components/header";
import SEO from "../components/seo";
import "../styles/design-system.css";
import "../styles/page-transition.css";
import { initAllAnimations } from "../utils/animations";

// --- Data ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Andrel Karunia Sitanggang",
    role: "Frontend Developer & Mobile Specialist",
    description: "Experienced Frontend Developer specializing in React.js, Next.js, and React Native. Passionate about building high-performance web and mobile applications with clean code and intuitive user experiences.",
    email: "andrel.sitanggang@gmail.com",
    address: "Jakarta Selatan, Jakarta Raya, Indonesia",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sitanggangandrel/", icon: "💼" },
      { name: "GitHub", url: "https://github.com/gaweki", icon: "🐙" },
      { name: "Twitter", url: "https://twitter.com/functionandrel", icon: "🐦" },
      { name: "Instagram", url: "https://www.instagram.com/andrelst.g", icon: "📸" }
    ]
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Page Speed Score", value: "90+" }
  ],
  skills: [
    "React.js", "React Native", "Next.js", "TypeScript", "Redux", "React Query",
    "Formik", "Tailwind CSS", "Node.js", "SEO Optimization", "PWA", "Performance Tuning"
  ],
  experience: [
    {
      company: "PT Gajicermat Mandiri Digital Indonesia",
      role: "Frontend Developer",
      period: "Jan 2022 - Present",
      location: "Jakarta Selatan",
      current: true,
      desc: "Leading frontend development for Finance and HRIS services using Next.js and React Native. Delivered multiple web and mobile apps including UangCermat and KerjaCermat."
    },
    {
      company: "Tokodistributor",
      role: "Frontend Web Developer",
      period: "Apr 2019 - Dec 2021",
      location: "Jakarta",
      url: "https://tokodistributor.com",
      desc: "Revamped main platform to React 16, improved PageSpeed from 35 to 90, and implemented PWA features. Optimized SEO and integrated chat features."
    },
    {
      company: "Satu Pintu Kemenparekraf",
      role: "React Developer",
      period: "May 2021 - May 2021",
      location: "Jakarta Timur",
      desc: "Freelance project to repair and optimize existing platform."
    },
    {
      company: "Skillomo",
      role: "React Developer",
      period: "Apr 2021 - Apr 2021",
      location: "Jakarta Timur",
      desc: "Initiated React.js learner platform development."
    }
  ],
  education: [
    {
      school: "Universitas Gadjah Mada (UGM)",
      period: "2013 - 2017",
      degree: "Associate's degree, Elektronika dan Instrumentasi",
      activities: "BEM KM UGM, Gadjah Mada Menginspirasi, Paguyuban SOSMAS UGM"
    }
  ],
  openSource: [
    { project: "React JS ID", desc: "Community contributions and translations" },
    { project: "DuckDuckGo", desc: "Indonesian Language Translations" },
    { project: "Vest", desc: "Contributed to issue #310 (Add __DEV__)", url: "https://github.com/ealush/vest/issues/310" },
    { project: "Hospital Run", desc: "Frontend fixes and UI improvements", url: "https://github.com/HospitalRun/hospitalrun-frontend" }
  ],
  projects: [
    {
      title: "UangCermat",
      desc: "Finance Service Mobile App built with React Native. Features secure transactions, financial tracking, and internal user management.",
      tags: ["React Native", "TypeScript", "Finance"]
    },
    {
      title: "KerjaCermat",
      desc: "HRIS Mobile Application for employee management, attendance, and payroll. Integrated with web dashboard.",
      tags: ["React Native", "HRIS", "Android/iOS"]
    },
    {
      title: "Tokodistributor PWA",
      desc: "B2B Marketplace with PWA integration, optimized performance (Lighthouse score > 90), and dynamic SEO implementation.",
      tags: ["React.js", "PWA", "SEO"]
    },
    {
      title: "Internal HRIS Dashboard",
      desc: "Comprehensive web dashboard for HR management using Next.js. Features complex data visualization and reporting.",
      tags: ["Next.js", "Web", "Dashboard"]
    }
  ]
};

// --- Components ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center reveal-on-scroll">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
    <div className="h-1 w-20 bg-[var(--color-accent-primary)] mx-auto rounded-full mb-4 shadow-glow"></div>
    {subtitle && <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "", hoverEffect = true }) => (
  <div className={`
    bg-[var(--color-surface)] 
    border border-[var(--color-border)] 
    rounded-xl p-6 
    ${hoverEffect ? 'hover:border-[var(--color-accent-primary)] hover:shadow-lg hover:shadow-[var(--color-accent-primary)]/10 transform hover:-translate-y-1' : ''}
    transition-all duration-300 
    ${className}
  `}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/20">
    {children}
  </span>
);

// --- Main Page ---

const Homepage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initAllAnimations();
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent-primary)] selection:text-white overflow-x-hidden">
      <SEO title="Home" pathname="/" />
      
      <Header />

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 cursor-follow-container">
          {/* Background Gradients & Effects */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent-primary)]/10 rounded-full blur-[100px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent-secondary)]/10 rounded-full blur-[100px] animate-float"></div>
          <div className="cursor-glow"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-sm font-medium animate-fade-in">
              👋 Welcome to my portfolio
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">{PORTFOLIO_DATA.personal.name}</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              {PORTFOLIO_DATA.personal.role}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-300">
              <a href="#projects" className="btn btn-primary btn-fancy">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 border-y border-[var(--color-border)] bg-[var(--color-background-secondary)]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-children">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="p-4 reveal-on-scroll">
                  <div className="text-4xl font-bold text-white mb-2 text-gradient">{stat.value}</div>
                  <div className="text-[var(--color-text-muted)] uppercase tracking-wider text-sm font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Split */}
        <section id="profile" className="py-24 px-4 max-w-7xl mx-auto">
          <SectionTitle title="My Journey" subtitle="Professional experience and educational background" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div className="reveal-on-scroll">
              <div className="flex items-center mb-8">
                <span className="text-2xl mr-3">💼</span>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Experience</h3>
              </div>
              <div className="space-y-8 border-l-2 border-[var(--color-border)] ml-3 pl-8 relative">
                {PORTFOLIO_DATA.experience.map((job, idx) => (
                  <div key={idx} className="relative group">
                    <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[var(--color-background-primary)] transition-colors duration-300 ${job.current ? 'bg-[var(--color-accent-primary)]' : 'bg-[var(--color-surface-hover)] group-hover:bg-[var(--color-accent-primary)]'}`}></div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">{job.company}</h4>
                      {job.current && <Badge>Current</Badge>}
                    </div>
                    <p className="text-[var(--color-accent-secondary)] font-medium mb-2">{job.role}</p>
                    <div className="text-sm text-[var(--color-text-muted)] mb-3 font-mono">{job.period} • {job.location}</div>
                    <p className="text-[var(--color-text-secondary)] mb-3 text-sm leading-relaxed">{job.desc}</p>
                    {job.url && (
                      <a href={job.url} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] flex items-center gap-1 transition-colors">
                        Visit Website →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Open Source Column */}
            <div className="space-y-12 reveal-on-scroll">
              {/* Education */}
              <div>
                <div className="flex items-center mb-8">
                  <span className="text-2xl mr-3">🎓</span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Education</h3>
                </div>
                <div className="space-y-6">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <Card key={idx} className="flex flex-col card-glow-border">
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)]">{edu.school}</h4>
                      <p className="text-[var(--color-accent-secondary)]">{edu.degree}</p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1 font-mono">{edu.period}</p>
                      {edu.activities && <p className="text-sm text-[var(--color-text-secondary)] mt-2 italic">{edu.activities}</p>}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Open Source */}
              <div>
                <div className="flex items-center mb-8">
                  <span className="text-2xl mr-3">🌐</span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Open Source</h3>
                </div>
                <div className="grid gap-4">
                  {PORTFOLIO_DATA.openSource.map((os, idx) => (
                    <a key={idx} href={os.url || "#"} target={os.url ? "_blank" : "_self"} className="block group">
                      <Card className="py-4 px-5 flex justify-between items-center hover:bg-[var(--color-surface-hover)]">
                        <div>
                          <h5 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">{os.project}</h5>
                          <p className="text-sm text-[var(--color-text-secondary)]">{os.desc}</p>
                        </div>
                        {os.url && <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-primary)]">↗</span>}
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-[var(--color-surface)]/30 reveal-on-scroll">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Technologies" subtitle="My technical toolbelt" />
            <div className="flex flex-wrap justify-center gap-3 stagger-children">
              {PORTFOLIO_DATA.skills.map((skill, idx) => (
                <div key={idx} className="px-6 py-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] hover:shadow-glow transition-all duration-300 cursor-default text-[var(--color-text-secondary)] font-medium transform hover:-translate-y-1">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
          <SectionTitle title="Featured Projects" subtitle="Some of the things I've built" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-children">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <Card key={idx} className="flex flex-col h-full card-3d">
                <div className="h-48 bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-background-secondary)] rounded-lg mb-6 flex items-center justify-center text-5xl shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  💻
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <Badge key={tIdx}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact & Personal Details */}
        <section id="contact" className="py-24 px-4 max-w-4xl mx-auto reveal-on-scroll">
          <Card className="p-8 md:p-12 border-[var(--color-accent-primary)]/30 bg-[var(--color-surface)]/80 backdrop-blur-lg shadow-glow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-[var(--color-text-secondary)]">I'm currently open to new opportunities and collaborations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase mb-1 tracking-wider">Email</h4>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-lg text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase mb-1 tracking-wider">Location</h4>
                  <p className="text-lg text-[var(--color-text-primary)]">{PORTFOLIO_DATA.personal.address}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase mb-3 tracking-wider">Socials</h4>
                  <div className="flex gap-4">
                    {PORTFOLIO_DATA.personal.social.map((social, idx) => (
                      <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[var(--color-surface-elevated)] rounded-full hover:bg-[var(--color-accent-primary)] hover:text-white transition-all text-xl shadow-md hover:shadow-glow transform hover:scale-110" title={social.name}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] focus:outline-none text-white transition-all" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] focus:outline-none text-white transition-all" />
                <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] focus:outline-none text-white transition-all"></textarea>
                <button className="w-full btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </Card>
        </section>
        
        <Footer />
        
        {/* Scroll Progress Bar */}
        <div className="scroll-progress"></div>
      </main>
    </div>
  );
};

export default Homepage;
