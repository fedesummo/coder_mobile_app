import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { BackBtn } from "~components";
import styles from "./styles";

const Scanner = () => {
  const [hasScannerPermissions, setHasScannerPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert(
      "¡Código escaneado!",
      "El código QR se ha escaneado correctamente",
      [{ text: "Volver", onPress: () => setScanned(false) }]
    );
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
  }, []);

  useEffect(() => {
    if (!hasScannerPermissions) {
      navigation.navigate("Home");
    }
  }, [hasScannerPermissions]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.backBtn}>
        <BackBtn />
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
    </View>
  );
};

export default Scanner;
