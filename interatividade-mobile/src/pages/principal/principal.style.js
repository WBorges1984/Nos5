import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
  containerPrincipal:{
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.black,
    alignItems: 'center',
    padding: 40,
    gap: 20,
  },
  content:{
    width: '100%',
    gap: 10,
    marginTop: 20,
  },
  agendaTitle:{
    fontSize: FONT_SIZE[24],
    color: COLORS.white,
    fontWeight: 'bold',
    alignItems: 'left',
  },
  textoAgenda:{
    width: '100%',
    alignItems: 'flex-start',
    fontWeight: 'bold',
  },
  menuBottom:{
    width: '100%',
    backgroundColor: COLORS.grayDark,
  },

});

export default styles;