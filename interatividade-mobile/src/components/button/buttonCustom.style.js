import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height:59,
        backgroundColor: COLORS.grayMedium,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    texto: {
        fontSize: FONT_SIZE[24],
        color: COLORS.white,
        padding: 10,
        textAlign: "center"
    },
    textoErro:{
        position:'absolute',
        top:38,
        left:80,
        color:COLORS.red,
        fontSize:FONT_SIZE[16],
        fontWeight:'bold'

    }
  })

export default styles;