import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f3f3',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    numbersContainer: {
      flexDirection: 'row',            // Para que os números sejam organizados em linha
      flexWrap: 'wrap',               // Permite que os números que não cabem na linha atual se movam para a próxima
      justifyContent: 'center',       // Centraliza os círculos na tela
      marginBottom: 20,
    },
    date: {
      fontSize: 16,
      color: '#666',
    },
    errorText: { // Novo estilo para mensagens de erro
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 20,
    },
  });

  export default styles;