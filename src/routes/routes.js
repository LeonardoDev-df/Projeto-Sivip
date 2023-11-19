import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/home';
import Acess from '../pages/Acess';
import { NewsAndMenu } from '../components/NewsAndMenu';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Acess" component={Acess} />
    </Stack.Navigator>
  );
}


// Em routes.js
const MainStack = createStackNavigator();

export function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="NewsAndMenu" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="NewsAndMenu" component={NewsAndMenu} />
      {/* Adicione mais telas conforme necessário */}
    </MainStack.Navigator>
  );
}
