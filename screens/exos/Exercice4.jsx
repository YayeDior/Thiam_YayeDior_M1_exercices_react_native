import React, { useState } from 'react';
import {View,StyleSheet,Button,alert,Text} from 'react-native'
import ButtonCustom from '../../components/ButtonCustom';

function Exercice4() {

  const [count, setCount] = useState(0);

  return (
    <View>
    
  <ButtonCustom text="Press count" action={setCount} 
      Presse me
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 flexDirection: 'row-reverse',
 justifyContent: 'space-around',
 backgroundColor: "#fff",
 },
 ButtonCustom: {
   alignItems: "center",
   backgroundColor: "#DDDDDD",
   padding: 10,
 },
 countContainer: {
   alignItems: "center",
   padding: 10,
 },
    
});

export default Exercice4 