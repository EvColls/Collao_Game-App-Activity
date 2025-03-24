import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScoreBoard = ({ userScore, computerScore }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score</Text>
      <Text style={styles.score}>You: {userScore} | Computer: {computerScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginVertical: 10 },
  scoreText: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },
  score: { fontSize: 18, color: "#FFD700", fontWeight: "bold" },
});

export default ScoreBoard;
