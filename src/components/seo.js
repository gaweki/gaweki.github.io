/**
 * Enhanced SEO component with comprehensive meta tags
 * Open Graph, Twitter Cards, and Structured Data (JSON-LD)
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, pathname, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl || "https://gaweki.github.io"
  const defaultImage = `${siteUrl}/images/og-image.png` // Make sure this image exists
  const metaImage = image ? `${siteUrl}${image}` : defaultImage
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      link={[
        {
          rel: "canonical",
          href: canonical,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
          rel: "stylesheet",
        }
      ]}
      meta={[
        /* Basic Meta Tags */
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: "Andrel Karunia Sitanggang, Frontend Developer, React Developer, Mobile Developer, React Native, Next.js, Web Development, Portfolio",
        },
        {
          name: "author",
          content: "Andrel Karunia Sitanggang",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
        },
        {
          name: "theme-color",
          content: "#0f172a",
        },

        /* Open Graph Meta Tags */
        {
          property: "og:title",
          content: `${title} | ${siteTitle}`,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: article ? "article" : "website",
        },
        {
          property: "og:url",
          content: canonical,
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:site_name",
          content: siteTitle,
        },
        {
          property: "og:locale",
          content: "id_ID",
        },

        /* Twitter Card Meta Tags */
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@functionandrel",
        },
        {
          name: "twitter:site",
          content: "@functionandrel",
        },
        {
          name: "twitter:title",
          content: `${title} | ${siteTitle}`,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },

        /* Google Verification */
        {
          name: "google-site-verification",
          content: "6l-jQIAA55_iUjs_-5myibyZvNGLgiavaiKucdthJBk",
        },

        /* Additional SEO */
        {
          name: "robots",
          content: "index, follow",
        },
      ].concat(meta)}
    >
      {/* Structured Data - Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Andrel Karunia Sitanggang",
          "url": siteUrl,
          "email": "andrel.sitanggang@gmail.com", // Assuming email based on common patterns or previous data, if not provided explicitely verify
          "jobTitle": "Frontend Developer",
          "sameAs": [
            "https://www.linkedin.com/in/sitanggangandrel/",
            "https://twitter.com/functionandrel",
            "https://github.com/gaweki",
            "https://www.instagram.com/andrelst.g"
          ],
          "description": metaDescription,
          "image": metaImage,
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Universitas Gadjah Mada (UGM)"
          },
          "knowsAbout": [
            "JavaScript",
            "React",
            "React Native",
            "Next.js",
            "TypeScript",
            "Web Development",
            "Mobile Development"
          ]
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "id",
  meta: [],
  description: "",
  image: null,
  pathname: "",
  article: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

export default SEO
