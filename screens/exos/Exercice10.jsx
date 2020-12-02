import * as React from 'react';
import {View,StyleSheet,Button,Text} from 'react-native'
import Constants from 'expo-constants';
import ButtonCustom from '../../components/ButtonCustom';

 function Exercice10() {
  const Show1=()=>
  {
    alert("Hello");
  }
  return (
      <View style={styles.container}>
     <ButtonCustom text="Button1" action={Show1}/>
     <ButtonCustom text="Button2" action={Show1} />
     <ButtonCustom text="Button3" action={Show1} />
     <ButtonCustom text="Button4" action={Show1} />
     <ButtonCustom text="Button5" action={Show1} />
    
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
export default Exercice10;
