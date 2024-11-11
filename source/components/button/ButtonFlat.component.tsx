import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import { Dimensions } from "@utils";

type Props = {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonFlat: React.FC<Props> = ({ text, onPress }) => {
  return (
    <Button
      style={style.button}
      appearance='ghost'
      size='large'
      status='basic'
      onPress={onPress}>
      {(evaProps) => <Text {...evaProps}>{text}</Text>}
    </Button>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: Dimensions.BorderRadius.XLarge
  }
});

export default ButtonFlat;
