import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    color: '#555',
    marginBottom: 8,
  },
  content: {
    marginBottom: 8,
  },
  next: {
    color: 'blue',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default NewsCard;
