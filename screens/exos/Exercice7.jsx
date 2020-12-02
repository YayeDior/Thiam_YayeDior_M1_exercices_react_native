import * as React from 'react';
import {View, StyleSheet, Text,TextInput} from 'react-native'
import Constants from 'expo-constants';
import Test from '../../components/Test';
function Exercice7() {
  const [name, setName]=React.useState('Say hello');
    return (

      <View style={styles.container}>
         <View style={styles.container}>
           <Text>What is your name?</Text>
           <TextInput 
           style={styles.input}
           placeholder='John'
          />
           <Text>Say hello</Text>
      
        </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 12,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
});

export default Exercice7;
