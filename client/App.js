import { StatusBar } from "expo-status-bar";
import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@react-navigation/native";

import Home from './components/Home'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Home />
          <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}