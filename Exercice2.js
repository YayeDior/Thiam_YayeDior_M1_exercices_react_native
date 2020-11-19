import React from 'react'
import {View,StyleSheet,Button,alert,Text} from 'react-native'
class Exercice2 extends React.Component {
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
        <View style={[{backgroundColor: this.props.color},styles.secondcontainer]}>
            <Button     title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
          <Text>hello</Text>
        </View>
      )
    }
}
export default Exercice2  

