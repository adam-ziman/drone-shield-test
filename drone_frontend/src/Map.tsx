import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { MarkerLayer, Marker } from 'react-leaflet-marker'
import DroneMarker from './icons/DroneMarker'
import { useGetDroneTrackingLine } from './hooks/useGetDroneTrackingLine'
import { useGetDronePosition } from './hooks/useGetDronePosition'

const mapStyles = {
	height: 'calc(100vh)',
}

const lineOptions = { color: 'red', stroke: true, dashArray: '10, 20' }

const Map = () => {
	const dronePosition = useGetDronePosition()
	const trackingLine = useGetDroneTrackingLine(dronePosition)
	return (
		<MapContainer
			center={[-33.946765, 151.1796423]}
			zoom={14}
			scrollWheelZoom={false}
			style={mapStyles}
			data-testId='map'
		>
			<TileLayer
				attribution=''
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<MarkerLayer>
				<Marker
					data-testId='drone-marker'
					position={[dronePosition.lat, dronePosition.lng]}
				>
					<DroneMarker />
				</Marker>
			</MarkerLayer>
			<Polyline pathOptions={lineOptions} positions={trackingLine} />
		</MapContainer>
	)
}

export default Map
