import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Niver } from '../Niver';
import { Recrute } from '../Recrute';
import { First } from '../First';

export function Rendimentos() {
  const navigation = useNavigation();

  const [visibleComponent, setVisibleComponent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMenu, setIsMenu] = useState(true);

  const downloadInformeRendimentos = () => {
    const downloadLink = 'anexos/RENDIMENTOS091966963159891872022.pdf';
    Linking.openURL(downloadLink);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMenu(false);
    setVisibleComponent(null); // Limpa o componente visível ao fechar o menu
  };

  const handleMenuClick = (screenName) => {
    if (visibleComponent === screenName) {
      // Se o mesmo componente já estiver visível, feche-o
      closeMenu();
    } else {
      // Se outro componente estiver visível, troque para o novo componente
      setVisibleComponent(screenName);
      navigation.navigate(screenName);
      
      if (screenName === 'Rendimentos') {
        setIsMenu(true);
      }


      // Se o screenName for 'First', feche o menu
      if (screenName === 'First') {
        setIsMenuOpen(false);
        setIsMenu(false);
      } else {
        // Se clicar em qualquer outro componente, mantenha o menu aberto, mas esconda o Informe de Rendimentos
        setIsMenu(true);
      }
    }
  };
  

  return (
    <View>
      
        <View style={styles.card}>
          <Text style={styles.heading}>Informe de Rendimentos</Text>
          <Text>
            <TouchableOpacity onPress={downloadInformeRendimentos}>
              <Text style={styles.link}>Informe de Rendimentos 2022</Text>
            </TouchableOpacity>
          </Text>
        </View>
  
    </View>
  );
}
