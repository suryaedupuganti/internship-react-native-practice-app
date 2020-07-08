import React from "react";
import { View } from "react-native";
import styles from "./App.style";
import LoginPage from "./src/Pages/LoginPage";

export const App = () => {
  return (
    <View style={styles.container}>
      <LoginPage></LoginPage>
    </View>
  );
};

export default App;
