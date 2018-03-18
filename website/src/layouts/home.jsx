import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import '../css/theme.css'

export default ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]} />

    <Header description={data.site.siteMetadata.description} />

    <main>{children()}</main>

    <Footer />
  </div>
)

export const query = graphql`
  query HomeLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
