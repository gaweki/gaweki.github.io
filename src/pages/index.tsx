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

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center reveal-on-scroll">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
    <div className="h-1 w-20 bg-[var(--color-accent-primary)] mx-auto rounded-full mb-4 shadow-glow"></div>
    {subtitle && <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "", hoverEffect = true }: { children: React.ReactNode; className?: string; hoverEffect?: boolean }) => (
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

const Badge = ({ children }: { children: React.ReactNode }) => (
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
    <div className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent-primary)] selection:text-white">
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
              <a
                href="#projects"
                className="btn btn-primary btn-fancy"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
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
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto mb-16">
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
        <section id="contact" className="pt-32 pb-24 px-4 max-w-6xl mx-auto reveal-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-10">
              {/* Email */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Email</h4>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gradient-secondary)] flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-lg font-medium text-[var(--color-text-primary)]">
                      {PORTFOLIO_DATA.personal.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {PORTFOLIO_DATA.personal.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--gradient-primary)] hover:border-[var(--color-accent-primary)] hover:text-white hover:shadow-glow transition-all text-2xl transform hover:scale-110 hover:-translate-y-1"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <Card className="p-8 border-[var(--color-accent-primary)]/20 bg-[var(--color-surface)]/80 backdrop-blur-lg shadow-xl hover:shadow-glow-lg hover:border-[var(--color-accent-primary)]/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 focus:outline-none text-white placeholder:text-[var(--color-text-muted)] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 focus:outline-none text-white placeholder:text-[var(--color-text-muted)] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-[var(--color-background-primary)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 focus:outline-none text-white placeholder:text-[var(--color-text-muted)] transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full btn btn-primary text-lg font-semibold py-4 shadow-glow">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <Footer />

        {/* Scroll Progress Bar */}
        <div className="scroll-progress"></div>
      </main>
    </div>
  );
};

export default Homepage;
