import React from "react";
import { Text, View } from "react-native";
import styles from "./style.js";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text>Right</Text>
      <Text>Left</Text>
    </View>
  );
};

export default TopBar;
