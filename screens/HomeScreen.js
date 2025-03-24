import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Paper Scissors</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game")}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121212" },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFFFFF", marginBottom: 20 },
  button: { backgroundColor: "#FFD700", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#121212" },
});

export default HomeScreen;
