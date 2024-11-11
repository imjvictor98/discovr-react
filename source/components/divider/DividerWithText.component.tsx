import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Text } from "@ui-kitten/components";
import { Dimensions } from "@utils";

type Props = {
  text: string;
  textColor?: string;
};
const DividerWithText: React.FC<Props> = ({ text, textColor = "#3F404B" }) => {
  return (
    <View style={styles.root}>
      <Divider style={styles.divider} />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      <Divider style={styles.divider} />
    </View>
  );
};

export default DividerWithText;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center"
  },
  divider: {
    flex: 1,
    height: 3
  },
  text: {
    paddingHorizontal: Dimensions.Spacing.Large,
    fontSize: Dimensions.FontSize.Label,
    fontWeight: "bold"
  }
});
