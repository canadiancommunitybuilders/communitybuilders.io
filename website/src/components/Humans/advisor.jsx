import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

export default ({ data }) => (
  <div className={`col-12 col-lg-4 col-md-4 ${styles.human}`}>
    <a href={data.link} className={[styles.picture, data.fields.slug.replace(/\/+$/, '')].join(' ')} />
    <h3>{data.name}</h3>
    <p>
      {data.title}
      <br/>
      {data.company}
    </p>
    <a href={data.link}> View bio <i className='fa fa-long-arrow-right'></i></a>
  </div>
)
