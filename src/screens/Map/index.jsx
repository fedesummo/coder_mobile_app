import { Callout, Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { places } from "~constants";
import { useMemo } from "react";
import styles from "./styles";

const Map = () => {
  const { params } = useRoute();

  const initialRegion = useMemo(() => {
    const coordinates = params?.coordinates;
    const deltas = {
      latitudeDelta: 0.08,
      longitudeDelta: 0.02,
    };
    if (coordinates) {
      const { latitude, longitude } = coordinates;
      return { latitude, longitude, ...deltas };
    } else {
      return {
        latitude: -33.34136405483334,
        longitude: -60.207797645975134,
        ...deltas,
      };
    }
  }, [params]);

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
