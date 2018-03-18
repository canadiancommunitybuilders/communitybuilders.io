import React from 'react'

import Conduct from '../components/Conduct/'
import Humans from '../components/Humans/'
import Join from '../components/Join/'
import Partners from '../components/Partners/'
import Survey from '../components/Survey/'

import styles from './index.module.css'

export default ({ data }) => (
  <div>
    <Join url={data.site.siteMetadata.siteUrl} />

    <Conduct />

    <Survey />

    <Humans directors={data.allMarkdownRemark.edges} advisors={data.allAdvisorsJson.edges} />

    <Partners />
  </div>
)

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allAdvisorsJson {
      edges {
        node {
          id
          name
          title
          company
          link
          fields {
            slug
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            name
            company
            slack
            twitter
          }
        }
      }
    }
  }
`
