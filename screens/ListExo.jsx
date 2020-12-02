import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "react-native-gesture-handler";

/* exoch est le nombre d'exercices*/

const getTitles = (exoch) => {
  const titles = [];
  for (let i = 0; i < exoch; i++) {
    titles[i] = "Exercice " + (i + 1);
  }
  return titles;
};

function Listexo({ navigation }) {
  return (
    <View style={styles.container}>
      {getTitles(12).map((title) => (
        <Button
          key={title}
          style={styles.item}
          title={title}
          onPress={() => navigation.navigate(title)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
    backgroundColor: "#FFC0CB",
    justifyContent: "space-between",
  },
  item: {
    paddingTop: 5,
  },
});

export default Listexo;
