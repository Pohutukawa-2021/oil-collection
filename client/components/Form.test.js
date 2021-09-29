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
