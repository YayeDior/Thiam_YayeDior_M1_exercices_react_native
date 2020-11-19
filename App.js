import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants';
// You can import from local files
import Exercice5 from './Exercice5';
//import Exercice2 from './Exercice2';
export default function App() {
  return (

      <View style={styles.container}>
         <View style={styles.container}>
         <Exercice5 color="blue"/>
         <Exercice5 color="green" />
         <Exercice5 color="pink" />
        </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
     
