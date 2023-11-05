import React, { useEffect, useState } from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//context
import { useIp } from "../../Context/IpContext";

function Map() {
  const { geoData } = useIp();
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (geoData) {
      const { lat, lng } = geoData.location;
      setMapCenter([lat, lng]);
      setIsVisible(false); // Haritayı gizle
      setTimeout(() => {
        setIsVisible(true); // 1 saniye sonra haritayı yeniden göster
      }, 50);
    }
  }, [geoData]);

  return (
    <div >
      {isVisible && geoData && (
        <MapContainer center={mapCenter} zoom={13} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={mapCenter}>
            <Popup>A pretty popup.</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
