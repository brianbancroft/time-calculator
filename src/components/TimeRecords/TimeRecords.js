import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TimeRecord } from '..'
import { Button, Box, Text } from 'grommet'
/**
 * Describe your component
 */

class TimeRecords extends Component {
  constructor() {
    super()
    this.state = {
      records: [0],
    }
  }

  setNumberHoursForRecord = index => ({ numberHours }) => {
    const { records } = this.state
    records[index] = numberHours

    this.setState({ records })
  }

  addTimeCard = () => {
    const { records } = this.state
    records.push(0)
    this.setState({ records })
  }

  render() {
    const { records } = this.state
    const { setNumberHoursForRecord, addTimeCard } = this

    const recordElements = records.map((numberHours, index) => (
      <TimeRecord
        key={index}
        numberHours={numberHours}
        onNumberHoursChange={setNumberHoursForRecord(index)}
      />
    ))

    return (
      <Box direction="column">
        {recordElements}
        <Button onClick={addTimeCard}>
          <Box
            width="medium"
            height="xxsmall"
            background="brand"
            align="center"
            justify="center"
            margin="small"
          >
            <Text size="xxlarge">+</Text>
          </Box>
        </Button>
      </Box>
    )
  }
}

TimeRecords.propTypes = {}

export default TimeRecords
