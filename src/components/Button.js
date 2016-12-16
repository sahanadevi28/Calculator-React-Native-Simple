import React, {PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight onPress={()=>{this.props.onPress&&this.props.onPress()}} style={[styles.container,this.props.style]} underlayColor={this.props.underlayColor||'#d1d1d1'}>
        <Text style={[styles.title,this.props.titleStyle]}>
            {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:25,
  }
})
