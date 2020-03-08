import React, { useState, useEffect } from 'react'
import { Box, Button, Text } from 'grommet'
import PropTypes from 'prop-types'

/**
 * This
 */
function TimeRecord({ onNumberHoursChange, numberHours, removeElement }) {
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
        <Box direction="column" width="small">
          <label htmlFor="start">Start</label>
          <input
            type="time"
            name="start"
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
        <Box direction="column" width="small">
          <label htmlFor="end">End</label>
          <input
            type="time"
            name="end"
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
        <Box direction="column" width="small">
          <Box>
            <Text>Hours</Text>
            <Box>{numberHours}</Box>
          </Box>
        </Box>
      </Box>
      <Button onClick={removeElement}>
        <Box
          width="xxsmall"
          background="status-critical"
          direction="column"
          align="center"
        >
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              R
            </Text>
          </Box>
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              E
            </Text>
          </Box>
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              M
            </Text>
          </Box>
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              O
            </Text>
          </Box>
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              V
            </Text>
          </Box>
          <Box>
            <Text size="xsmall" style={{ lineHeight: '12px' }}>
              E
            </Text>
          </Box>
        </Box>
      </Button>
    </Box>
  )
}

TimeRecord.propTypes = {
  onNumberHoursChange: PropTypes.func,
  removeElement: PropTypes.func,
  numberHours: PropTypes.number.isRequired,
}

TimeRecord.defaultProps = {
  onNumberHoursChange: () => {},
  removeElement: () => {},
}

export default TimeRecord
