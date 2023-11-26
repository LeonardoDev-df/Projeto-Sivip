import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cardTitlea:{
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'blue'
  },
  cardTitle:{
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  
  card: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto
  },
  pdfLinkText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10, // Centraliza o texto
  },
  userInfoCard: {
    // Adicione qualquer estilo adicional para o card de informações do usuário
  },
  personalDataTitle: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto
  },
  row: {
    flexDirection: 'row',
  },
  userImg: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: 8, // Adapte o valor conforme necessário
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imgWrapper: {
    // Adicione estilos para o invólucro da imagem
  },
  employeeSince: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center', // Centraliza o texto
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center', // Centraliza os itens verticalmente
  },
  simplebox: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 6, // Aumenta o preenchimento
    textAlign: 'center', // Centraliza o texto
  },
  formGroup: {
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
