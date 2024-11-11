import React from "react";
import { Text } from "@ui-kitten/components";
import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import theme from "../../../raw/theme.json";

type Props = {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  touchableStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const ButtonLink: React.FC<Props> = ({
  text,
  onPress,
  touchableStyle,
  textStyle = styles.text
}) => {
  return (
    <TouchableOpacity
      style={touchableStyle}
      onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: theme["color-primary-500"]
  }
});

export default ButtonLink;
