import React from 'react'
import PropTypes from 'prop-types'
import { JobPageTemplate } from '../../templates/job-page'

const JobPagePreview = ({ entry, widgetFor }) => (
  <JobPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

JobPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JobPagePreview
