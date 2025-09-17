import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./buttonCustom.style";
import icons from "../../constants/icons";

function Button({ texto, onPress, cor, icon }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: cor }]} onPress={onPress}>
       {icon === 'facebook' && <Image source={icons.facebook} style={{ width: 30, height: 30 }} />}
       {icon === 'google' && <Image source={icons.google} style={{ width: 24, height: 24 }} />}
       {icon === 'apple' && <Image source={icons.apple} style={{ width: 40, height: 40 }} />}
        {icon === 'tiktok' && <Image source={icons.tiktok} style={{ width: 30, height: 30 }} />}
        {icon === 'instagram' && <Image source={icons.instagram} style={{ width: 30, height: 30 }} />}
        {icon === 'youtube' && <Image source={icons.youtube} style={{ width: 30, height: 30 }} />}
        {icon === 'spotify' && <Image source={icons.sportify} style={{ width: 30, height: 30 }} />} 
      <>
        <Text style={styles.texto}>{texto}</Text>
      </>
    </TouchableOpacity>
  );
}

export default Button;
