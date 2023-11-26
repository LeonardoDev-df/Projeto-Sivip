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
  alertContainer: {
    backgroundColor: '#e8f2f7', // Cor de fundo
    padding: 15,
    marginBottom: 20,
    borderLeftWidth: 4, // Adiciona a borda à esquerda
    borderLeftColor: '#31708f', // Cor da borda à esquerda
    borderRadius: 4,
    top: -350
  },
  alertText: {
    color: '#31708f', // Cor do texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
