import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function ButtonCustom({ text, action }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        action();
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "pink",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default ButtonCustom;
