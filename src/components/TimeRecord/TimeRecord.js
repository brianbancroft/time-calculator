import React, { useState, useEffect } from 'react'
import { Box, Text } from 'grommet'
import PropTypes from 'prop-types'

/**
 * This
 */
function TimeRecord({ onNumberHoursChange }) {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
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
    onNumberHoursChange({ numHours: hoursWorked })
  }, [hoursWorked])

  const resetWorkedHours = () => {
    setHoursWorked(0)
  }

  return (
    <Box
      direction="row"
      pad="small"
      border={{ size: 'small', color: 'brand' }}
      width="medium"
      margin="small"
    >
      <Box direction="column" width="small">
        <label htmlFor="start">Start</label>
        <input
          type="time"
          name="start"
          onChange={e => {
            if (e.target) {
              setStartTime(e.target.value)
            } else {
              setStartTime(null)
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
          <Text>Number Hours</Text>
          <Box>{hoursWorked}</Box>
        </Box>
      </Box>
    </Box>
  )
}

TimeRecord.propTypes = {
  onNumberHoursChange: PropTypes.func,
}

TimeRecord.defaultProps = {
  onNumberHoursChange: () => {},
}

export default TimeRecord
