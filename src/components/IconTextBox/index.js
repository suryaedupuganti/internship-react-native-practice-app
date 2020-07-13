import React from "react";
import { Container, Header, Content, Item, Input, Icon } from "native-base";

const IconTextBox = ({ placeHolder, imageString }) => {
  return (
    <Item regular>
      <Input placeholder={placeHolder} />
      <Icon active name={imageString} />
    </Item>
  );
};

export default IconTextBox;
