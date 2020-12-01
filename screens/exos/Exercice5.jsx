import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import Test from '../../components/Test';
// You can import from local files
 function Exercice5() {
  return (

      <View style={styles.container}>
         <Test color="blue" title="Square1"/>
         <Test color="green" title="Square2" />
         <Test color="pink" title="Square3" />
        </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
});
export default Exercice5