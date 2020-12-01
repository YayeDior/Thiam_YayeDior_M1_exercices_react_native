import * as React from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import Constants from 'expo-constants';
import Test from '../../components/Test';

function Exercice6() {
  const [poeple, setpoeple]=React.useState([

    { name: 'Square1', key: '1'},
    { name: 'Square2', key: '2'},
    { name: 'Square3', key: '3'},
    { name: 'Square4', key: '4'},
    { name: 'Square5', key: '5'},
    { name: 'Square6', key: '6'},
    { name: 'Square7', key: '7'},
    { name: 'Square8', key: '8'},
    { name: 'Square9', key: '9'},
    { name: 'Square10', key: '10'},
    { name: 'Square11', key: '11'},
    { name: 'Square12', key: '12'},
    { name: 'Square13', key: '13'},
    { name: 'Square14', key: '14'},
    { name: 'Square15', key: '15'},
  ]);
    return (

         <View style={styles.container}>

           <ScrollView>
           { poeple.map((item) => {
             return (
               <View key={item.key}>
                 <Text style={styles.item}>{item.name}</Text>
                 </View>
             )
           })
          }
           </ScrollView>
              </View>
    );
            }
       
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                justifyContent: 'center',
              },
              item: {
                backgroundColor: 'blue',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
              },
            square: {
              textAlign: "center",
              justifyContent: "center",

            },
              title: {
                fontSize: 32,
              },
            });
            
            export default Exercice6;

            