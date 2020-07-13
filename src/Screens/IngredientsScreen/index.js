import { Body, Card, CardItem, Text } from "native-base";
import React from "react";

import IconListItem from "../../components/IconListItem";
import styles from "./style";

const IngredientsScreen = () => {
  return (
    <Card style={styles.content}>
      <CardItem header>
        <Text>Ingredients</Text>
      </CardItem>
      <CardItem>
        <Body>
          <IconListItem></IconListItem>
          <IconListItem></IconListItem>
          <IconListItem></IconListItem>
          <IconListItem></IconListItem>
          <IconListItem></IconListItem>
          <IconListItem></IconListItem>
        </Body>
      </CardItem>
    </Card>
  );
};

export default IngredientsScreen;
