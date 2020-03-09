import React from 'react'
import { Header, Box, Heading, Text } from 'grommet'
import PropTypes from 'prop-types'

/**
 * The header for Null Islanders
 */
function SiteHeader({ totalHours }) {
  return (
    <Header background="brand" height="100px">
      <Box justify="between" direction="row" fill align="center" pad="medium">
        <Box>
          <Heading>Time Calculator</Heading>
        </Box>
        <Box
          background="white"
          pad="small"
          direction="row"
          align="center"
          justify="between"
        >
          <Text>Total Hours:</Text>{' '}
          <Box
            background="brand"
            style={{ borderRadius: '200px', height: '40px', width: '40px' }}
            pad="medium"
            justify="center"
            align="center"
            margin={{ left: '15px' }}
          >
            {totalHours}
          </Box>
        </Box>
      </Box>
    </Header>
  )
}

SiteHeader.propTypes = {
  totalHours: PropTypes.number.isRequired,
}

export default SiteHeader
