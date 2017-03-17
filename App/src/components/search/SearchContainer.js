import React, { PropTypes } from 'react'
import { Label } from 'semantic-ui-react'

import NewSearch from './Search'

const categoryRenderer = ({ name }) =>
  <Label as={'span'} content={name} />

categoryRenderer.propTypes = {
  name: PropTypes.string,
}

const resultRenderer = ({ title, description }) => (
  <Label content={title} />
)

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchExampleCategoryCustom = () => (
  <NewSearch
    categoryRenderer={categoryRenderer}
    resultRenderer={resultRenderer}
  />
)

export default SearchExampleCategoryCustom
