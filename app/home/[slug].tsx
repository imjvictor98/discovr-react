import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Blog post: {slug}</Text>
    </View>
  );
}
