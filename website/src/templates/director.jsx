import React from 'react'

import styles from './director.module.css'

export default ({ data }) => (
  <div className={`row ${styles.director}`}>
    <div className='col-12 col-lg-6'>
      <h1>{data.markdownRemark.frontmatter.name}</h1>
      <p>{data.markdownRemark.frontmatter.title}, {data.markdownRemark.frontmatter.company}</p>

      <i className='fa fa-slack'></i> <a href={`https://cancommunitybuilders.slack.com/team/${data.markdownRemark.frontmatter.slack}`}>@{data.markdownRemark.frontmatter.slack}</a><br/>
      <i className='fa fa-twitter'></i> <a href={`https://twitter.com/${data.markdownRemark.frontmatter.twitter}`} target='_blank'>@{data.markdownRemark.frontmatter.twitter}</a>
    </div>

    <div className='col-12 col-lg-6' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
)

export const query = graphql`
  query DirectorTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        name
        company
        slack
        twitter
      }
    }
  }
`
