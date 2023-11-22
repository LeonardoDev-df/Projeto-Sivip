import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    // Adicione seus estilos específicos para o componente pai
    marginTop: 10,
  },
  tableResponsive: {
    // Adicione seus estilos específicos para a tabela responsiva
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  table: {
    // Adicione seus estilos específicos para a tabela
    flexDirection: 'column',
  },
  tableHeader: {
    // Adicione seus estilos específicos para o cabeçalho da tabela
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    // Adicione seus estilos específicos para as linhas da tabela
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;
