import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
class Exercice6 extends React.Component {
    render() {
      const title = "Je suis un carré"
      return (
        <View style={[{backgroundColor: this.props.color},styles.container]}>
       <Text>Square</Text>
        </View>
      )
    }
}
const styles = StyleSheet.create({
  container: {height:15, width:50}
})
export default Exercice6