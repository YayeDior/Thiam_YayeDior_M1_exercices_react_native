
import * as React from 'react';
import {View,StyleSheet,Button,Text} from 'react-native'
import Constants from 'expo-constants';
import ButtonCustom from '../../components/ButtonCustom';

 function Exercice2() {
 const Show1=()=>
  {
    alert("Hello");
  }
  return (
        <View style={styles.container}>
      <ButtonCustom text="Button1" action={Show1}
      />        
    </View>
  );
}
const styles = StyleSheet.create({
     container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    },

});
export default Exercice2;



