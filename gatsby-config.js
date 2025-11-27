module.exports = {
  siteMetadata: {
    title: `Andrel Karunia Sitanggang - Frontend Developer`,
    description: `Personal website and portfolio of Andrel Karunia Sitanggang, an experienced Frontend Developer specializing in React, React Native, and modern web technologies.`,
    author: `Andrel Karunia Sitanggang`,
    siteUrl: `https://gaweki.github.io`,
    social: {
      github: `https://github.com/gaweki`,
      linkedin: `https://www.linkedin.com/in/sitanggangandrel`,
    },
  },
  // Add pathPrefix for GitHub Pages
  pathPrefix: '',
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
  ],
}
