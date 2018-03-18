import React from 'react'

import styles from './styles.module.css'

export default () => (
  <section id='conduct-requirements' className={styles.conduct}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <h2>Membership Requirements</h2>

          <ul>
            <li><p>You are a community manager or are building a specific community that you are responsible for. <em>(You actively try to bring people together, you know and care about your communities members, you are a curator of experiences)</em></p></li>
            <li><p>You can prove the existence of your community <em>(Linkedin Group, Slack group, Twitter, event series, forum, etc...)</em></p></li>
            <li><p>You want to join because you have an interest in learning about community building <u>first and foremost</u>.</p></li>
          </ul>
        </div>

        <div className='col-12 col-lg-6'>
          <h2>Code of Conduct</h2>

          <p className='small'><strong>No spamming.</strong> We encourage participation in authentic way. This way you help contribute to the health and longevity of the group.</p>

          <p className='small'><strong>We do not tolerate disrespectful behaviour</strong> towards other members of the community, this includes demeaning, discriminatory or harassing messages. Exercise consideration. Basically: “Don't be that guy (or girl)”.</p>

          <p className='small'><strong>Attempt collaboration before conflict.</strong> No one is perfect, but let's try to understand why we disagree first. Learning to de-escalate a hostile situation is a life skill, let's practice some of it here.</p>

          <p className='small'><strong>Don't keep silent if you observe hurtful behaviour.</strong> One can only try and fix what one is aware of. Please report your concerns to <a href='mailto:communitybuildersio@gmail.com'>communitybuildersio@gmail.com</a>. All reports will be handled with discretion.</p>

          <p className='small'>It's simple, this is <em>a curated group made by community builders for community builders</em>. You must be a community builder to join. It is for community builders to learn from each other first and foremost.</p>

          <p className='small'>We assume everyone in our community is intelligent and well meaning. We will not tell you what to do, however there are a few things that this group requires in order for it to operate at full value to its members:</p>

          <p className='small'>Community Builders are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, age, sexual orientation, ability, ethnicity, socioeconomic status, technological choices, and religion (or lack thereof).</p>

          <p className='small'>Community Builders reserves the right to ban those that do not follow the basic tenants of this code of conduct after fair warning and prior discussion with moderators.</p>
        </div>
      </div>
    </div>
  </section>
)
