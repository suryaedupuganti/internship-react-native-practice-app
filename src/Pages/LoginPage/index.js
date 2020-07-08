import React from "react";
import { TextInput, Button } from "react-native";
import StyledTextInput from "../../components/StyledTextInput";

export const LoginPage = () => {
  const [value1, onChange1Text] = React.useState("Email Address");
  const [value2, onChange2Text] = React.useState(" Password");
  return (
    <>
      <StyledTextInput
        value={value1}
        onChangeText={onChange1Text}
      ></StyledTextInput>
      <StyledTextInput
        value={value2}
        onChangeText={onChange2Text}
      ></StyledTextInput>

      <Button style={{ width: "100%" }} title="Login" onPress={() => {}} />
    </>
  );
};

export default LoginPage;
