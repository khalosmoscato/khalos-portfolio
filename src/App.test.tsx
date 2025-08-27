import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App component', () => {
  it('renders Vite + React heading', () => {
    const { getByText } = render(<App />)
    expect(getByText(/Vite \+ React/i)).toBeInTheDocument()
  })
})
