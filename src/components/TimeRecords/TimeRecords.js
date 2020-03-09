import React, { Component } from 'react'
import { Button, Box, Text } from 'grommet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TimeRecord } from '..'

const StyledButton = styled(Box)`
  transition: background 0.35s ease-in-out;

  &:hover {
    background: #31a5b5;
  }
`

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

  componentDidUpdate() {
    const add = (a, b) => a + b
    const sumOfHours = this.state.records.reduce(add, 0)
    this.props.setTotalHours(sumOfHours)
  }

  setNumberHoursForRecord = index => ({ numberHours }) => {
    const { records } = this.state
    records[index] = numberHours

    this.setState({ records })
  }

  removeElement = index => () => {
    const { records } = this.state
    records.splice(index, 1)

    if (records.length === 0) {
      records.push(0)
    }

    this.setState({ records })
  }

  addTimeCard = () => {
    const { records } = this.state
    records.push(0)
    this.setState({ records })

    this.addElementButton.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  render() {
    const { records } = this.state
    const { setNumberHoursForRecord, addTimeCard, removeElement } = this

    const recordElements = records.map((numberHours, index) => (
      <TimeRecord
        key={index}
        numberHours={numberHours}
        onNumberHoursChange={setNumberHoursForRecord(index)}
        removeElement={removeElement(index)}
      />
    ))

    return (
      <Box direction="column" align="center" pad={{ bottom: '40px' }}>
        {recordElements}
        <Button onClick={addTimeCard}>
          <StyledButton
            width="medium"
            height="xxsmall"
            background="brand"
            align="center"
            justify="center"
            ref={el => {
              this.addElementButton = el
            }}
          >
            <Text size="xxlarge" id="hoverMark" margin={{ bottom: '5px' }}>
              +
            </Text>
          </StyledButton>
        </Button>
      </Box>
    )
  }
}

TimeRecords.propTypes = {
  setTotalHours: PropTypes.func.isRequired,
}

export default TimeRecords
