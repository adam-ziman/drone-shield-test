import { useEffect, useState } from 'react'
import { throttle } from '../utils/throttle'
import type { Position } from '../types'

export const useGetDronePosition = () => {
	const [position, setPosition] = useState<Position>({ lat: 0, lng: 0 })
	useEffect(() => {
		const websocket = new WebSocket('ws://localhost:8080/')

		websocket.onopen = () => {
			console.log('Web Socket connected.')
		}

		websocket.onmessage = (event) => {
			const data = JSON.parse(event.data)
			throttle(() => {
				setPosition({ lat: data.latitude, lng: data.longitude })
			}, 500)()
		}

		websocket.onerror = (event) => {
			// Do something
		}
	}, [setPosition])

	return position
}
