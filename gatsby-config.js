module.exports = {
  siteMetadata: {
    title: 'Ajay Balachandran',
    titleTemplate: '%s · Web Developer',
    twitterUsername: 'ajaybchandran',
    url: 'https://www.ajaybalachandran.com',
    image: '/images/ajay-balachandran-with-pattern.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
