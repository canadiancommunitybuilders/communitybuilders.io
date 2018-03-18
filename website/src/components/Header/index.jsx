import React from 'react'
import Link from 'gatsby-link'

import Social from '../../components/Social/'
import styles from './styles.module.css'

import logo from './logo.png'
import './banner.svg'

export default class Header extends React.Component {
  constructor ({ director, description }) {
    super()
    this.state.director = director
    this.state.description = description
  }

  render () {
    let text = null
    let className = 'page'

    if (this.state.description) {
      text = <div className='row'>
        <div className={`col-10 col-sm-9 col-md-8 col-lg-6 ${styles.text}`}>
          <p>{this.state.description}</p>
        </div>
      </div>
    } else {
      className = 'director'
    }

    return (
      <header className={[styles.header, className].join(' ')} director={this.state.director}>
        <div className='container'>
          <Link to='/'><img className={styles.logo} src={logo} /></Link>

          <Social className={styles.social} />

          {text}
        </div>
      </header>
    )
  }
}
