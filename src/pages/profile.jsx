import { useContact } from '../components/Contact';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ProfilePage() {
  const { openContact } = useContact();
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'PT Gajicermat Mandiri Digital Indonesia',
      period: 'Jan 2022 - Present (3+ years)',
      location: 'Jakarta Selatan, Indonesia',
      type: 'Full-time',
      highlights: [
        'Built 2 mobile apps using React Native for Finance Service (UangCermat and internal app)',
        'Developed 2 web apps using Next.js for Finance Service (internal tools)',
        'Created 1 web app using React.js for Finance Service',
        'Built 2 web apps using Next.js for HRIS Service (internal tools)',
        'Developed 3 mobile apps using React Native for HRIS Service (KerjaCermat and 2 internal apps)',
        'Currently working on iOS app development',
        'Completed fast-pace Epic Ticket in two-week deadline to build new financial service app',
      ],
      skills: ['React Native', 'TypeScript', 'Formik', 'React Query', 'Next.js', 'iOS Development'],
    },
    {
      title: 'Frontend Web Developer',
      company: 'Tokodistributor - B2B Marketplace',
      period: 'Apr 2019 - Dec 2021 (2 years 9 months)',
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      highlights: [
        'Improved web performance: Homepage from 35 to 80 PageSpeed score',
        'Implemented PWA integration with Framework7 React',
        'Rewrote desktop web platform to React 16',
        'Optimized SEO with schema markup and dynamic meta tags',
        'Integrated chatting features (Qiscus, Sendbird)',
        'Built product detail, category, cart, and checkout flows',
        'Implemented offline mode and Google Analytics',
        'Achieved PageSpeed scores of 90+ on multiple pages',
      ],
      skills: ['React.js', 'Redux', 'Vue.js', 'SEO', 'PWA', 'Performance Optimization'],
    },
    {
      title: 'React Developer',
      company: 'Satu Pintu Kemenparekraf',
      period: 'May 2021 (1 month)',
      location: 'Jakarta Timur, Indonesia',
      type: 'Freelance',
      highlights: ['Repaired existing platform'],
      skills: ['React.js'],
    },
    {
      title: 'React Developer',
      company: 'Skillomo',
      period: 'Apr 2021 (1 month)',
      location: 'Jakarta Timur, Indonesia',
      type: 'Freelance',
      highlights: ['Initiated Skillomo React.js learner platform'],
      skills: ['React.js'],
    },
    {
      title: 'Individual Contributor',
      company: 'Open Source',
      period: 'Jul 2020 - Apr 2021 (10 months)',
      type: 'Open Source',
      highlights: [
        'Contributed to React.js ID community',
        'Contributed to DuckDuckGo',
        'Created components on tailwindcomponents.com',
        'Fixed issues in Vest validation library',
        'Fixed labels in HospitalRun frontend',
        'Maintained personal projects on GitHub',
      ],
      skills: ['Open Source', 'React.js', 'Tailwind CSS'],
    },
  ];

  const education = {
    degree: "Associate's Degree",
    field: 'Elektronika dan Instrumentasi',
    institution: 'Universitas Gadjah Mada (UGM)',
    period: '2013 - 2017',
    activities: 'BEM KM UGM, Gadjah Mada Menginspirasi, Paguyuban SOSMAS UGM',
  };

  return (
    <Layout>
      <SEO
        title="Profile - Andrel Karunia Sitanggang"
        description="Detailed profile, experience timeline, and education background of Andrel Karunia Sitanggang, Software Engineer."
        pathname="/profile"
      />

      <div className="container mx-auto px-4 py-20 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Software Engineer with 5+ years of experience building high-performance web and mobile applications.
            Specialized in React ecosystem with a track record of delivering impactful projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 fade-in-on-scroll">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative pl-8 border-l-2 border-accent-cyan/30 fade-in-on-scroll"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-cyan rounded-full shadow-glow-cyan" />

                <div className="pb-8">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-text-primary">{exp.title}</h3>
                    <p className="text-xl text-accent-cyan font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-text-muted">
                      <span>📅 {exp.period}</span>
                      {exp.location && <span>📍 {exp.location}</span>}
                      <span className="px-2 py-0.5 bg-dark-bg-tertiary rounded text-accent-cyan">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-text-secondary flex items-start">
                        <span className="text-accent-cyan mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-dark-bg-secondary text-accent-cyan text-sm rounded-full border border-accent-cyan/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 fade-in-on-scroll">Education</h2>
          <div className="p-8 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary fade-in-on-scroll">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{education.institution}</h3>
                <p className="text-xl text-accent-cyan mb-2">
                  {education.degree} - {education.field}
                </p>
                <p className="text-text-muted mb-3">📅 {education.period}</p>
                <p className="text-text-secondary">
                  <strong>Activities:</strong> {education.activities}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 fade-in-on-scroll">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary fade-in-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">Frontend Development</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• React.js & React Native</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Next.js & Gatsby</li>
                <li>• State Management (Redux, React Query)</li>
                <li>• Tailwind CSS & Styled Components</li>
              </ul>
            </div>

            <div className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary fade-in-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">Performance & SEO</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Web Performance Optimization</li>
                <li>• SEO & Schema Markup</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Accessibility (a11y)</li>
                <li>• Mobile-First Development</li>
              </ul>
            </div>

            <div className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary fade-in-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">Mobile Development</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• iOS & Android Development</li>
                <li>• React Native CLI & Expo</li>
                <li>• Native Module Integration</li>
                <li>• App Store Deployment</li>
                <li>• Cross-platform Architecture</li>
              </ul>
            </div>

            <div className="p-6 bg-dark-bg-secondary rounded-lg border border-dark-bg-tertiary fade-in-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">Tools & Practices</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Git & GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• Agile Development</li>
                <li>• Code Review & Mentoring</li>
                <li>• Testing (Jest, React Testing Library)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 fade-in-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl text-text-secondary mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <button
            onClick={openContact}
            className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg hover:bg-accent-blue hover:shadow-glow-cyan transition-all font-medium"
          >
            Get In Touch
          </button>
        </section>
      </div>
    </Layout>
  );
}

export function Head() {
  return <SEO pathname="/profile" />;
}
