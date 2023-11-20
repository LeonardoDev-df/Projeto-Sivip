import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
    tableHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#000',
      paddingVertical: 12,
    },
    tableHeaderCell: {
      flex: 1,
      justifyContent: "flex-start",
      fontWeight: 'bold',
      padding: 8,
      textAlign: 'left',
    },
  
  
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 6,
  },
  tableCell: {
    flex: 1,
    justifyContent: 'space-evenly',
      fontWeight: 'bold',
      padding: 8,
      textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  
  tableSeparator: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    height: '100%',
    position: 'absolute',
  },
  verticalSeparator: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    height: '100%',
    position: 'absolute',
  },
  table: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 1,
      textAlign: 'left',
  
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    padding: 6,
    backgroundColor: '#f2f2f2',
    width: '100%'
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 8,
    width: '85%'
  },
  textRight: {
    textAlign: 'right',
  },
  
  container: {
    padding: 14,
    backgroundColor: '#fff',
  },
  
  card: {
    display: "flex",
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },
  formInline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  formGroup: {
    flex: 1,
    marginRight: 10,
  },
  monthSelector: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    fontSize: 14,
  },
  smallCenteredButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  printButton: {
    fontSize: 16,
    color: '#007BFF',
  },
  box: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    flex: 2,
    marginRight: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    flex: 1,
  },
  companyText: {
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 10,
  },
  items: {
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
  },
  footer: {
    marginTop: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerTotalLabel: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  footerTotalValue: {
    fontSize: 12,
  },
  footerLiquidoLabel: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  footerLiquidoValue: {
    fontSize: 14,
  },
  footerInfo: {
    marginTop: 10,
  },
});
