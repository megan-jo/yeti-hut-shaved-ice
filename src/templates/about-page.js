import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TeamFeatureGrid from '../components/TeamFeature'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image, team, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <div className="about-divider-bar"></div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {content && 
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              }
              
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {team.title}
                </h2>
                <TeamFeatureGrid gridItems={team.blurbs}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        team={post.frontmatter.team}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        team {
          title
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            employee
            text
          }
        }
      }
    }
  }
`
