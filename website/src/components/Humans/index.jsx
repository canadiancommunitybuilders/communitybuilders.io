import React from 'react'
import Link from 'gatsby-link'

import Director from './director'
import Advisor from './advisor'
import styles from './styles.module.css'

import './advisors/april-dunford.jpg'
import './advisors/holly-knowlman.jpg'
import './advisors/karen-schulman-dupuis.jpg'
import './directors/ahmad-nassri.jpg'
import './directors/ainsleigh-burelle.jpg'
import './directors/alex-bevilacqua.jpg'
import './directors/caitlin-dwyer.jpg'
import './directors/kate-grant.jpg'
import './directors/nicole-kelly.jpg'
import './directors/nora-bieberstein.jpg'
import './directors/oksana-salamaszek.jpg'
import './directors/ria-lupton.jpg'

export default class Home extends React.Component {
  componentDidMount () {
    const directors = document.querySelector('#directors .row')
    const advisors = document.querySelector('#advisors .row')

    randomize(directors)
    randomize(advisors)

    function randomize (list) {
      for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0])
      }
    }
  }

  render ({ directors, advisors }) {
    return (
      <div>
        <section id='directors' className={styles.people}>
          <div className='container'>

            <h2>Directors</h2>

            <div className='row'>
              {directors.map(({ node }) => <Director key={node.id} data={node} />)}
            </div>
          </div>
        </section>

        <section id='advisors' className={`${styles.people} ${styles.advisors}`}>
          <div className='container'>

            <h2>Advisors</h2>

            <div className='row'>
              {advisors.map(({ node }) => <Advisor key={node.id} data={node} />)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
