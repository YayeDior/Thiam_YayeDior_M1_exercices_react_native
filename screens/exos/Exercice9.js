import React,{useEffect,useState} from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import Constants from 'expo-constants';
import Test from '../../components/Test';


function Exercice9() {
  const [poeple, setpoeple]=React.useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&inc=name")
          .then((response) => response.json())
          .then((json) => setpoeple(json.results))
          .catch((error) => console.error(error));
      }, [])
    
    return (

         <View style={styles.container}>

           <ScrollView>
           { poeple.map(([key,item]) => {
             return (
               <View key={key}>
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
            
            export default Exercice9;

            