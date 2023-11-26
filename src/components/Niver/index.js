import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Recrute } from '../Recrute';
import { Rendimentos } from '../Rendimentos';
import { First } from '../First';

const data = [
  { day: '01/11', name: 'MARIA APARECIDA', branch: 'PIONEIRA BRASILIA - GAMA' },
  { day: '11/11', name: 'JOSE DE DEUS', branch: 'PIONEIRA BRASILIA - ITAPOA' },
  { day: '12/11', name: 'LUIZ SOUZA', branch: 'PIONEIRA BRASILIA - SÃO SEBASTIÃO' },
  { day: '21/11', name: 'CARLOS AGUIAR', branch: 'PIONEIRA BRASILIA - GAMA' },
  // ... Adicione mais dados conforme necessário
];

export function Niver() {
    const [selectedBranch, setSelectedBranch] = useState('');
    const navigation = useNavigation();

    const [visibleComponent, setVisibleComponent] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isMenu, setIsMenu] = useState(true);
    

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
      <ScrollView style={styles.container}>

 
       <Text style={styles.title}>Aniversariantes do mês</Text>
          
                <Picker
                  selectedValue={selectedBranch}
                  onValueChange={(itemValue) => setSelectedBranch(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="TODAS AS FILIAIS" value="" />
                  <Picker.Item label="PIONEIRA BRASILIA - SIA/DF" value="1" />
                  <Picker.Item label="PIONEIRA BRASILIA - ITAPOA" value="2" />
                  <Picker.Item label="PIONEIRA BRASILIA - SÃO SEBASTIÃO" value="3" />
                  <Picker.Item label="PIONEIRA BRASILIA - GAMA" value="4" />
                  {/* Adicione mais itens conforme necessário */}
                </Picker>

                <View style={styles.table}>
                    <View style={styles.thead}>
                        <Text style={styles.th}>Dia</Text>
                        <Text style={styles.th}>Nome</Text>
                        <Text style={styles.th}>Filial</Text>
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                        <View style={styles.thead}>
                            <Text style={styles.th}>{item.day}</Text>
                            <Text style={styles.th}>{item.name}</Text>
                            <Text style={styles.th}>{item.branch}</Text>
                        </View>
                        )}
                    />
                </View>
     
      </ScrollView>
    );
  }