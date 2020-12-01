import * as React from 'react';
import {View,StyleSheet,Button,Text} from 'react-native'
import Constants from 'expo-constants';
import ButtonCustom from '../../components/ButtonCustom';

 function Exercice10() {
 Show1=("Hello")
  {
    alert("Hello");
  }
  return (
      <View style={styles.container}>
      <ButtonCustom title="Button1" onPress={() => this.Show1.bind(this,"Hello")}/>
      <ButtonCustom title="Button1" onPress={() => this.Show1.bind(this,"Hello")} />
     <ButtonCustom title="Button1" onPress={() => this.Show1.bind(this,"Hello")} />
     <ButtonCustom title="Button1" onPress={() => this.Show1.bind(this,"Hello")} />
     <ButtonCustom title="Button1" onPress={() => this.Show1.bind(this,"Hello")} />
    
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
