import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="is-multiline">
    {gridItems.map((item, index) => (
      index % 2 == 0 ? 
      <div key={item.text} className="blurb-container">
        <div className="blurb-card" style={{backgroundImage: `url(${
          !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
        })`,
        backgroundPosition: `top center`,
        backgroundSize: 'cover',}}></div>
      <div className="blurb-card">
        <div className="blurb-card-content">{item.text}</div> 
      </div>
      </div>
      : <div key={item.text} className="blurb-container">
      <div className="blurb-card">
        <div className="blurb-card-content">{item.text}</div>
      </div>
      <div className="blurb-card" style={{backgroundImage: `url(${
          !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
        })`,
        backgroundPosition: `top center`,
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
