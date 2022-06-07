import React from "react";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/styles/theme";

import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./src/routes";



export default function App() {
  const [isLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    // isLoaded && (
      <NavigationContainer>

      <ThemeProvider theme={theme}>
       <Routes />
      </ThemeProvider>
      </NavigationContainer>
    // )
  );
}
