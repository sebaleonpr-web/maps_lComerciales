import React, { useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import locales from "../../assets/data/locales.json";



export default function MapScreen() {

  const map_reference = React.useRef<MapView>(null);

  
  //Region inicial del mapa (Santiago, Chile)
  const region = {
    latitude: -33.4489,
    longitude: -70.6693,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() =>{
    referencias();

  },
  []);

return (
  <View style={{ flex: 1 }}>
    <MapView ref={map_reference} style={{ flex: 1 }} initialRegion={region}>
      {locales.map((loc) => (
        <Marker
          key={loc.id}
          coordinate={{ latitude: loc.lat, longitude: loc.lng }}
          title={loc.name}
          description={loc.type + " • " + loc.address}
        />
      ))}
    </MapView>
  </View>
);
}




//////////////////////////////////////////////////////////////////
function referencias(){
  const map_reference = React.useRef<MapView>(null);
  if (!map_reference.current || locales.length === 0) return; 
  const marcadores = locales.map (l => ({latitude: l.lat, longitude: l.lng }));
  map_reference.current.fitToCoordinates(marcadores, {
    edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
    animated: true,
  });
}