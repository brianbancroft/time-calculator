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
 * Contains and renders each time record. Saves to local storage
 */

class TimeRecords extends Component {
  constructor() {
    super()

    let storageRecords = localStorage.getItem('time-records')
    storageRecords = JSON.parse(storageRecords) || [
      { numberHours: 0, startTime: '', endTime: '' },
    ]

    this.state = {
      records: storageRecords,
    }
  }

  componentDidUpdate() {
    const { records } = this.state
    const { setTotalHours } = this.props

    const add = (a, { numberHours }) => a + numberHours
    const sumOfHours = records.reduce(add, 0)

    setTotalHours(sumOfHours)
  }

  updateRecord = index => ({ numberHours, startTime, endTime }) => {
    const { records } = this.state
    records[index] = { numberHours, startTime, endTime }
    localStorage.setItem('time-records', JSON.stringify(records))

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
    records.push({ startTime: '', endTime: '', numberHours: 0 })
    localStorage.setItem('time-records', JSON.stringify(records))

    this.setState({ records })

    this.addElementButton.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  render() {
    const { records } = this.state

    const { updateRecord, addTimeCard, removeElement } = this

    const recordElements = records.map(
      ({ numberHours, startTime, endTime }, index) => (
        <TimeRecord
          key={index}
          index={index}
          numberHours={numberHours}
          startTime={startTime}
          endTime={endTime}
          onChange={updateRecord(index)}
          removeElement={removeElement(index)}
        />
      ),
    )

    return (
      <Box direction="column" align="center" pad={{ bottom: '40px' }}>
        {recordElements}
        <Button onClick={addTimeCard} margin={{ top: '5px' }}>
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
            <Text size="xxlarge" margin={{ bottom: '5px' }}>
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
