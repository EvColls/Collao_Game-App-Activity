import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer theme={DarkTheme}> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" }, // Dark background
          headerTintColor: "#FFD700", // Gold text
          headerTitleStyle: { fontWeight: "bold" }, // Bold title
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
