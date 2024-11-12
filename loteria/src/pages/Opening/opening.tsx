import React, { useEffect } from "react";
import { Text, Pressable, View } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";
import { SafeAreaView } from "react-native-safe-area-context";

// Define as props usando NativeStackScreenProps para tipar o componente com o tipo de navegação correto
interface Props extends NativeStackScreenProps<RootStackParamList, "Opening"> {}

const Opening: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // Navega para "LotteryDrawer" após 10 segundos
    const timer = setTimeout(() => {
      navigation.navigate("LotteryDrawer");
    }, 10000);

    // Limpa o timer se o componente desmontar antes dos 10 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao App!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LotteryDrawer")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Opening;
