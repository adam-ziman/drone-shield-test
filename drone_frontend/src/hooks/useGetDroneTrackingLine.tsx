import type { LatLngExpression } from 'leaflet'
import type { Position } from '../types'
import { useEffect, useState } from 'react'

export const useGetDroneTrackingLine = (dronePosition: Position) => {
	const [trackingLine, setTrackingLine] = useState<LatLngExpression[]>([])
	console.log('trackingLine', trackingLine)
	useEffect(() => {
		setTrackingLine((prev) => [
			...prev,
			{ lat: dronePosition.lat, lng: dronePosition.lng },
		])
	}, [dronePosition.lat, dronePosition.lng, setTrackingLine])

	return trackingLine
}
