import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants';
// You can import from local files
import Exercice6 from './Exercice6';
//import Exercice2 from './Exercice2';
export default function App() {

  return (

      <View style={styles.container}>
         <View style={styles.container}>
         <Exercice6 color="blue"/>
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue"/>
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue"/>
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue" />
         <Exercice6 color="blue"/>
         <Exercice6 color="blue" />
        </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 12,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
     
