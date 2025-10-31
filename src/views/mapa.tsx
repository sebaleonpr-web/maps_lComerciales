import React, { useEffect } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import locales from "../../assets/data/locales.json";
import MarkerComponent from "../components/ui/marker";

export default function MapScreen( ) {
        const map_reference = React.useRef<MapView>(null);

        
    
    

    

    //const mapa
    const region={
    latitude: -33.4489,
    longitude: -70.6693,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    };

    useEffect(()=> {

    marcs();
        
    },[]);


    function marcs(){
        if(!map_reference.current || locales.length ===0) return;   

        const marcadores =locales.map((l) => ({ latitude: l.lat, longitude: l.lng}));
        map_reference.current.fitToCoordinates(marcadores, {

        edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },

        animated: true,
    });
    }
    return (
        <View style={{ flex: 1 }}>
        <MarkerComponent region={region} data={locales} />
        </View>
    );
}