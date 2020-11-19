import React from 'react'
import {View,StyleSheet,Button,alert,Text} from 'react-native'
class Exercice4 extends React.Component {
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
        <View style={[{backgroundColor: this.props.color},styles.forcontainer]}>
            <Button     props="You have pressed the button: 4 time(s)"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button     props=" Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
      )
    }
}
const styles = StyleSheet.create({

    forcontainer: {height:50, width:60,position:"relative",top: 10,left: 150}
})

export default Exercice4 