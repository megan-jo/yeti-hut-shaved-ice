import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'


const TeamFeatureGrid = ({ gridItems }) => (
  <div className="is-multiline">
    {gridItems.map((item, index) => (
      <div key={item.text} className="blurb-container">
        <div className="team-card photo" style={{backgroundImage: `url(${
          !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
        })`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',}}></div>
      <div className="team-card">
        <h3 className="employee-name">{item.employee}</h3>
        <div className=""><ReactMarkdown>{item.text}</ReactMarkdown></div> 
      </div>
      </div>
    ))}
  </div>
)

TeamFeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      employee: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default TeamFeatureGrid
