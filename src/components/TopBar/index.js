import React from "react";
import { Searchbar, Text, View } from "react-native";
import styles from "./style.js";

const TopBar = ({ searchQuery, onChangeSearch }) => {
  return (
    <View style={styles.container}>
      <Text>Right</Text>
      <Text>search</Text>
      <Text>Left</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default TopBar;
