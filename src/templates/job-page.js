import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const JobPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      </div>
    </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

JobPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const JobPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.frontmatter);
  return (
    <Layout>
      <JobPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

JobPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JobPage

export const jobPageQuery = graphql`
  query JobPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
