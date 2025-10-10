import { View, Text, Image, Alert } from "react-native";
import logo from "../../assets/logo.png";
import styles from "./principal.style";
import Button from "../../components/button/ButtonCustom";
import { COLORS } from "../../constants/theme";

const Principal = ({ navigation }) => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} width={150} height={150} />
        <View style={styles.content}>
          <Button
            cor={COLORS.greenDark}
            icon={"nota"}
            corTexto={COLORS.black}
            texto={"Votação de Músicas"}
            onPress={() => Alert.alert("Ainda será implementado.")}
          />
          <Button
            cor={COLORS.golden}
            icon={"photo"}
            corTexto={COLORS.black}
            texto={"Selfie com o Grupo"}
            onPress={() => Alert.alert("Ainda será implementado.")}
          />
          <Button
            cor={COLORS.blue}
            icon={"ranking"}
            corTexto={COLORS.black}
            texto={"Ranking dos Fãs"}
            onPress={() => Alert.alert("Ainda será implementado.")}
          />
        </View>
        <View style={styles.textoAgenda}>
          <Text style={styles.agendaTitle}>Agenda de Shows!</Text>
        </View>
      </View>
      <View style={styles.menuBottom}>
        <Text>Home</Text>
        <Text>Votação</Text>
        <Text>Selfie</Text>
        <Text>Ranking</Text>
        <Text>Perfil</Text>
      </View>
    </View>
  );
};

export default Principal;
