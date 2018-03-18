const title = 'Canadian Community Builders'
const url = 'https://www.communitybuilders.io'
const description = 'Connecting and supporting community builders.'

module.exports = {
  siteMetadata: {
    title,
    description,
    siteUrl: url
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-preact'
    },
    {
      resolve: 'gatsby-plugin-remove-trailing-slashes'
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-transformer-json'
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: url
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: url,
        background_color: '#62164a',
        theme_color: '#62164a',
        display: 'standalone',
        icons: [
          {
            src: '/images/favicon/android-chrome-36x36.png',
            sizes: '36x36',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/images/favicon/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          }
        ]
      }
    },
    // keep offline plugin last to include manifest.json
    {
      resolve: 'gatsby-plugin-offline'
    }
  ]
}
