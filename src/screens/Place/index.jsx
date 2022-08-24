import { View, ImageBackground, ScrollView, Text } from "react-native";
import styles from "./styles";
import { BackBtn, PrimaryBtn } from "~components";
import img from "./test.jpg";

const Place = () => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.imgContainer}
        imageStyle={{ height: "100%" }}
        source={img}
        resizeMode="cover"
      >
        <View style={styles.backBtn}>
          <BackBtn />
        </View>
      </ImageBackground>
      <ScrollView style={styles.bodyContainer}>
        <Text style={styles.heading}>Autódromo</Text>
        <Text style={styles.gralText}>
          {
            "Fue inaugurado en 2019 dentro de un predio ferial de 90 hectáreas ubicado en el km 255 de la Autopista que une Buenos Aires con Rosario.\nEn su interior se realizan cada año eventos deportivos y empresariales, exposiciones a cielo abierto y convenciones.\nEl trazado de la pista permite recibir a todas las categorías automovilísitcas nacionales e internacionales"
          }
        </Text>
        <View style={styles.bodyBtn}>
          <PrimaryBtn text="Marcar como visitado" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Place;
