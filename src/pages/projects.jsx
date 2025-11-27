import { useState } from 'react';
import { useContact } from '../components/Contact';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const { openContact } = useContact();

  const projects = [
    {
      title: 'UangCermat Mobile App',
      description: 'Finance service mobile application for lending and financial management. Built with React Native and TypeScript for iOS and Android platforms.',
      category: 'mobile',
      tech: ['React Native', 'TypeScript', 'React Query', 'Native Modules'],
      company: 'PT Gajicermat Mandiri Digital Indonesia',
      year: '2022-2024',
      highlights: [
        'Cross-platform mobile app for finance service',
        'Integrated complex form validation with Formik',
        'Implemented real-time data with React Query',
        'iOS and Android deployment',
      ],
    },
    {
      title: 'KerjaCermat Mobile App',
      description: 'HRIS service mobile application for employee management, attendance, payroll, and HR processes.',
      category: 'mobile',
      tech: ['React Native', 'TypeScript', 'Redux', 'Formik'],
      company: 'PT Gajicermat Mandiri Digital Indonesia',
      year: '2023-2024',
      highlights: [
        'Employee self-service mobile app',
        'Attendance and leave management',
        'Payroll information access',
        'Push notifications integration',
      ],
    },
    {
      title: 'HRIS Internal Web Apps',
      description: 'Two internal web applications for HR management built with Next.js, providing administrative tools for employee data management.',
      category: 'web',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
      company: 'PT Gajicermat Mandiri Digital Indonesia',
      year: '2023',
      highlights: [
        'Admin dashboard for HR operations',
        'Employee data management',
        'Report generation',
        'Role-based access control',
      ],
    },
    {
      title: 'Finance Internal Web Apps',
      description: 'Two web applications for internal finance operations using Next.js, plus one React.js app for financial services.',
      category: 'web',
      tech: ['Next.js', 'React.js', 'TypeScript', 'Chart.js'],
      company: 'PT Gajicermat Mandiri Digital Indonesia',
      year: '2022-2023',
      highlights: [
        'Financial operations dashboard',
        'Transaction monitoring',
        'Analytics and reporting',
        'Real-time data visualization',
      ],
    },
    {
      title: 'Tokodistributor Web Platform',
      description: 'B2B marketplace web platform rewritten in React 16. Achieved significant performance improvements and SEO optimization.',
      category: 'web',
      tech: ['React 16', 'Redux', 'SEO', 'PWA', 'Framework7'],
      company: 'Tokodistributor',
      year: '2019-2021',
      highlights: [
        'Improved PageSpeed from 35 to 90 points',
        'Implemented comprehensive SEO with schema markup',
        'Built PWA with offline mode',
        'Integrated chat features (Qiscus, Sendbird)',
        'Rewrote entire desktop platform to React',
      ],
    },
    {
      title: 'Tokodistributor Mobile Web',
      description: 'Progressive Web App for mobile users built with Framework7 React, providing native-like experience.',
      category: 'mobile',
      tech: ['Framework7 React', 'PWA', 'Service Workers'],
      company: 'Tokodistributor',
      year: '2020-2021',
      highlights: [
        'PWA with offline capabilities',
        'Mobile-first design',
        'App-like navigation',
        'Performance optimized for mobile',
      ],
    },
    {
      title: 'Open Source Contributions',
      description: 'Various contributions to open-source projects including React.js ID, DuckDuckGo, HospitalRun, and Tailwind Components.',
      category: 'opensource',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Documentation'],
      company: 'Open Source Community',
      year: '2020-2021',
      highlights: [
        'Fixed bugs in HospitalRun frontend',
        'Created Tailwind CSS components',
        'Contributed to Vest validation library',
        'Community documentation',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'opensource', label: 'Open Source' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <SEO 
        title="Projects - Andrel Karunia Sitanggang"
        description="Portfolio of mobile and web applications built by Andrel Karunia Sitanggang, including React Native apps, Next.js web apps, and open-source contributions."
        pathname="/projects"
      />

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collection of mobile apps, web applications, and open-source contributions I've built over the years.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === cat.id
                  ? 'bg-accent-cyan text-dark-bg shadow-glow-cyan'
                  : 'bg-dark-bg-secondary text-text-secondary border border-dark-bg-tertiary hover:border-accent-cyan'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary hover:border-accent-cyan hover:shadow-glow-cyan transition-all group"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-text-muted">{project.year}</span>
                </div>
                <p className="text-accent-cyan text-sm font-medium">{project.company}</p>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start">
                    <span className="text-accent-cyan mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-bg-tertiary">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-dark-bg text-accent-cyan text-xs rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="text-center p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary">
            <div className="text-4xl font-bold text-accent-cyan mb-2">10+</div>
            <div className="text-text-secondary">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary">
            <div className="text-4xl font-bold text-accent-cyan mb-2">5+</div>
            <div className="text-text-secondary">Mobile Apps</div>
          </div>
          <div className="text-center p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary">
            <div className="text-4xl font-bold text-accent-cyan mb-2">5+</div>
            <div className="text-text-secondary">Web Apps</div>
          </div>
          <div className="text-center p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary">
            <div className="text-4xl font-bold text-accent-cyan mb-2">5+</div>
            <div className="text-text-secondary">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-xl text-text-secondary mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <button
            type="button"
            onClick={openContact}
            className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg hover:bg-accent-blue hover:shadow-glow-cyan transition-all font-medium cursor-pointer relative z-10"
            style={{ pointerEvents: 'auto' }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return <SEO pathname="/projects" />;
}
