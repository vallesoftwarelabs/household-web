/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `YAGA - Yet Another Grocery App`,
    description: `Shop smarter with lists that automatically sort for your path in any store, and gain clear insights into your spending.`,
    author: `@vallesoftwarelabs`,
    siteUrl: `https://yetanothergroceryapp.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `nb`],
        defaultLanguage: `en`,
        trailingSlash: 'always',
        generateDefaultLanguagePage: true,
        redirect: false,
        siteUrl: `https://yetanothergroceryapp.com`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: '.',
          nsSeparator: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YAGA - Yet Another Grocery App`,
        short_name: `YAGA`,
        start_url: `/`,
        background_color: `#E89031`,
        theme_color: `#E89031`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          `**/dev-404-page`,
          `**/404`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback`,
          `**/using-dsg`,
          `**/using-typescript`,
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: new Date().toISOString(),
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-42RC3CKGS3',
        ],
        pluginConfig: {
          head: true,
        },
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
  ],
}
