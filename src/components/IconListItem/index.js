import { ListItem, Text, Icon } from "native-base";
import React from "react";

const IconListItem = () => {
  return (
    <>
      <ListItem>
        <Icon active name="add" />
        <Text>Simon Mignolet</Text>
      </ListItem>
      <ListItem>
        <Icon active name="add" />
        <Text>Simon Mignolet</Text>
      </ListItem>
    </>
  );
};

export default IconListItem;
