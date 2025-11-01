import React, { useEffect } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import locales from "../../assets/data/locales.json";
import MarkerComponent from "../../components/marker";


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
        <MarkerComponent data={locales} />
      </MapView>
    </View>
  );
}



//////////////////////////////////////////////////////////////////

//Encargado de centrar el mapa en los locales ingresados en el json
function referencias(){
  const map_reference = React.useRef<MapView>(null);
  if (!map_reference.current || locales.length === 0) return; 
  const marcadores = locales.map (l => ({latitude: l.lat, longitude: l.lng }));
  map_reference.current.fitToCoordinates(marcadores, {
    edgePadding: { top: 70, right: 70, bottom: 70, left: 70 },
    animated: true,
  });
}
