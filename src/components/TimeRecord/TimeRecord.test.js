import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import TimeRecord from './TimeRecord'

test('TimeRecord component renders with the expected UI elements', () => {
const { getByText } = render(
<TimeRecord />)

expect(getByText('I should fail'))

})
