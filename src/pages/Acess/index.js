import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Home } from '../home';
import { Pagamento } from '../../components/Pagamento'
// Em Acess.js
import { MainNavigator } from '../../routes/routes'; // Importe o novo Navigator


const Stack = createStackNavigator();
// Adicione uma nova rota para Pagamento
<Stack.Screen name="Pagamento" component={Pagamento} />
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Acess" component={Acess} />
        {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Componente para o card de notícias
class NewsCard extends Component {
  render() {
    const { title, date, content, next, imageUrl= require("../../assets/noticia.png") } = this.props;
    
    return (
      <View style={styles.card}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.info}>{date}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.next}>{next}</Text>
         {/* Adicione o componente Image para exibir a imagem */}
         {imageUrl && <Image source={require("../../assets/noticia.png")} style={styles.image} />}

      </View>
    );
  }
}

// Componente para a seção de notícias
class NewsSection extends Component {
  render() {
    const { newsData } = this.props;

    return (
      <View>
        {/* Renderize os cards de notícias */}
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </View>
    );
  }
}

export default function Acess({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // Obtenha a função de navegação usando o hook useNavigation
  const navigation = useNavigation();
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function handleOpen() {
    setModalVisible(true);
  }

  function handleClose() {
    setModalVisible(false);
  }

  // Notícias fictícias para teste
  const newsData = [
    { 
     title: 'Seguro Odonto da Porto Saúde',
     date: 'Postado em 01/11/2023 08:21',
     content: 'O seu plano Odontológico da Porto Saúde já está ativo.',
     next: 'Aproveite já seu benefício, baixe o aplicativo.',
    },
    { 
      title: 'Seguro Odonto da Porto Saúde',
      date: 'Postado em 01/11/2023 08:21',
      content: 'O seu plano Odontológico da Porto Saúde já está ativo.',
      next: 'Aproveite já seu benefício, baixe o aplicativo.',
     },
   
    // Adicione mais notícias conforme necessário
  ];

  // Em Acess.js
const handleMenuClick = (screenName) => {
  // Fecha o menu lateral
  closeMenu();

  // Navega para a tela correspondente
  navigation.navigate(screenName);
};


  const handleLogout = () => {
    // Navegue para a tela 'Acess' após o login
    navigation.navigate('home');
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* Botão para abrir o menu lateral */}
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>

        {/* Logo */}
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />

        <Icon name="user-circle-o" size={30} color="#000" onPress={handleOpen} />
      </View>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.contentModal}>
          <Text style={styles.title} onPress={handleClose}>
            {' '}
            Alterar senha
          </Text>
          
          <Text style={styles.title} onPress={handleLogout}>
            {' '}
            Sair
          </Text>
        </View>
      </Modal>

      {/* Conteúdo menu da tela principal */}
      <View style={styles.headerMain}>
        {/* Seção de Notícias e Recrutamento Interno */}
        <View style={styles.column}>
          <TouchableOpacity style={styles.link} onPress={() => console.log('Notícias')}>
            <Text style={styles.linkText}>Notícias</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => console.log('Recrutamento Interno')}>
            <Text style={styles.linkText}>Recrutamento Interno</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Aniversariantes e Informe de Rendimentos */}
        <View style={styles.column}>
          <TouchableOpacity style={styles.link} onPress={() => console.log('Aniversariantes')}>
            <Text style={styles.linkText}>Aniversariantes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => console.log('Informe de Rendimentos')}>
            <Text style={styles.linkText}>Informe de Rendimentos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo principal da tela */}
      <ScrollView vertical style={styles.newsScroll}>
        {/* Mapeie suas notícias aqui */}
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </ScrollView>
      
      {/* Menu lateral simulado */}
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          <View style={styles.headerMenu}>
          </View>    
                  <TouchableOpacity  style={styles.orga} onPress={closeMenu}>
                  <Ionicons size={19}  name="home" />
                    <Text style={styles.menuItem}>  Início</Text>
                  </TouchableOpacity>
              
              
                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="user-circle-o" size={19} color="#000" />
                    <Text style={styles.menuItem}>  Informações</Text>
                  </TouchableOpacity>
                  {/* Adicione mais itens de menu conforme necessário */}


                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="money" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Pagamento</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.orga}  onPress={() => handleMenuClick('Pagamento')}>
                  <Icon name="soccer-ball-o" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Férias</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="megaphone" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Convocações</Text>
                  </TouchableOpacity>       

                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="clock-o" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Frequência</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="calendar" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Escala</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.orga}  onPress={closeMenu}>
                  <Icon name="trophy" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Gamificação</Text>
                  </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
