import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import ModalContent from './ModalContent'

test('ModalContent component renders with the expected UI elements', () => {
const { getByText } = render(
<ModalContent />)

expect(getByText('I should fail'))

})
