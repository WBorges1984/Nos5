import { View, Image, Alert, Text } from "react-native";
import logo from "../../assets/logo.png";
import Button from "../../components/button/ButtonCustom";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom";
import styles from "./inicial.style";


export default function Inicial({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.textosTitle}>Bem-Vindo ao Grupo Nós 5</Text>
      <Text style={styles.textosSubTitle}>Conecte-se para curtir os melhores shows de pagode</Text>
      <View style={styles.buttons}>
      <View style={styles.btn}>
        <Button icon={'google'} texto={"Continuar com Google"} onPress={()=>Alert.alert("Deverá estar logado para utilizar!")}/>
        <Button icon={'facebook'} texto={"Continuar com Facebook"} onPress={()=>Alert.alert("Ainda será implementado.")}/>
        <Button icon={'apple'} texto={"Continuar com Apple"} onPress={()=>Alert.alert("Deverá estar logado para utilizar!")}/>
      </View>

       {/* <ButtonBottom texto={"Logar"} textWhite fullW colorBackBlue onPress={()=> navigation.navigate("Login")}/> */}
      </View>
    </View>
  );
}
