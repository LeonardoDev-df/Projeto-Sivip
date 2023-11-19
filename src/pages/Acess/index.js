import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Home } from '../home';
import { Inicio } from '../../components/Inicio'
import { First } from '../../components/First'
import { Pagamento } from '../../components/Pagamento'
import { Information } from '../../components/Information'
import { Ferias } from '../../components/Ferias'
import { Convocation } from '../../components/Convocation'
import styles from './styles'; // Importando os estilos do arquivo styles.js
import NewsAndMenu from '../../components/NewsAndMenu';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Acess" component={Acess} />
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Pagamento" component={Pagamento} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Ferias" component={Ferias} />
          <Stack.Screen name="Convocation" component={Convocation} />

          {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default function Acess({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // Obtenha a função de navegação usando o hook useNavigation
  // Em Acess.js
  const [contentComponent, setContentComponent] = useState('NewsAndMenu'); // Defina o padrão
  const userData = {
    companyName: 'Minha Empresa Ltda',
    pdfLinkText: 'Visualizar Regulamento Interno e Código de Conduta e Ética',
    personalDataTitle: 'Dados Pessoais do Funcionário',
    userImageUrl: '../../assets/Logo.png',
    employeeSince: '24/06/2000',
    fullName: 'Maria da Silva',
    cpf: '123.456.000-00',
    employeeId: '98765',
    jobTitle: 'Analista de Recursos Humanos',
    branch: 'Filial Principal',
    birthDate: '10/05/1000',
    phoneNumber: '(11) 00000-0000',
    email: 'maria.silva@example.com',
  };
  

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

 

  const handleMenuClick = (screenName) => {
    closeMenu();
  
    // Atualize o estado para controlar qual componente deve ser renderizado
    setContentComponent(screenName);
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
  
     {/* Conteúdo principal da tela */}
     {contentComponent === 'NewsAndMenu' && (
        <NewsAndMenu />
      )}

      {contentComponent === 'First' && (
        <First />
      )}


      {contentComponent === 'Pagamento' && (
        <Pagamento />
      )}

      <ScrollView vertical style={styles.newsScroll}>
      {contentComponent === 'Information' && (
              <Information userData={userData}/>
            )}
      </ScrollView>
            

      {contentComponent === 'Ferias' && (
        <Ferias />
      )}

      {contentComponent === 'Convocation' && (
        <Convocation />
      )}
      
      {/* Menu lateral simulado */}
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          <View style={styles.headerMenu}>
          </View>    
                  <TouchableOpacity style={styles.orga}   onPress={() => handleMenuClick('First')}>
                  <Ionicons size={19}  name="home" />
                    <Text style={styles.menuItem}>  Início</Text>
                  </TouchableOpacity>
              
              
                  <TouchableOpacity style={styles.orga}  onPress={() => handleMenuClick('Information')}>
                  <Icon name="user-circle-o" size={19} color="#000" />
                    <Text style={styles.menuItem}>  Informações</Text>
                  </TouchableOpacity>
                  {/* Adicione mais itens de menu conforme necessário */}


                  <TouchableOpacity style={styles.orga} onPress={() => handleMenuClick('Pagamento')}>
                    <Icon name="money" size={18} color="#000" />
                    <Text style={styles.menuItem}>  Pagamento</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.orga} onPress={() => handleMenuClick('Ferias')}>
                    <Icon name="soccer-ball-o" size={18} color="#000" />
                    <Text style={styles.menuItem}> Férias</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.orga}   onPress={() => handleMenuClick('Convocation')}>
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
