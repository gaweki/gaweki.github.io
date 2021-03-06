/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

function SEO({ description, lang, meta, title }) {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // )

  // console.log(JSON.stringify(site))

  // const metaDescription = description || site.siteMetadata.description

  const handleDescription = desc => description || desc

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: handleDescription(data.site.siteMetadata.description),
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: handleDescription(data.site.siteMetadata.description),
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: handleDescription(data.site.siteMetadata.description),
            },
            {
              name: `google-site-verification`,
              content: "6l-jQIAA55_iUjs_-5myibyZvNGLgiavaiKucdthJBk",
            }
          ].concat(meta)}
        >
          <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "url": "https://gaweki.github.io",
                  "name": "Portfolio Website Andrel",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "andrel.sitanggang@gmail.com",
                    "contactType": "Personal Email",
                    "description": "Ask anything about me
                  }
                }
              `}
          </script>
        </Helmet>
      )}
    />
  )
}

SEO.defaultProps = {
  lang: `id`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
