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
    // Removed on 2022-07-16 to unblock build errors.
    // TODO: Add this back to support preloading MD pages.
    // {
    //   resolve: `gatsby-plugin-catch-links`,
    // },
  ],
}
