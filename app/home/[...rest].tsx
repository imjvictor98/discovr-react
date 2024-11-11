import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
  const foo = useLocalSearchParams();
  console.log(foo);
  return (
    <View>
      <Text>Rest Screen: {foo.rest.map((item) => `${item} `)}</Text>
    </View>
  );
}
