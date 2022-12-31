import React, {useContext, useEffect} from "react";
import './Map.css'
import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icon'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext)

    useEffect(() => {
        console.log('Make request to search for', search)

    },[search])

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[50.0519039,19.9542394]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.0312924,19.8540149]}>
                    <Popup>
                        <h2>Kostrze</h2>
                        <p>Dom</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}