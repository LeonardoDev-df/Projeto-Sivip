import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Pagamento() {
  // Informações fictícias
  const [selectedMonth, setSelectedMonth] = useState('DEZEMBRO/2023');
  const companyName = 'VIACAO PIONEIRA LTDA';
  const companyCnpj = 'CNPJ: 00.000.000/0000-01';

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

  // Itens da tabela
  const tableItems = [
    { codigo: '001', descricao: 'SALARIO', referencia: '30,00', vencimentos: '1.000,00', descontos: '' },
    { codigo: '007', descricao: 'ADICIONAL NOTURNO', referencia: '5,65', vencimentos: '6,99', descontos: '' },
    { codigo: '025', descricao: 'FERIADO TRABALHADO', referencia: '1,00', vencimentos: '45,38', descontos: '' },
    { codigo: '129', descricao: 'BANCO DE HORA 50%', referencia: '60,28', vencimentos: '559,57', descontos: '' },
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
          <TextInput
            style={styles.monthSelector}
            value={selectedMonth}
            placeholder="Selecione o mês"
            // Adicione a lógica para selecionar o mês
          />
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity
            style={styles.smallCenteredButton}
            onPress={() => { /* handle print */ }}
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

          

          <ScrollView  horizontal={true}>
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
                  <Text>{item.codigo}</Text>
                  <View style={styles.verticalSeparator} />
                  <Text>{item.descricao}</Text>
                  <View style={styles.verticalSeparator} />
                  <Text style={styles.textRight}>{item.referencia}</Text>
                  <View style={styles.verticalSeparator} />
                  <Text style={styles.textRight}>{item.vencimentos}</Text>
                  <View style={styles.verticalSeparator} />
                  <Text style={styles.textRight}>{item.descontos}</Text>
                </View>
              ))}
            </View>
          </ScrollView>


         
 
          {/* Totais e Valor Líquido */}
          <View style={styles.footer}>
            <View style={styles.footerRow}>
              <Text style={styles.footerTotalLabel}>Total de Vencimentos</Text>
              <Text style={styles.footerTotalValue}>{totalVencimentos}</Text>
            </View>
            <View style={styles.footerRow}>
              <Text style={styles.footerTotalLabel}>Total de Descontos</Text>
              <Text style={styles.footerTotalValue}>{totalDescontos}</Text>
            </View>
            <View style={styles.footerRow}>
              <Text style={styles.footerLiquidoLabel}>Valor Líquido</Text>
              <Text style={styles.footerLiquidoValue}>{valorLiquido}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Informações da tabela de footer */}
      <View style={styles.card}>
        <ScrollView horizontal={true}>
          <View style={styles.footerInfo}>
            <View style={styles.footerRow}>
              <Text>Salário Base: {footerData.salarioBase}</Text>
              <Text>Sal. Contr. INSS: {footerData.salContrINSS}</Text>
              <Text>Base Cálc. FGTS: {footerData.baseCalcFGTS}</Text>
            </View>
            <View style={styles.footerRow}>
              <Text>FGTS do Mês: {footerData.fgtsMes}</Text>
              <Text>Base Cálc. IRRF: {footerData.baseCalcIRRF}</Text>
              <Text>Faixa IRRF: {footerData.faixaIRRF}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
