import { Callout, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { useMemo } from "react";
import styles from "./styles";

const Map = () => {
  const places = useSelector(({ places }) => places.list);

  const initialRegion = useMemo(
    () => ({
      latitude: -33.34136405483334,
      longitude: -60.207797645975134,
      latitudeDelta: 0.08,
      longitudeDelta: 0.02,
    }),
    []
  );

  return (
    <View style={styles.screenContainer}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {places.map((element) => {
          const { id, name, coordinates } = element;
          return (
            <Marker key={id} coordinate={coordinates}>
              <Callout>
                <Text>{name}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;
