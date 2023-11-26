import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles'; // Certifique-se de importar os estilos adequados

export function Convocation() {
  return (
    <View style={styles.alertContainer}>
    <View style={styles.card}>
            <Text style={styles.heading}>Histórico de Convocações</Text>

            <Text style={styles.alertText}>Nenhum registro encontrado.</Text>
      </View>
</View> 
  );
}
