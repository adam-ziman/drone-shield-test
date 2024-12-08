import { describe, expect, test, vi } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'
import App from '../App'
import { useGetDronePosition } from '../hooks/useGetDronePosition'

const WebSocketMock = vi.fn(() => ({
	onopen: vi.fn(),
	onmessage: vi.fn(),
	onerror: vi.fn(),
}))

vi.stubGlobal('WebSocket', WebSocketMock)

describe('Drone marker', () => {
	test('Drone marker is rendered', () => {
		render(<App />)
		expect(screen.getByTestId('drone-marker')).toBeDefined()
	})
})

describe('useGetDronePosition', () => {
	test('Drone marker is rendered', () => {
		const expectedValue = { lat: -33.946765, lng: 151.1796423 }
		WebSocketMock().onmessage.mockReturnValue(() => expectedValue)

		const { result } = renderHook(() => useGetDronePosition())

		expect(result.current).toEqual(expectedValue)
	})
})
