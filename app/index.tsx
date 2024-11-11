import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={"/home"}>Ir pra Home</Link>
        <Link href={"/home/bacon"}>Ir pra Home 1234</Link>
        <Link href={"/home/bacon/settings"}>Ir pra Home settings</Link>
        <Link href={"/home/bacon/settings2"}>Ir pra Home settings2</Link>
        <Link href={"/home/bacon/settings3"}>Ir pra Home settings3</Link>
        <Link href={"terms-of-servic2e"}>Ir pra Termos</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D"
  }
});
