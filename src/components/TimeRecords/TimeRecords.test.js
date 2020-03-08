import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import TimeRecords from './TimeRecords'

test('TimeRecords component renders with the expected UI elements', () => {
const { getByText } = render(
<TimeRecords />)

expect(getByText('I should fail'))

})
