import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../testUtils'

import EditDetails from './EditDetails'

test('The correct header is displayed', () => {
  renderWithRedux(<EditDetails />)
  const header = screen.getByRole('heading', { level: 2 })
  expect(header.textContent).toMatch('Update your details below')
})

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
