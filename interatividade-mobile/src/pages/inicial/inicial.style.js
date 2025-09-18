import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons:{
    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    margin:10
  },
  btn:{
    width: "100%",
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    margin:20
  },
  btnBottom:{
    flexDirection:'row',
    gap:20,
    marginTop:50,
    marginRight:100,
    marginLeft:100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo:{
    marginBottom: 30,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textosTitle:{
    color: "#FFF",
    fontSize: FONT_SIZE[32],
    marginBottom: 20,
    textAlign: 'center',
    width: "80%",
    fontFamily: 'Montserrat-Medium' 
  },
  textosSubTitle:{
    color: "#FFF",
    opacity: 0.5,
    fontSize: FONT_SIZE[24],
    marginBottom: 20,
    textAlign: 'center',
    width: "80%",
    fontFamily: 'Montserrat-Medium' 
  }
 
});

export default styles;