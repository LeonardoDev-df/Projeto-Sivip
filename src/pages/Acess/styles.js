// styles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContent: {
      flex: 1,
      padding: 16,
    },
    newsScroll: {
        // Estilos do ScrollView horizontal
      },
      contentModal:{
        position: "absolute",
        backgroundColor: "#FFF",
        width: "40%",
        top: 78,
        right: 20,
        paddingBottom: 10,
        paddingTop: 16,
        alignItems: 'flex-start',
        justifyContent: "center",
        borderRadius:12,
        paddingLeft: 20
      },
      headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
      },
      column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      link: {
        backgroundColor: '#ddd',
        padding: 5,
        marginBottom: 8,
        borderRadius: 5,
      },
      linkText: {
        color: 'orange',
        fontSize: 14,
        fontWeight: 'bold',
      },
      content: {
        position: 'absolute',
        backgroundColor: '#FFF',
        width: '40%',
        top: 78,
        right: 20,
        paddingBottom: 10,
        paddingTop: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 12,
        paddingLeft: 20,
      },
      headerMenu: {
        position: 'absolute',
        width: '122%',
        paddingTop: 89,
        padding: 36,
        backgroundColor: '#fcfc30', // Cor de fundo do cabeçalho
      },
      header: {
        flexDirection: 'row',
        paddingTop: 59,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 26,
        backgroundColor: '#fcfc30', // Cor de fundo do cabeçalho
      },
      menuButton: {
        // Adicione estilos específicos para o botão do menu, se necessário
      },
      logo: {
        width: 45,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 5,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      menuContainer: {
        position: 'absolute',
        paddingTop: 129,
        top: 0,
        left: 0,
        width: 178,
        height: '100%',
        backgroundColor: '#fff',
        padding: 16,
        zIndex: 1000,
      },
      orga: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 19,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        justifyContent: 'flex-start',
        fontSize: 19,
      },
      card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 3,
        paddingBottom: 2
      },
      info: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
      },
      content: {
        fontSize: 16,
      },
      next: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5
      },
      menuItem: {
        fontSize: 16,
        marginBottom: 8,
      },
      image: {
        width: '100%',
        height: 200, // Ajuste conforme necessário
        borderRadius: 8,
        marginBottom: 8,
      },
    });