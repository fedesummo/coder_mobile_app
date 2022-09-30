import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Alert, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { BackBtn } from "~components";
import styles from "./styles";

const Scanner = () => {
  const [hasScannerPermissions, setHasScannerPermissions] = useState(null);

  const navigation = useNavigation();

  const handleBarCodeScanned = ({ data }) => {
    const id = +data;
    navigation.navigate("Place", { id });
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        setHasScannerPermissions(true);
      } else {
        Alert.alert(
          "¡Surgió un error!",
          "Para poder utilizar el escáner de códigos QR debes habilitar los permisos de la cámara",
          [{ text: "Volver", onPress: () => navigation.goBack() }]
        );
        setHasScannerPermissions(false);
      }
    })();
  }, [setHasScannerPermissions]);

  return (
    hasScannerPermissions && (
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
      >
        <View style={styles.backBtn}>
          <BackBtn />
        </View>
        <View style={styles.flotantMsgCtn}>
          <Text style={styles.flotantMsgText}>
            Apuntá la cámara hacia alguno de los códigos QR repartidos por la
            ciudad
          </Text>
        </View>
      </BarCodeScanner>
    )
  );
};

export default Scanner;
