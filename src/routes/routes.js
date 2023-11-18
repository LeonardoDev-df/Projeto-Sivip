import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/home';
import Acess from '../pages/Acess';
import { Pagamento } from '../components/Pagamento';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Acess" component={Acess} />
    </Stack.Navigator>
  );
}


const MainStack = createStackNavigator();

export function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Pagamento">
      
      <MainStack.Screen name="Pagamento" component={Pagamento} />
      {/* Adicione mais telas conforme necessário */}
    </MainStack.Navigator>
  );
}