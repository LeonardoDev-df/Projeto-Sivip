import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        top: -80
      },
      row: {
        flexDirection: 'row',
      },
      col: {
        flex: 1,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      select: {
        height: 40,
        backgroundColor: '#3faaff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        color: '#fff'
      },
      tableContainer: {
        marginTop: 46,

      },
      tableHeader: {
        fontWeight: 'bold',
        marginBottom: 8,
      },
      tableRow: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-evenly'
      },

})