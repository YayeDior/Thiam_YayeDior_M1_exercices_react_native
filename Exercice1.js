import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
class Exercice1 extends React.Component {
    render() {
      const title = "Je suis un carré"
      return (
        <View style={[{backgroundColor: this.props.color},styles.firstcontainer]}>
          <Text>Hello, World!</Text>
        </View>
      )
    }
}
const styles = StyleSheet.create({
  firstcontainer: {height:50, width:60,position:"relative",top: 10,left: 150}
})
export default Exercice1  