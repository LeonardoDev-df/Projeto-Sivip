import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Recrute } from '../Recrute';
import { Niver } from '../Niver';
import { First } from '../First'
import { Rendimentos } from '../Rendimentos'
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Recrute" component={Recrute} />
          <Stack.Screen name="Rendimentos" component={Rendimentos} />
          {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}



// Componente para a seção de notícias
function NewsSection () {

    const [visibleComponent, setVisibleComponent] = useState('First');

    const handleMenuClick = (screenName) => {
   
      setVisibleComponent(screenName);
    };
    return (
      <ScrollView vertical style={styles.newsScroll}>
        <View style={styles.headerMain}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.link} onPress={() => handleMenuClick('First')}>
                <Text style={styles.linkText}>Notícias</Text>
              </TouchableOpacity>

              {/* Use a função navigate para abrir a tela Recrute */}
              <TouchableOpacity style={styles.link} onPress={() => handleMenuClick('Recrute')}>
                <Text style={styles.linkText}>Recrutamento Interno</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.column}>
              <TouchableOpacity style={styles.link} onPress={() => handleMenuClick('Niver')}>
                <Text style={styles.linkText}>Aniversariantes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.link} onPress={() => handleMenuClick('Rendimentos')}>
                <Text style={styles.linkText}>Informe de Rendimentos</Text>
              </TouchableOpacity>
            </View>
          </View>
      
      <ScrollView vertical style={styles.newsScroll}>
        {/* Conteúdo principal da tela */}
        <View>
          {visibleComponent === 'First' && <First />}
          {visibleComponent === 'Recrute' && <Recrute />}
          {visibleComponent === 'Niver' && <Niver />}
          {visibleComponent === 'Rendimentos' && <Rendimentos />}
        </View>
       
      </ScrollView>

       
      </ScrollView>
    );
}

// Componente para a seção de links
function LinksSection() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Digamos que você tenha um array de notícias assim:
  const newsData = [
    {
      title: 'Seguro Odonto da Porto Saúde',
      date: 'Postado em 01/09/2023 08:21',
      content: 'O seu plano Odontológico da Porto Saúde já está ativo.',
      next: 'Aproveite já seu benefício, baixe o aplicativo.',
      imageUrl: require('../../assets/noticia.png'),
    },
    {
      title: 'Seguro Odonto da Porto Saúde',
      date: 'Postado em 01/09/2023 08:21',
      content: 'O seu plano Odontológico da Porto Saúde já está ativo.',
      next: 'Aproveite já seu benefício, baixe o aplicativo.',
      imageUrl: '../../assets/noticia.png',
    },
    // Adicione mais objetos de notícias conforme necessário
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (screenName) => {
    closeMenu();
    setVisibleComponent(screenName);
  };

  return (
    <View style={{ flex: 1 }}>
      

    

     
    </View>
  );
}

export {  NewsSection, LinksSection };
// Componente para a seção de notícias

const styles = StyleSheet.create({
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
  
});



