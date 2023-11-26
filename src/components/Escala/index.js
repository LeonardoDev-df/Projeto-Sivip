import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export const Escala = () => {
  return (
    <View style={styles.Topo}>
      <View style={styles.card}>
        <Text style={styles.boldText}>Prezado Colaborador,</Text>
        <Text>Favor confirmar a sua escala no mural da sua garagem!</Text>
      </View>

            <View style={styles.card}>
                <View style={styles.row}>
                        <View style={styles.col}>
                        <Text style={styles.heading}>Escala</Text>
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

            </View>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.card}>
         

          <Text>Dias de folga do mês: 04, 12, 18, 26</Text>

          <ScrollView style={styles.tableContainer} horizontal>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Data</Text>
              <Text>27/11/2023</Text>
              <Text style={styles.tableHeader}>Data</Text>
              <Text>28/11/2023</Text>
              {/* Adicione mais datas conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Linha</Text>
              <Text>(764.2)/ROD. P. PILOTO</Text>
              <Text style={styles.tableHeader}>Linha</Text>
              <Text>(764.2)/ROD. P. PILOTO</Text>
              {/* Adicione mais informações de linha conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Saída</Text>
              <Text>P2</Text>
              <Text style={styles.tableHeader}>Saída</Text>
              <Text>P2</Text>
              {/* Adicione mais informações de saída conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Chegada</Text>
              <Text>GARAGEM ITAPOA</Text>
              <Text style={styles.tableHeader}>Chegada</Text>
              <Text>GARAGEM ITAPOA</Text>
              {/* Adicione mais informações de chegada conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Veículo</Text>
              <Text>226751</Text>
              <Text style={styles.tableHeader}>Veículo</Text>
              <Text>226781</Text>
              {/* Adicione mais informações de veículo conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Hora entrada</Text>
              <Text>12:30</Text>
              <Text style={styles.tableHeader}>Hora entrada</Text>
              <Text>12:10</Text>
              {/* Adicione mais informações de hora de entrada conforme necessário */}
            </View>
            <View style={styles.tableColumn}>
              <Text style={styles.tableHeader}>Hora saída</Text>
              <Text>21:00</Text>
              <Text style={styles.tableHeader}>Hora saída</Text>
              <Text>20:00</Text>
              {/* Adicione mais informações de hora de saída conforme necessário */}
            </View>

            {/* Adicione mais itens conforme necessário */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
