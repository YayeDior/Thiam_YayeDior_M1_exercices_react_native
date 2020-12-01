import React from 'react'
import {View,StyleSheet,Button,alert,Text} from 'react-native'
import ButtonCustom from '../../components/ButtonCustom';

class Exercice11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    
      onPress = () => {
        this.setState({
          count: this.state.count + 1
        });
      };
    
    render() {
      return (
        <View style={[{backgroundColor: this.props.color},styles.container]}>

      <Button title="Press Count"
        onPress={() => Alert.alert('Simple Button pressed')}
      />       
       <Button title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
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
 button: {
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