import React from "react";
import { View } from "react-native";

type Props = {
  vertical?: number;
  horizontal?: number;
};

const Spacing: React.FC<Props> = ({ vertical, horizontal }) => (
  <View style={{ marginVertical: vertical, marginHorizontal: horizontal }} />
);

export default Spacing;
