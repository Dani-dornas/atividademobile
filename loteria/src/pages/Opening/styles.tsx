import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  button: {
    backgroundColor: "#007bff", // Fundo azul
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25, // Borda arredondada
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // Cor do texto branco
    fontSize: 16,
    fontWeight: "bold",
  },
  titulo: {
    color: "#000",
    fontSize: 16
  }
});

export default styles;