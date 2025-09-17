import { View, Text, Image, Alert, SafeAreaView  } from "react-native";
import logo from "../../assets/logo.png";
import styles from "./boasVindas.style";
import Button from "../../components/button/ButtonCustom";


const BoasVindas = () => {
  return (
    <View  style={styles.container}>
      <Image source={logo} style={styles.logo} width={150} height={150}/>
      <Text style={styles.textosSubTitle}>
        Para participar, siga o grupo nas redes sociais!
      </Text>
      <View style={styles.buttons}>
        <Button
          cor={"#6d1b54ff"}
          icon={"instagram"}
          texto={"Instagram"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
          <Button
            cor={"#020202ff"}
            icon={"tiktok"}
            texto={"TikTok"}
            onPress={() => Alert.alert("Ainda será implementado.")}
            />
        <Button
          cor={"#1e3c63ff"}
          icon={"facebook"}
          texto={"Facebook"}
          onPress={() => Alert.alert("Ainda será implementado.")}
        />
        <Button
          cor={"#b90808ff"}
          icon={"youtube"}
          texto={"YouTube"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
        <Button
          cor={"#405f1dff"}
          icon={"spotify"}
          texto={"Spotify"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
      </View>
      <View style={styles.buttonsBottom}>
        <Button cor={"#e0bb00ff"} icon={""} texto={"Já segui!"} onPress={() => Alert.alert("Ainda será implementado.")}/>
      </View>
    </View >
       
  );
};

export default BoasVindas;
