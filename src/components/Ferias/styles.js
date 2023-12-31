// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: -300
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1, // Adiciona uma borda
    borderColor: '#ddd', // Cor da borda
    alignItems: 'center', // Centraliza o conteúdo
    marginTop: 1 // Remove a margem superior para alinhar no topo
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  table: {
    fontWeight: 'bold',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 8, // Adiciona distância abaixo de cada item
  },
  tableHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
    flex: 1,
  },
  tableRow: {
    fontWeight: 'bold',
    flexDirection: 'row', // Para alinhar os textos na mesma linha
    marginBottom: 8,
  },
  tableCell: {
    fontWeight: 'bold',
    marginBottom: 12,
    flex: 1, // Cada célula ocupa a mesma largura
  },
});

export default styles;
