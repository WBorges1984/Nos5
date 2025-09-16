import { Text, TouchableOpacity } from "react-native";
import styles from "./buttonCustom.style";

function Button({ texto, onPress, cor, icon }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        {icon}
      <>
        <Text style={styles.texto}>{texto}</Text>
      </>
    </TouchableOpacity>
  );
}

export default Button;
