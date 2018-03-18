import React from 'react'
import Helmet from 'react-helmet'

import Join from '../components/Join'
import Header from '../components/Header/'
import Footer from '../components/Footer/'
import '../css/theme.css'

export default class Layout extends React.Component {
  constructor ({ location, children, data }) {
    super()
    this.state.director = location.pathname.match(/^\/directors\/(.+)\//)[1]
    this.state.meta = data.site.siteMetadata
  }

  render ({children}) {
    return (
      <div>
        <Helmet title={this.state.meta.title} meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]} />

        <Header director={this.state.director} />

        <main class='container'>
          {children()}
        </main>

        <Join />
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query DirectorsLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
