import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameContext } from "../context/GameContext";
import ChoiceButton from "../components/ChoiceButton";
import ScoreBoard from "../components/ScoreBoard";

const choices = ["Rock", "Paper", "Scissors"];

const GameScreen = () => {
  const { userScore, computerScore, playRound } = useContext(GameContext);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const handleChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = playRound(choice, computerRandomChoice);

    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(outcome);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>User: {userChoice || "?"}</Text>
      <Text style={styles.resultText}>Computer: {computerChoice || "?"}</Text>
      <Text style={styles.result}>{result}</Text>
      <Text></Text>


      <Text style={styles.title}>Choose Rock, Paper, or Scissors</Text>

      <View style={styles.buttonRow}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} title={choice} onPress={() => handleChoice(choice)} />
        ))}
      </View>
      {/* Use ScoreBoard component */}
      <ScoreBoard userScore={userScore} computerScore={computerScore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121212" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#FFFFFF" },
  buttonRow: { flexDirection: "row", gap: 10, marginBottom: 20 },
  resultText: { fontSize: 18, color: "#FFFFFF", fontWeight: "bold" },
  result: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#FFD700" },
});

export default GameScreen;
