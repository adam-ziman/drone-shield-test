import { describe, expect, test } from 'vitest'
import { useGetDroneTrackingLine } from '../hooks/useGetDroneTrackingLine'
import { renderHook } from '@testing-library/react'

describe('useGetDroneTrackingLine', () => {
	test('Drone marker tracking ine is rendered', () => {
		const initialValue = { lat: 0, lng: 0 }
		// const nextValue = { lat: 1, lng: 1 }
		const expectedValue = [{ lat: 0, lng: 0 }]

		const { result } = renderHook(() => useGetDroneTrackingLine(initialValue))

		// act(() => {
		// result.current.setTrackingLine(nextValue)
		// })

		expect(result.current).toEqual(expectedValue)
	})
})
