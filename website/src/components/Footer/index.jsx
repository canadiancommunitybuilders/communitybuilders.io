import React from 'react'

import Social from '../Social/'
import styles from './styles.module.css'

import logo from './logo.png'

export default () => (
  <footer className={styles.footer}>
    <div class={`container ${styles.container}`}>
      <p>
        <img src={logo} /> ©
        {new Date().getFullYear()} Canadian Community Builders. <span>Design by <a href='http://www.stellakonopski.com/'>Stella Konopski</a></span>
      </p>

      <Social className={styles.social} />
    </div>
  </footer>
)
