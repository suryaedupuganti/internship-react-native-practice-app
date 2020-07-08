import React from "react";
import { View } from "react-native";
import styles from "./App.style";
import LoginPage from "./src/Pages/LoginPage";
import MainPage from "./src/Pages/MainPage";

export const App = () => {
  return (
    <View style={styles.container}>
      {/* <LoginPage></LoginPage> */}
      <MainPage></MainPage>
    </View>
  );
};

export default App;
