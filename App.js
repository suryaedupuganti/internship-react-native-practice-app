import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  Card,
  CardItem,
} from "native-base";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
// import { Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };
export const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    }).then(() => {
      setIsReady(true);
    });
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    // <View style={styles.container}>
    //   <Text>Welcome to the exouhsia 1 2 3 </Text>
    //   <Welcome></Welcome>
    //   <Movies></Movies>
    //   <Description></Description>
    //   <Flexbox></Flexbox>
    // </View>
    <Container>
      <Header>
        <Body>
          <Title>Welcome to Exouhsia</Title>
        </Body>
      </Header>
      <Grid>
        <Col style={{ backgroundColor: "#635DB7", height: 200 }}></Col>
        <Col style={{ backgroundColor: "#00CE9F", height: 200 }}></Col>
      </Grid>
      <Content>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Inside</Text>
          </ImageBackground>
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: 200,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default App;
