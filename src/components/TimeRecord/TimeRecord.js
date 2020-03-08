import React from 'react'
import PropTypes from 'prop-types'
import { Box, Input } from 'grommet'

/**
 * Describe your component
 */
function TimeRecord() {
  return (
    <Box
      direction="row"
      pad="small"
      border={{ size: 'small', color: 'brand' }}
      width="medium"
      margin="small"
    >
      <Box direction="column" width="small">
        <label for="start">Start</label>
        <input type="time" name="start" />
      </Box>
      <Box direction="column" width="small">
        <label for="end">End</label>
        <input type="time" name="end" />
      </Box>
    </Box>
  )
}

TimeRecord.propTypes = {}

export default TimeRecord
