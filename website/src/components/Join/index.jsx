import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

export default ({ url }) => (
  <div id='join' className={styles.join}>
    <div className='container'>
      <div className='row'>
        <div className={`col-12 col-lg-6 ${styles.cta}`}>
          Join Canada's growing community of builders.
        </div>
        <div className='col-12 col-lg-6'>
          <form className={styles.form} action='https://formspree.io/communitybuildersio@gmail.com' method='POST'>
            <input type='hidden' name='_next' value={`${ url }/thanks/`} />
            <input type='hidden' name='_subject' value='New Application' />

            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='Full Name'
                required />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                required />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='community'
                placeholder='Your Community (name / link)'
                required />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='referral'
                placeholder='How did you find out about us?'
                required />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='bio'
                placeholder='About You'
                required />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='reason'
                placeholder='Why do you want to join?'
                required />
            </div>
            <div className='form-check'>
              <label className='form-check-label'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='newsletter'
                  value='yes' /> Recieve updates & announcements?
              </label>
            </div>
            <div className='form-group'>
              <button type='submit' className={`btn btn-primary btn-lg btn-block ${styles.button}`}>
                Submit
              </button>
            </div>
            <small>By submitting this form, you are explicitly accepting the <Link to='/#conduct-requirements'> Code of Conduct </Link>, and adhering to the <Link to='/#conduct-requirements'> membership requirements </Link>.</small>
          </form>
        </div>
      </div>
    </div>
  </div>
)
