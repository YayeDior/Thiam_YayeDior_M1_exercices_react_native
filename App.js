import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants';
// You can import from local files
import Exercice1 from './Exercice1';
//import Exercice2 from './Exercice2';
export default function App() {
  return (
    <View style={styles.firstcontainer}>
      <View style={styles.firstcontainer}>
        <Exercice1 color="blue" />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    firstcontainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    }
});