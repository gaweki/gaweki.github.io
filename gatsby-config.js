module.exports = {
  siteMetadata: {
    title: `Andrel Karunia Sitanggang`,
    description: `Portfolio website of Andrel Karunia Sitanggang - Software Developer specializing in Full Stack Development with JavaScript, React, and modern web technologies. Explore my projects, skills, and professional experience.`,
    author: `@functionandrel`,
    siteUrl: `https://gaweki.github.io`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrel Karunia Sitanggang - Portfolio`,
        short_name: `Andrel Portfolio`,
        start_url: `/`,
        background_color: `#0f172a`,
        theme_color: `#06b6d4`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true, // defaults to false
          jsxPragma: `jsx`, // defaults to "React"
          allExtensions: true, // defaults to false
        },
     }
  ],
}
