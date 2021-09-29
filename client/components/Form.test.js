import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form fields', () => {
  test('User can input first name', () => {
    render(<Form formData={{ firstName: 'Cris' }}/>)

    const firstName = screen.getByRole('textbox', { name: 'First Name:' })
    expect(firstName).toBeInTheDocument()
  })
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

  render(<Form formData={props}/>)
  const input = await screen.findByRole('textbox', { name: 'Business Name:' })
  expect(input).toHaveAttribute('value', 'test')
})
