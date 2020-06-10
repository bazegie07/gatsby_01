/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata:{
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@bazegie_07",
    data: ["item1", "item2"],
    person: {name: "stephen", age: "29"},
  },
  plugins: [`gatsby-plugin-styled-components`],
}

