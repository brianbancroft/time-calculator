import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'grommet'

/**
 * The header for Null Islanders
 */
function SiteHeader({ browserName }) {
  return <Header background="brand">SiteHeader. Browser: {browserName}</Header>
}

SiteHeader.propTypes = {
  browserName: PropTypes.string.isRequired,
}

export default SiteHeader
