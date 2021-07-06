import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ProductPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      col1={data.col1}
      col2={data.col2}
      content={widgetFor('body')}
      addons={data.addons || { blurbs: [] }}
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
