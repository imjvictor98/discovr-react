import React from "react";
import { Text, Button } from "@ui-kitten/components";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Dimensions } from "@utils";

type Props = {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonDefault: React.FC<Props> = ({ text, onPress }) => {
  return (
    <Button
      style={style.button}
      size='large'
      onPress={onPress}>
      {(evaProps) => {
        return <Text {...evaProps}>{text}</Text>;
      }}
    </Button>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: Dimensions.BorderRadius.XLarge
  }
});

export default ButtonDefault;
