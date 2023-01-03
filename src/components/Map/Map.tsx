import React, {useContext, useEffect, useState} from "react";
import './Map.css'
import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icon'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from 'types'
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json()

            setAds(data)

        })()
    },[search])

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[50.0519039,19.9542394]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}