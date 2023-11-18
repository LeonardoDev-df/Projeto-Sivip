import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Acess from '../Acess';

const Stack = createStackNavigator();

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

export  function Home() {
 
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  // Obtenha a função de navegação usando o hook useNavigation
  const navigation = useNavigation();
  const handleLogin = () => {
    // Lógica de login aqui usando as variáveis 'matricula' e 'senha'
    console.log('Matrícula:', matricula);
    console.log('Senha:', senha);
    // Adicione a lógica de autenticação ou navegação aqui
    // Navegue para a tela 'Acess' após o login
    navigation.navigate('Acess');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />

      <Text style={styles.title}>S I V I P</Text>
      
      <TextInput
        style={[styles.input, styles.TextInput]}
        placeholder="Matrícula"
        onChangeText={(text) => setMatricula(text)}
        value={matricula}
        keyboardType="numeric"  // Define o teclado para aceitar apenas números
        onKeyPress={({ nativeEvent }) => {
          // Filtra caracteres não numéricos
          if (nativeEvent.key !== undefined && isNaN(nativeEvent.key)) {
            return false;
          }
        }}
        maxLength={10}  // Define um limite de caracteres, ajuste conforme necessário
      />



      <TextInput
        style={[styles.input, styles.TextInput]}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        value={senha}
        keyboardType="numeric"  // Define o teclado para aceitar apenas números
        onKeyPress={({ nativeEvent }) => {
          // Filtra caracteres não numéricos
          if (nativeEvent.key !== undefined && isNaN(nativeEvent.key)) {
            return false;
          }
        }}
        maxLength={10}  // Define um limite de caracteres, ajuste conforme necessário
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


function OtherScreen() {
  // Página de destino após o login
  return (
    <View>
      <Text>Você está na outra tela!</Text>
    </View>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Acess" component={Acess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fcfc30'
  },
  title: {  
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 26,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
    borderRadius: 12
  },
  input: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '70%',
    alignSelf: 'center', // Para centralizar o componente
    textAlign: 'center',
    backgroundColor: '#f9e867',
    borderRadius: 3,
  },
  TextInput: {
    // Estilos específicos para o placeholder "Senha"
    color: '#000',  // Cor do texto do placeholder
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '50%',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
