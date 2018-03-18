import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

export default ({ data }) => (
  <div className={`col-6 col-lg-3 col-md-4 ${styles.human}`}>
    <Link to={data.fields.slug} className={[styles.picture, data.fields.slug.replace(/\/+$/, '')].join(' ')} />
    <h3>{data.frontmatter.name}</h3>
    <p>
      {data.frontmatter.title}
      <br/>
      {data.frontmatter.company}
    </p>
    <Link to={data.fields.slug}> View bio <i className='fa fa-long-arrow-right'></i></Link>
  </div>
)
