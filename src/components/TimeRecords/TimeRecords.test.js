import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import TimeRecords from './TimeRecords'

test('TimeRecords component renders with the expected UI elements', () => {
  const { getByText } = render(<TimeRecords />)

  expect(getByText('I should fail'))
})

describe('Add record button ', () => {
  it('adds a record when pushed', () => {})
})

describe('component rendering', () => {
  it('renders the correct number of components', () => {})
})

describe('time calculation', () => {
  it('correctly adds the number of stuff ', () => {})
})
