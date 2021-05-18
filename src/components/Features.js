import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReactMarkdown from 'react-markdown'


const FeatureGrid = ({ gridItems }) => (
  <div className="is-multiline">
    {gridItems.map((item, index) => (
      index % 2 == 0 ? 
      <div key={item.text} className="blurb-container">
        <div className="blurb-card" style={{backgroundImage: `url(${
          !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
        })`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',}}></div>
      <div className="blurb-card">
        <div className="blurb-card-content"><ReactMarkdown>{item.text}</ReactMarkdown></div> 
      </div>
      </div>
      : <div key={item.text} className="blurb-container">
      <div className="blurb-card">
        <div className="blurb-card-content"><ReactMarkdown>{item.text}</ReactMarkdown></div>
      </div>
      <div className="blurb-card" style={{backgroundImage: `url(${
          !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
        })`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',}}></div>
    </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
