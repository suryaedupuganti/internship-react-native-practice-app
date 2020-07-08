import React from "react";
import { TextInput } from "react-native";
import styles from "./style";

const StyledTextInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(text) => onChangeText(text)}
      placeholder={value}
    />
  );
};
export default StyledTextInput;
