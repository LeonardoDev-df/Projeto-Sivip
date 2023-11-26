import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from './styles'; // Certifique-se de importar os estilos adequados
import { Picker } from '@react-native-picker/picker';

export const  Frequency = () => {
  return (
    <ScrollView style={styles.card}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.heading}>Frequência</Text>
        </View>
        <View style={styles.col}>
          <Picker
            style={styles.select}
            selectedValue="2023-11"
            onValueChange={(itemValue) => console.log(itemValue)}
          >
            <Picker.Item label="11/2023" value="2023-11" />
            <Picker.Item label="10/2023" value="2023-10" />
            <Picker.Item label="09/2023" value="2023-09" />
            {/* Adicione mais itens conforme necessário */}
          </Picker>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Data</Text>
            <Text style={styles.tableHeader}>Entrada</Text>
            <Text style={styles.tableHeader}>I.Início</Text>
            <Text style={styles.tableHeader}>I.Fim</Text>
            <Text style={styles.tableHeader}>Saída</Text>
        </View>
       

        {/* Adicione mais itens conforme necessário */}
        <View style={styles.tableRow}>
          <Text>01/11/2023</Text>
          <Text>12:20</Text>
          <Text>16:29</Text>
          <Text>16:52</Text>
          <Text>21:53</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>03/11/2023</Text>
          <Text>12:00</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>04/11/2023</Text>
          <Text>13:20</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>05/11/2023</Text>
          <Text>11:20</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>07/11/2023</Text>
          <Text>12:20</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>08/11/2023</Text>
          <Text>12:20</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>09/11/2023</Text>
          <Text>12:20</Text>
          <Text>16:13</Text>
          <Text>16:50</Text>
          <Text>21:30</Text>
        </View>

        {/* Adicione mais itens conforme necessário */}
      </View>
    </ScrollView>
  );
};

