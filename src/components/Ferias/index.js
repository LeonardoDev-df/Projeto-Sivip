import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles'; // Certifique-se de importar os estilos adequados

export const Ferias = () => {


  return (
    <View style={styles.container}>
        <View style={styles.card}>
                <Text style={styles.heading}>Férias</Text>

                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Dias</Text>
                  <Text style={styles.tableHeader}>Data inicial</Text>
                  <Text style={styles.tableHeader}>Data final</Text>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text>30</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>03/07/2023</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>01/08/2023</Text>
                  </View>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text>30</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>06/07/2022</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>04/08/2022</Text>
                  </View>
                </View>
          </View>
    </View> 
  );
};




