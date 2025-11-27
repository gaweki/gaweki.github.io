import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function HomePage() {
  const skills = [
    { name: 'React.js', icon: '⚛️', level: 'Expert' },
    { name: 'React Native', icon: '📱', level: 'Expert' },
    { name: 'TypeScript', icon: '📘', level: 'Advanced' },
    { name: 'Next.js', icon: '▲', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' },
    { name: 'Redux', icon: '🔄', level: 'Advanced' },
  ];

  const featuredProjects = [
    {
      title: 'UangCermat Mobile App',
      description: 'Finance service mobile application built with React Native for PT Gajicermat Mandiri Digital Indonesia',
      tech: ['React Native', 'TypeScript', 'React Query'],
      category: 'Mobile App'
    },
    {
      title: 'KerjaCermat Mobile App',
      description: 'HRIS service mobile application for employee management and payroll',
      tech: ['React Native', 'TypeScript', 'Formik'],
      category: 'Mobile App'
    },
    {
      title: 'Tokodistributor Web Platform',
      description: 'B2B Marketplace web platform. Improved PageSpeed from 35 to 90 points',
      tech: ['React 16', 'Redux', 'SEO Optimization'],
      category: 'Web App'
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Andrel Karunia Sitanggang - Frontend Developer"
        description="Experienced Frontend Developer specializing in React, React Native, and modern web technologies. Building high-performance web and mobile applications."
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-blue/10 pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <p className="text-accent-cyan font-mono mb-4 text-lg animate-slide-down">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Andrel Karunia Sitanggang
          </h1>
          <p className="text-3xl md:text-5xl text-text-secondary mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            I build exceptional digital experiences
          </p>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Frontend Developer specializing in <span className="text-accent-cyan">React</span> and{' '}
            <span className="text-accent-cyan">React Native</span>. 
            Passionate about creating performant, accessible, and beautiful web applications.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg hover:bg-accent-blue hover:shadow-glow-cyan transition-all font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan/10 transition-all font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-dark-bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 fade-in-on-scroll">About Me</h2>
          <div className="fade-in-on-scroll">
            <p className="text-lg text-text-secondary mb-6">
              I'm a Frontend Developer with over <strong className="text-accent-cyan">3 years of experience</strong> at{' '}
              <strong className="text-text-primary">PT Gajicermat Mandiri Digital Indonesia</strong>, 
              where I've built multiple mobile apps and web applications for finance and HRIS services.
            </p>
            <p className="text-lg text-text-secondary mb-6">
              Previously, I spent 2+ years at <strong className="text-text-primary">Tokodistributor</strong>, 
              a B2B marketplace, where I significantly improved web performance, 
              increasing PageSpeed scores from 35 to 90 points and implementing comprehensive SEO optimizations.
            </p>
            <p className="text-lg text-text-secondary">
              I hold a degree in <strong className="text-text-primary">Electronics and Instrumentation</strong> from{' '}
              <strong className="text-text-primary">Universitas Gadjah Mada (UGM)</strong> and have contributed to various open-source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in-on-scroll">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary hover:border-accent-cyan hover:shadow-glow-cyan transition-all stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-accent-cyan text-sm">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 bg-dark-bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in-on-scroll">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="p-6 bg-dark-bg rounded-lg border border-dark-bg-tertiary hover:border-accent-cyan hover:shadow-glow-cyan transition-all fade-in-on-scroll"
              >
                <span className="text-sm text-accent-cyan font-mono">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-dark-bg-tertiary text-accent-cyan text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-block px-8 py-3 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan/10 transition-all font-medium"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 fade-in-on-scroll">Let's Work Together</h2>
          <p className="text-xl text-text-secondary mb-8 fade-in-on-scroll">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg hover:bg-accent-blue hover:shadow-glow-cyan transition-all font-medium fade-in-on-scroll"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}

export function Head() {
  return <SEO />;
}
