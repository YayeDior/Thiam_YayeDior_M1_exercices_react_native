import React from "react";
import { StyleSheet, View } from "react-native";
import ListExo from "./ListExo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Exercice1 from "./exos/Exercice1";
import Exercice2 from "./exos/Exercice2";
import Exercice3 from "./exos/Exercice3";
import Exercice4 from "./exos/Exercice4";
import Exercice5 from "./exos/Exercice5";
import Exercice6 from "./exos/Exercice6";
import Exercice7 from "./exos/Exercice7";
import Exercice8 from "./exos/Exercice8";
import Exercice9 from "./exos/Exercice9";
import Exercice10 from "./exos/Exercice10";
import Exercice11 from "./exos/Exercice11";
import Exercice12 from "./exos/Exercice12";

const Stack = createStackNavigator();

function FinalPage() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Exercices">
          <Stack.Screen name="Exercices" component={ListExo} />
          <Stack.Screen name="Exercice 1" component={Exercice1} />
          <Stack.Screen name="Exercice 2" component={Exercice2} />
          <Stack.Screen name="Exercice 3" component={Exercice3} />
          <Stack.Screen name="Exercice 4" component={Exercice4} />
          <Stack.Screen name="Exercice 5" component={Exercice5} />
          <Stack.Screen name="Exercice 6" component={Exercice6} />
          <Stack.Screen name="Exercice 7" component={Exercice7} />
          <Stack.Screen name="Exercice 8" component={Exercice8} />
          <Stack.Screen name="Exercice 9" component={Exercice9} />
          <Stack.Screen name="Exercice 10" component={Exercice10} />
          <Stack.Screen name="Exercice 11" component={Exercice11} />
          <Stack.Screen name="Exercice 12" component={Exercice12} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
  },
});

export default FinalPage;
