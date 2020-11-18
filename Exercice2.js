import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Exercice2= () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Button 1
      </Text>
      <Button
        title="Button 1"
        onPress={() => this.coucou()}
      />
    </View>
    <Separator />
    </SafeAreaView>
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  
  export default Exercice2;

