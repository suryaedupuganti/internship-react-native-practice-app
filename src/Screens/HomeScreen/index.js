import { Content, Header, Icon, Input, Item, Button, Text } from "native-base";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <Content>
      <Header searchBar rounded>
        <Icon name="menu" />
        <Item>
          <Icon name="search" />
          <Input placeholder="Search" />
        </Item>
        <Icon name="mail" />
        <Icon name="notifications" />
      </Header>
      <Text> </Text>
      <Button
        onPress={() => {
          navigation.navigate("Ingredients");
        }}
      >
        <Text>Ingredients</Text>
      </Button>
    </Content>
  );
};

export default HomeScreen;
