module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/notes',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-obsidian',
            options: {
              titleToURL: (title) => `/${title}`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
    },
  ],
}
