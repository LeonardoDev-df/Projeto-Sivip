import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles'; // Certifique-se de importar os estilos adequados

export const Ferias = () => {
  // Informações fictícias
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

  return (
  
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
  );
};




export default Ferias;
