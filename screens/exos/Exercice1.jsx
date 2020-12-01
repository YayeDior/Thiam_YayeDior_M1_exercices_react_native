import React from 'react';
import {View, StyleSheet} from 'react-native';
import Test from '../../components/Test';


function Exercice1() {
  return (
              <View style={styles.square}>
                <Test color="blue" title="Hello,world" />
                </View>
     
);  
        }
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "#fff",
            },
            square: {
              textAlign: "center",
              justifyContent: "center",

            },
        });
        export default Exercice1;


            