const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (['AdvisorsJson', 'MarkdownRemark'].includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/director.jsx'),
          context: {
            slug: node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {

    switch (true) {
      case page.path === '/':
        page.layout = 'home'
        break

      case /^\/directors\/.+/.test(page.path):
        page.layout = 'directors'
        break

      default:
        page.layout = 'page'
        break
    }

    // Update the page.
    createPage(page)
    resolve()
  })
}
