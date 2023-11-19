// NewsAndMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
//import NewsCard from '../NewsCard.js';
import Pagamento from '../Pagamento'; // Importe o componente Pagamento
import Inicio from '../Inicio'; 
import { NewsCard, NewsSection, LinksSection} from '../Inicio'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; // Importando os estilos do arquivo styles.js

export default function NewsAndMenu({ openMenu, handleMenuClick }) {

  
  return (
    <ScrollView vertical style={styles.newsScroll}>
      <LinksSection />
      {/* Adicione o componente Information aqui */}
      <NewsCard title="Seguro Odonto da Porto Saúde" date="01/01/2023" content="O seu plano Odontológico da Porto Saúde já está ativo." next="Aproveite já seu benefício, baixe o aplicativo." />
      <NewsCard title="Seguro Odonto da Porto Saúde" date="01/01/2023" content="O seu plano Odontológico da Porto Saúde já está ativo." next="Aproveite já seu benefício, baixe o aplicativo." />

      {/* Adicione o componente Information aqui */}
     

    </ScrollView>

    
  );
}
