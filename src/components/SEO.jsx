import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title, description, pathname, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          social {
            github
            linkedin
          }
        }
      }
    }
  `);

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    url: `${site.siteMetadata.siteUrl}${pathname || '/'}`,
    author: site.siteMetadata.author,
  };

  // Structured data for Person schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrel Karunia Sitanggang',
    jobTitle: 'Software Engineer',
    url: site.siteMetadata.siteUrl,
    sameAs: [
      site.siteMetadata.social.github,
      site.siteMetadata.social.linkedin,
    ],
    knowsAbout: [
      'React',
      'React Native',
      'TypeScript',
      'Next.js',
      'Frontend Development',
      'Web Performance',
      'SEO',
    ],
  };

  return (
    <>
      <html lang="id" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={site.siteMetadata.title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Favicons */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      {children}
    </>
  );
}
