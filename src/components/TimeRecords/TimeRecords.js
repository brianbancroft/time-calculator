import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TimeRecord } from '..'
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
    console.log('set number hours for record triggered')
    console.log('number hours ', numberHours)
    console.log('index ', index)

    const { records } = this.state
    records[index] = numberHours

    this.setState({ records })
  }

  render() {
    const { records } = this.state
    const { setNumberHoursForRecord } = this

    const recordElements = records.map((numberHours, index) => (
      <TimeRecord
        key={index}
        numberHours={numberHours}
        onNumberHoursChange={setNumberHoursForRecord(index)}
      />
    ))

    return <div>{recordElements}</div>
  }
}

TimeRecords.propTypes = {}

export default TimeRecords
