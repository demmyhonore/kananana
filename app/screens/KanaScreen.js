import React from "react";
import { StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import KanaInput from "../components/KanaInput";

export default function KanaScreen() {
  const [kanaValue, onChangeKanaValue] = React.useState("");

  return (
    <Screen style={styles.screen}>
      <Text style={styles.kana}>お</Text>
      <KanaInput value={kanaValue} onChange={onChangeKanaValue} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  kana: {
    fontFamily: "KosugiMaru_400Regular",
    fontSize: 200,
  },
});