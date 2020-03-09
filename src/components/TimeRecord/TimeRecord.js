import React, { useState, useEffect } from 'react'
import { Box, Button, Text } from 'grommet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled('input')`
  height: 22px;
  max-width: 85px;
  border: 1px solid #555;
`

const HoverBox = styled(Box)`
  transition: background 0.35s ease-in-out;

  #hoverMark {
    transition: color 0.35s ease-in-out;
  }

  &:hover {
    background: #ec5f04;

    #hoverMark {
      color: #ec5f04;
    }
  }
`

/**
 * This
 */
function TimeRecord({
  onNumberHoursChange,
  numberHours,
  removeElement,
  index,
}) {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [hoursWorked, setHoursWorked] = useState(0)

  useEffect(() => {
    if (startTime && endTime) {
      const matchTime = time => time.match(/(\d\d):(\d\d)/)

      // eslint-disable-next-line
      let [dontCare0, startHours, startMinutes] = matchTime(startTime)
      // eslint-disable-next-line
      let [dontCare1, endHours, endMinutes] = matchTime(endTime)

      startHours = Number(startHours)
      startMinutes = Number(startMinutes)
      endHours = Number(endHours)
      endMinutes = Number(endMinutes)

      if (endHours < startHours) endHours += 24

      const totalHours =
        endHours - startHours + (endMinutes - startMinutes) / 60

      const roundedHours = Math.round(totalHours * 10) / 10

      setHoursWorked(roundedHours)
    }
  }, [startTime, endTime])

  useEffect(() => {
    onNumberHoursChange({ numberHours: hoursWorked })
  }, [hoursWorked])

  const resetWorkedHours = () => {
    setHoursWorked(0)
  }

  return (
    <Box
      direction="row"
      margin={{ top: 'xxsmall', bottom: 'xxsmall' }}
      width="medium"
      border={{ size: 'small', color: 'brand' }}
    >
      <Box direction="row" pad="small">
        <Box direction="column" width="small" margin={{ right: '5px' }}>
          <label htmlFor={`start-time-${index}`}>Start</label>
          <StyledInput
            type="time"
            name={`start-time-${index}`}
            id={`start-time-${index}`}
            onChange={e => {
              if (e.target) {
                setStartTime(e.target.value)
              } else {
                setStartTime('')
                resetWorkedHours()
              }
            }}
            value={startTime}
          />
        </Box>
        <Box direction="column" width="small" margin={{ right: '5px' }}>
          <label htmlFor={`end-time-${index}`}>End</label>
          <StyledInput
            type="time"
            name={`end-time-${index}`}
            id={`end-time-${index}`}
            onChange={e => {
              if (e.target) {
                setEndTime(e.target.value)
              } else {
                setEndTime(null)
                resetWorkedHours()
              }
            }}
          />
        </Box>
        <Box direction="column" width="xsmall">
          <Box>
            <Text>Hours</Text>
            <Box
              border={{ size: 'xsmall', color: 'dark-2' }}
              pad={{ left: '5px' }}
            >
              {numberHours}
            </Box>
          </Box>
        </Box>
      </Box>
      <Button onClick={removeElement}>
        <HoverBox
          width="xxsmall"
          height="74px"
          background="status-critical"
          align="center"
          justify="center"
        >
          <Box
            style={{ borderRadius: '80px' }}
            background="white"
            width="30px"
            height="30px"
            justify="center"
            align="center"
          >
            <Text
              color="status-critical"
              id="hoverMark"
              weight="600"
              size="xlarge"
              margin={{ bottom: '2px' }}
            >
              -
            </Text>
          </Box>
        </HoverBox>
      </Button>
    </Box>
  )
}

TimeRecord.propTypes = {
  onNumberHoursChange: PropTypes.func,
  removeElement: PropTypes.func,
  numberHours: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

TimeRecord.defaultProps = {
  onNumberHoursChange: () => {},
  removeElement: () => {},
}

export default TimeRecord
