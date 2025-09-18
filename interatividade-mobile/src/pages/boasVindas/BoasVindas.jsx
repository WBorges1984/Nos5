import { View, Text, Image, Alert, SafeAreaView  } from "react-native";
import logo from "../../assets/logo.png";
import styles from "./boasVindas.style";
import Button from "../../components/button/ButtonCustom";
import { COLORS } from "../../constants/theme";


const BoasVindas = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <Image source={logo} style={styles.logo} width={150} height={150}/>
      <Text style={styles.textosSubTitle}>
        Para participar, siga o grupo nas redes sociais!
      </Text>
      <View style={styles.buttons}>
        <Button
          cor={COLORS.grayDark}
          icon={"instagram"}
          texto={"Instagram"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
          
          <Button
            cor={COLORS.grayDark}
            icon={"tiktok"}
            texto={"TikTok"}
            onPress={() => Alert.alert("Ainda será implementado.")}
            />
        <Button
          cor={COLORS.grayDark}
          icon={"facebook"}
          texto={"Facebook"}
          onPress={() => Alert.alert("Ainda será implementado.")}
        />
        <Button
          cor={COLORS.grayDark}
          icon={"youtube"}
          texto={"YouTube"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
        <Button
          cor={COLORS.grayDark}
          icon={"spotify"}
          texto={"Spotify"}
          onPress={() => Alert.alert("Ainda será implementado.")}
          />
      </View>
      <View style={styles.buttonsBottom}>
        <Button corTexto={COLORS.blackLight}
          cor={COLORS.golden} icon={""} texto={"Já segui!"} onPress={()=> navigation.navigate("Principal")}/>
      </View>
    </View >
       
  );
};

export default BoasVindas;
