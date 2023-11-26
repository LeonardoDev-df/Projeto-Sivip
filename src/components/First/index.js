import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NewsCard, NewsSection, LinksSection} from '../Inicio'
import styles from './styles';

export function First() {

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
  return (
    <ScrollView vertical style={styles.newsScroll}>
     <View>
          {newsData.map((news, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.heading}>{news.title}</Text>
              <Text style={styles.info}>{news.date}</Text>
              <Text style={styles.content}>{news.content}</Text>
              <Text style={styles.next}>{news.next}</Text>
              
              {/* Adicione o componente Image para exibir a imagem */}
              {news.imageUrl && (
                <Image
                source={require('../../assets/noticia.png')}
                style={styles.image}
              />              
              )}
            </View>
          ))}
        </View>
      
      {/* Adicione o componente Information aqui */}
     

    </ScrollView>
  );
}
