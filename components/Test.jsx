import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
function Test(props){
  
      return (
        <View style={[{backgroundColor: props.color},styles.Test]}>
       <Text style={styles.text}>{props.title}</Text>
        </View>
      )
      
    }

const styles = StyleSheet.create({
  Test: {
    height: 90,
    width: 90,
    justifyContent: "center",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    textAlign: "center",
  },
});
export default Test