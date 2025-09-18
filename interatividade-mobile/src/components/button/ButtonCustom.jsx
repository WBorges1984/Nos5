import { Text, TouchableOpacity, View } from "react-native"; // Adicionado View
import styles from "./buttonCustom.style";
import { COLORS } from "../../constants/theme";
import ButtonIcon from "./ButtonIcon/ButtonIcon";

function Button({ texto, onPress, cor, icon, corTexto = COLORS.white }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: cor }]} onPress={onPress}>
      {icon && <ButtonIcon iconName={icon} />}
      <Text style={[styles.texto, { color: corTexto }]}>{texto}</Text>
    </TouchableOpacity>
  );
}

export default Button;