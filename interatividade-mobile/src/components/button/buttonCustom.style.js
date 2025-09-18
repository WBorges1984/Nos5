import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row', // Essencial para alinhar ícone e texto
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, // Adiciona um espaço entre o ícone e o texto (requer RN >= 0.71)
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    // O gap acima substitui a necessidade de margin no texto
  },
});

export default styles;