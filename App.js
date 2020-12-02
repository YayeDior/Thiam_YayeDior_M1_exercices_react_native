import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import FinalPage from "./screens/FinalPage";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FinalPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
    marginTop: 30,
  },
});