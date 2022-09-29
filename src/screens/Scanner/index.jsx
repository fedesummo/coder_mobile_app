import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Alert, View } from "react-native";
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
          [{ text: "Volver" }]
        );
        setHasScannerPermissions(false);
      }
    })();
  }, [setHasScannerPermissions]);

  useEffect(() => {
    if (!hasScannerPermissions) {
      navigation.navigate("Home");
    }
  });

  return (
    <View style={styles.screenContainer}>
      <View style={styles.backBtn}>
        <BackBtn />
      </View>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
      />
    </View>
  );
};

export default Scanner;
