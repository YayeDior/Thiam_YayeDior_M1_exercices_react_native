import React from 'react'
import {View,StyleSheet,Button,alert,Text} from 'react-native'
class Exercice3 extends React.Component {
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
        const title = "Je suis un carré"
      return (
        <View style={[{backgroundColor: this.props.color},styles.thirdcontainer]}>
            <Button     props="Say hello"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button     props="Say goodbye"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
         <Exercice3 color="pink" />
        </View>
      )
    }
}
const styles = StyleSheet.create({

    thirdcontainer: {height:50, width:60,position:"relative",top: 10,left: 150}
})

export default Exercice3  