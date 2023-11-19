import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NewsCard, NewsSection, LinksSection} from '../Inicio'
import styles from './styles';

export function First() {
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
