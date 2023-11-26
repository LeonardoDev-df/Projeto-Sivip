import React, { useState } from 'react';
import { View, Text, TextInput,  ScrollView, Button, Alert, StyleSheet  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export function Recrute() {
  const [cargoSelecionado, setCargoSelecionado] = useState('');
  const [motivos, setMotivos] = useState('');
  const [alertaErro, setAlertaErro] = useState('');
  const [alertaSucesso, setAlertaSucesso] = useState('');

  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
    // Aqui você pode adicionar a lógica de validação, chamada de API, etc.

    // Exemplo de exibição de alertas
    setAlertaErro('Mensagem de erro aqui');
    setAlertaSucesso('Mensagem de sucesso aqui');
  };

  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.content}>
        <Text style={styles.title}>Recrutamento Interno</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cargo pretendido</Text>
          <Picker
            selectedValue={cargoSelecionado}
            onValueChange={(itemValue) => setCargoSelecionado(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione um cargo" value={null} />
            <Picker.Item label="MOTORISTA" value="1" />
            <Picker.Item label="COBRADOR" value="2" />
            <Picker.Item label="APONTADOR" value="3" />
            <Picker.Item label="ABASTECEDOR" value="4" />
            <Picker.Item label="ALMOXARIFE" value="61" />
            <Picker.Item label="APRENDIZ" value="63" />
            {/* Adicione mais itens conforme necessário */}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Motivos</Text>
          <TextInput
            multiline
            numberOfLines={4}
            value={motivos}
            onChangeText={(text) => setMotivos(text)}
            style={styles.textInput}
          />
        </View>

        {alertaErro !== '' && <Text style={styles.errorText}>{alertaErro}</Text>}
        {alertaSucesso !== '' && <Text style={styles.successText}>{alertaSucesso}</Text>}

        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

