import React, { useCallback, useEffect, useMemo } from "react";
import { Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import locales from "../../assets/data/locales.json";

export default function mapScreen() {

  const map_reference = React.useRef<MapView>(null)








  
  return (
    


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
