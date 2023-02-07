/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'ECELL',
    titleTemplate: '',
    titleTemplate: "%s - Curated List of Free Education Resources Provided By ECELL",
    description:
      'Revista is an open source blog/magazine template. Simply write articles in Markdown, place in the content folder, and Revista will automatically create categories and articles!',
    url: 'https://revista.mesmerdesign.ca', // No trailing slash allowed!
    image: 'static/e_cell_logo_BLACK.jpg', // Path to the image placed in the 'static' folder, in the project's root directory. static\e_cell_logo_BLACK.jpg
    twitterUsername: '',
    defaultTitle: 'ECELL',
  },

  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-read-time-estimate`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ecellsakec.in/',
        sitemap: 'https://ecellsakec.in/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },

  ],
}
