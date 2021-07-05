import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset, widgetFor }) => {
  console.log(entry);
  return (
    <ProductPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      col1={entry.getIn(['data', 'col1'])}
      col2={entry.getIn(['data', 'col2'])}
      content={widgetFor('body')}
      addons={entry.getIn(['data', 'addons']) || { blurbs: [] }}
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
