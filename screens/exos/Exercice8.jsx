import * as React from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import Test from '../../components/Test';
import Constants from 'expo-constants';

function Exercice8() {
  const [poeple, setpoeple]=React.useState([

    { name: 'Johan Renard', key: '1'},
    { name: 'Brand Van Meijl', key: '2'},
    { name: 'Kasper Kivela', key: '3'},
    { name: 'Harley Martin', key: '4'},
    { name: 'Aapo Niemela', key: '5'},
    { name: 'Carol Williams', key: '6'},
    { name: 'Dior', key: '7'},
    { name: 'Chanel', key: '8'},
    { name: 'Mauritz Musch', key: '9'},
    { name: 'Andrea Austin', key: '10'},
    { name: 'Murat Kutlay', key: '11'},
    { name: 'Nanneke Ermers', key: '12'},
    { name: 'Jayden Anderson', key: '13'},
    { name: 'Neijla Van Riet', key: '14'},
    { name: 'Heather Hudson', key: '15'},
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
                backgroundColor: 'white',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
              },
              title: {
                fontSize: 32,
              },
            });
            export default Exercice8;