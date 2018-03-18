import React from 'react'

import styles from './styles.module.css';

export default () => (
  <section id='survey' className={styles.survey}>
    <div className='container'>
      <h2>Community Survey</h2>

      <iframe className='hidden-md-down' src='https://communitybuilders.typeform.com/to/iSQZKg' />

      <div className='hidden-lg-up'>
        <p>Please take 5 minutes to participate in this short, anonymous survey.</p>
        <p><small>The results will be used for a report that will be published in Canadian Community Builders' online channels. The data will help to benchmark career growth and best practices in the field of community building.</small></p>

        <a className='btn btn-primary' href='https://communitybuilders.typeform.com/to/iSQZKg'>Take the survey now</a>
      </div>
    </div>
  </section>
)
