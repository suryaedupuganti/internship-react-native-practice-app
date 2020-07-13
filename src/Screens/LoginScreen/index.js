import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from "native-base";
import IconTextBox from "../../components/IconTextBox";
import styles from "./style";

const LoginScreen = ({ navigation, setLogin }) => {
  return (
    <Card style={styles.content}>
      <CardItem header>
        <Text>Login</Text>
      </CardItem>
      <CardItem>
        <Body>
          <IconTextBox placeHolder="Email" imageString="mail" />
          <Text> </Text>
          <IconTextBox placeHolder="Password" imageString="lock" />
        </Body>
      </CardItem>
      <CardItem footer>
        <Button
          style={{ width: "100%" }}
          onPress={() => {
            setLogin(true);
          }}
        >
          <Text>Login</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default LoginScreen;
