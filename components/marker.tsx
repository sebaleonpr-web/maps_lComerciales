import React from "react";
import { Marker } from "react-native-maps";

    //Estructura locales.json
    type Local = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    address: string;
    type: string;
    };

    type Props = {
    data: Local[];
    //void no devuelve valor
    onPress?: (item: Local) => void; 
    };

    export default function MarkerComponent({ data, onPress }: Props) {
    
    //En caso de faltar data (datos de local) no retorna el marker
    if (!data || !Array.isArray(data)) return null;

    return (
        <>
        {/*data.map recorre el arreglo y lo guarda en loc (nuevo arreglo)*/}
        {data.map((loc) => (
            <Marker
            key={loc.id}
            coordinate={{ latitude: loc.lat, longitude: loc.lng }}
            title={loc.name}
            description={loc.type + ' • ' + loc.address}
            onPress={({/*Aqui va el modal*/}) => onPress && onPress(loc)}
            />
        ))}
        </>
    );
}
