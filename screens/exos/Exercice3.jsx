import * as React from 'react';
import {View,StyleSheet,Button,Text} from 'react-native'
import Constants from 'expo-constants';
import ButtonCustom from '../../components/ButtonCustom';
 function Exercice3() {

  const Show1=()=>
   {
     alert("Hello");
   }
  return (
    <View style={styles.container}>
        <View style={styles.forcontainer}>
    
      <ButtonCustom text="Say hello"
        action={Show1}
      />       
       <ButtonCustom text="Say goodbye"
      action={Show1}
      />       
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
     container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    backgroundColor: "#fff",
    },
    
  
});

export default Exercice3

