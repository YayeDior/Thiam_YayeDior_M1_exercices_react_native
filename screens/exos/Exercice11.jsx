import React from 'react'
import {View,StyleSheet,alert,Text} from 'react-native'
import ButtonCustom from '../../components/ButtonCustom';

class Exercice11 extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        count: 0 
      };
    }
  
  render() {
    return (
      <View style={[{backgroundColor: this.props.color},styles.container]}>
     <text>Press count: {this.state.count} fois</text>
    <ButtonCustom onClick={() => this.setState({ count: this.state.count + 1 })}
     Press me 
       /> 
      </View>
      )
    }
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

export default Exercice11