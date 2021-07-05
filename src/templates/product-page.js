import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProductPageTemplate = ({ title, image, col1, col2, addons, contentComponent }) => {
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
    <div className="menu-divider-bar"></div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <div className="menu-two-column">
                  <div className="menu-col1">
                    <ReactMarkdown>{col1}</ReactMarkdown>
                  </div>
                  {col2 &&
                    <div className="">
                      <ReactMarkdown>{col2}</ReactMarkdown>
                    </div>
                  }
                </div>
                {addons.blurbs && addons.blurbs.map((addon, index) => (
                  <div >
                    <h2 className="addon-title">{addon.addonName}</h2>
                    <ReactMarkdown>{addon.text}</ReactMarkdown>
                  </div>  
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProductPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  addons: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        col1={post.frontmatter.col1}
        col2={post.frontmatter.col2}
        addons={post.frontmatter.addons}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
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
        col1
        col2
        addons {
          blurbs {
            addonName
            text
          }
        }
      }
    }
  }
`
