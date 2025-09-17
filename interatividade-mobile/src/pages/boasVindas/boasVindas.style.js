import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: COLORS.black,
    alignItems: 'center',
    padding: 40,
    gap: 20,
  },
  textosSubTitle: {
    color: COLORS.white50,
    fontSize: FONT_SIZE[20],
    textAlign: 'center',
    fontWeight: '400',
    
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    gap: 20,
  },
  buttonsBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 70,
    width: "100%",
    
  },

});

export default styles;