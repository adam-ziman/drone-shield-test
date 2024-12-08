import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App load', () => {
	test('App loads map', () => {
		render(<App />)
		expect(screen.getByTestId('map')).toBeDefined()
	})
})
