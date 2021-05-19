import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset, widgetFor }) => {
 
  return (
    <ProductPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ProductPagePreview
