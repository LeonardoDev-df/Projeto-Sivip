import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Pagamento() {
  // Informações fictícias
  const companyName = 'VIACAO PIONEIRA LTDA';
  const companyCnpj = 'CNPJ: 00.000.000/0000-01';

  const [selectedMonth, setSelectedMonth] = useState('DEZEMBRO/2023');

  const handlePrint = () => {
    // Adicione a lógica para imprimir aqui
    console.log('Imprimir');
  };

  // Informações do funcionário
  const employeeData = {
    codigo: '000000',
    nome: 'MARIA DA SILVA',
    funcao: 'COBRADOR (A)',
    setor: 'PIONEIRA ITAPOA',
    admissao: '04/06/2000',
    pis: '00000000',
    rg: '000000',
    cpf: '000.000.000-87',
  };

  const months = [
    '10/2023', '09/2023', '08/2023', '07/2023', '06/2023', '05/2023', '04/2023', '03/2023', '02/2023', '01/2023',
    '13/2022', '12/2022', '11/2022', '10/2022', '09/2022', '08/2022', '07/2022', '06/2022', '05/2022', '04/2022', '03/2022', '02/2022', '01/2022',
    '13/2021', '12/2021', '11/2021', '10/2021', '09/2021', '08/2021', '07/2021', '06/2021',
  ];

  // Itens da tabela
  const tableItems = [
    { codigo: '001', descricao: 'SALARIO', referencia: '30,00', vencimentos: '1.361,48', descontos: '' },
    { codigo: '007', descricao: 'ADICIONAL NOTURNO', referencia: '5,65', vencimentos: '6,99', descontos: '' },
    { codigo: '025', descricao: 'FERIADO TRABALHADO', referencia: '1,00', vencimentos: '45,38', descontos: '' },
    { codigo: '129', descricao: 'DESC REMUNERADO ADC NOTURNO', referencia: '1,68', vencimentos: '', descontos: '' },
    { codigo: '256', descricao: 'BANCO DE HORA 50%', referencia: '60,28', vencimentos: '599,57', descontos: '' },
    { codigo: '257', descricao: 'DSR/ BH 50%', referencia: ' ', vencimentos: '134,50', descontos: '' },
    { codigo: '129', descricao: 'DESC REMUNERADO ADC NOTURNO', referencia: '1,68', vencimentos: '', descontos: '' },
    { codigo: '528', descricao: 'DSR S/ FERIADO', referencia: '60,28', vencimentos: '599,57', descontos: '' },
    { codigo: '074', descricao: 'INSS SALARIO', referencia: '9.00', vencimentos: ' ', descontos: '171,02' },
    { codigo: '081', descricao: 'ADIANTAMENTO DE SALARIOS', referencia: '', vencimentos: '', descontos: '680,74' },
    { codigo: '537', descricao: 'TICKET ALIMENTACAO', referencia: '', vencimentos: '', descontos: '31,78' },
    // Adicione outros itens conforme necessário
  ];

  // Totais
  const totalVencimentos = '2.120,29';
  const totalDescontos = '883,54';
  const valorLiquido = '1.236,75';

  // Informações da tabela de footer
  const footerData = {
    salarioBase: '1.361,48',
    salContrINSS: '2.120,29',
    baseCalcFGTS: '2.120,29',
    fgtsMes: '169,62',
    baseCalcIRRF: '1.592,29',
    faixaIRRF: '0,00',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

     
          <View style={styles.formInline}>
              <View style={styles.formGroup}>
                <Picker
                  style={styles.smallCenteredButton}
                  selectedValue={selectedMonth}
                  onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                >
                  {/* Adicione os itens do mês conforme necessário */}
                  <Picker.Item style={styles.buttonText} label="Janeiro" value="JANEIRO/2023" />
                  <Picker.Item label="Fevereiro" value="FEVEREIRO/2023" />
                  {/* ... Outros meses ... */}
                </Picker>
              </View>
              <View style={styles.formGroup}>
                <TouchableOpacity
                  style={styles.smallCenteredButton}
                  onPress={handlePrint}
                >
                  <Text style={styles.buttonText}>
                    <Icon name="print" size={20} /> Imprimir
                  </Text>
                </TouchableOpacity>
              </View>
           </View>
      

      <View style={styles.card}>
        <View style={styles.box}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleText}>Recibo de Pagamento de Salário</Text>
              <Text>{selectedMonth}</Text>
            </View>
            <View style={styles.company}>
              <Text style={styles.companyText}>{companyName}</Text>
              <Text>{companyCnpj}</Text>
            </View>
          </View>

          

          <ScrollView >
              <View style={styles.items}>
                <View style={styles.tableResponsive}>
                  <View style={styles.table}>
                    <View style={styles.tableHeader}>
                      <Text style={styles.tableHeaderCell}>Cód.</Text>
                      <Text style={styles.tableHeaderCell}>Descrição</Text>
                      <Text style={styles.tableHeaderCell}>Referência</Text>
                      <Text style={styles.tableHeaderCell}>Vencimentos</Text>
                      <Text style={styles.tableHeaderCell}>Descontos</Text>
                    </View>

                    {tableItems.map((item, index) => (
                      <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.codigo}</Text>
                        <Text style={styles.tableCell}>{item.descricao}</Text>
                        <Text style={[styles.tableCell, styles.textRight]}>{item.referencia}</Text>
                        <Text  style={[styles.tableCell, styles.textRight]} >  {item.vencimentos}</Text>
                        <Text style={[styles.tableCell, styles.textRight]}>{item.descontos}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </ScrollView>



         
 
          {/* Totais e Valor Líquido */}
           
          <View style={styles.totalsFooter}>
            <View style={styles.row}>
              <View style={[styles.column, { flex: 3 }]} />
              <View style={[styles.column, styles.borderBottom]}>
                <Text style={styles.smallText}>Total de Vencimentos</Text>
                <Text style={styles.pullRight}>2.120,29</Text>
              </View>
              <View style={[styles.column, styles.borderBottom]}>
                <Text style={styles.smallText}>Total de Descontos</Text>
                <Text style={styles.pullRight}>883,54</Text>
              </View>
            </View>
            <View style={[styles.row, styles.borderBottom]}>
              <View style={[styles.column, { flex: 3 }]} />
              <View style={[styles.column, styles.textLeft, styles.borderBottom]}>
                <Text style={styles.smallText}>Valor Líquido = </Text>
                <Text style={styles.textRight}>1.236,75</Text>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.footer}>
          <View style={styles.tableResponsive}>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Salário Base</Text>
                <Text style={styles.tableHeaderCell}>Sal. Contr. INSS</Text>
                <Text style={styles.tableHeaderCell}>Base Cálc. FGTS</Text>
                <Text style={styles.tableHeaderCell}>FGTS do Mês</Text>
                <Text style={styles.tableHeaderCell}>Base Cálc. IRRF</Text>
                <Text style={styles.tableHeaderCell}>Faixa IRRF</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1.361,48</Text>
                <Text style={styles.tableCell}>2.120,29</Text>
                <Text style={styles.tableCell}>2.120,29</Text>
                <Text style={styles.tableCell}>169,62</Text>
                <Text style={styles.tableCell}>1.592,29</Text>
                <Text style={styles.tableCell}>0,00</Text>
              </View>
            </View>
          </View>
        </View>
        
    </ScrollView>

  );
}
