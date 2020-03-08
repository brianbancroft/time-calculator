import React from 'react'
import { Header, Box, Heading, Text } from 'grommet'

/**
 * The header for Null Islanders
 */
function SiteHeader({ totalHours = 4 }) {
  return (
    <Header background="brand" height="100px">
      <Box justify="between" direction="row" fill align="center" pad="medium">
        <Box>Time Calculator</Box>
        <Box>Total Hours: {totalHours}</Box>
      </Box>
    </Header>
  )
}

SiteHeader.propTypes = {}

export default SiteHeader
