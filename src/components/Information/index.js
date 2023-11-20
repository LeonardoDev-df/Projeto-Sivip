import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export function Information({ userData }) {
  return (
    <View style={styles.container}>
      {/* Card do Regulamento Interno */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Regulamento Interno</Text>
        <TouchableOpacity onPress={() => { /* handle press */ }}>
          <Text style={styles.pdfLinkText}>
            <Image source={require('../../assets/Logo.png')} /> {userData.regulationPdfLinkText}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card de Dados Pessoais */}
      <View style={[styles.card, styles.userInfoCard]}>
        <Text style={styles.cardTitle}>Dados Pessoais</Text>
        <View style={styles.row}>
          <View style={styles.userImg}>
            <View style={styles.imgWrapper}>
              <Image source={{ uri: userData.userImageUrl }} style={styles.userImg} />
            </View>
            <Text style={styles.employeeSince}>{`Funcionário desde\n${userData.employeeSince}`}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.fieldTitle}>Nome Completo</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.fullName} />

            <Text style={styles.fieldTitle}>CPF</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.cpf} />

            <Text style={styles.fieldTitle}>Matrícula</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.employeeId} />

            <Text style={styles.fieldTitle}>Função</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.jobTitle} />

            <Text style={styles.fieldTitle}>Filial</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.branch} />

            <Text style={styles.fieldTitle}>Data de Nascimento</Text>
            <TextInput style={styles.simplebox} editable={false} value={userData.birthDate} />

            {/* ... outros campos de dados ... */}
            
                      
            <View style={styles.formGroup}>
              <Text style={styles.fieldTitle}>Telefone   <Ionicons size={16} name="ios-call" /></Text>
              <View style={styles.inputGroup}>
                <TextInput style={styles.simplebox} editable={false} value={userData.phoneNumber} />
                <TouchableOpacity style={styles.iconContainer} onPress={() => { /* handle edit phone */ }}>             
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.fieldTitle}>E-Mail <Ionicons size={16} name="ios-mail" /></Text> 
              <View style={styles.inputGroup}>
                <TextInput style={styles.simplebox} editable={false} value={userData.email} />
                <TouchableOpacity style={styles.iconContainer} onPress={() => { /* handle edit email */ }}>              
                </TouchableOpacity>
              </View>
            </View>




          </View>
        </View>
      </View>
    </View>
  );
}

export default Information;
