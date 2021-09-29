import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../testUtils'

import EditDetails from './EditDetails'

test('Input fields display pre-populated data', async () => {
  const props = {
    firstName: '',
    lastName: '',
    businessName: 'test',
    addressStreet: '',
    addressSuburb: '',
    addressCity: '',
    product: '',
    containers: ''
  }

  renderWithRedux(<EditDetails />, { initialState: props })
  const input = await screen.findByRole('textbox', { name: 'Business Name:' })
  expect(input).toHaveAttribute('value', 'test')
})
