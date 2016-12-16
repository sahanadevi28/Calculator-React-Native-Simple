/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StyleSheet as EStyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const dismissKeyboard = require('dismissKeyboard')
// import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, Content, InputGroup, Input,Button } from 'native-base';
export default class MyCalculator extends Component {
  constructor(props) {
      super(props);
      dismissKeyboard();
      this.state={
        result:10,
        operation:"5*2",
      }
    }
    onPressOperatorOrNumber(symbol){
      this.setState({
        operation:this.state.operation+symbol
      })
    }
    onPressSubmitResult(){
      try{
        eval(this.state.operation)
        this.setState({
          result:eval(this.state.operation)
        })
      }catch(e){
        alert("Input wrong.")
      }

    }
    backspaceOperator(){
      this.setState({
        operation:this.state.operation.slice(0,this.state.operation.length-1)
      })
    }
    getResult(){
      return this.state.result?this.state.result:0
    }
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{backgroundColor:'#282828',height:130}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={styles.resultText}>
                  {this.state.result}
                </Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <View style={{flex:1,backgroundColor:'#494949'}}>
              <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                  <Text style={styles.operationText}>
                    {this.state.operation}
                  </Text>
                  <Icon name={"ios-backspace"} style={{color:'white',marginRight:16}} size={30} onPress={()=>this.backspaceOperator()}/>
              </View>
            </View>
            <View style={styles.row}>
              <Button block large warning style={[styles.button,{flex:3.43}]} onPress={()=>{this.setState({operation:""})}} >AC</Button>
              <Button block large style={styles.button} onPress={()=>{this.onPressOperatorOrNumber("/")}} >/</Button>
            </View>
            <View style={styles.row}>
              {/* <TouchableHighlight  style={styles.buttonNumber}  onPress={()=>{this.onPressOperatorOrNumber("1")}} >
                <Text style={styles.textButton}>
                  1
                </Text>
              </TouchableHighlight>
              <TouchableHighlight  style={styles.buttonNumber}  onPress={()=>{this.onPressOperatorOrNumber("2")}} >
                <Text style={styles.textButton}>
                  2
                </Text>
              </TouchableHighlight> */}
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("1")}} style={styles.buttonNumber} textStyle={styles.textButton}>1</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("2")}} style={styles.buttonNumber} textStyle={styles.textButton}>2</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("3")}} style={styles.buttonNumber} textStyle={styles.textButton}>3</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("*")}} style={styles.button}>X</Button>
            </View>
            <View style={styles.row}>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("4")}} style={styles.buttonNumber} textStyle={styles.textButton}>4</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("5")}} style={styles.buttonNumber} textStyle={styles.textButton}>5</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("6")}} style={styles.buttonNumber} textStyle={styles.textButton}>6</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("-")}} style={styles.button}>-</Button>
            </View>
            <View style={styles.row}>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("7")}} style={styles.buttonNumber} textStyle={styles.textButton}>7</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("8")}} style={styles.buttonNumber} textStyle={styles.textButton}>8</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("9")}} style={styles.buttonNumber} textStyle={styles.textButton}>9</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("+")}} style={styles.button}>+</Button>
            </View>
            <View style={styles.row}>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("0")}} style={styles.buttonNumber} textStyle={styles.textButton}>0</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber("00")}} style={styles.buttonNumber} textStyle={styles.textButton}>00</Button>
              <Button block large onPress={()=>{this.onPressOperatorOrNumber(".")}} style={styles.buttonNumber} textStyle={styles.textButton}>.</Button>
              <Button block large danger onPress={()=>{this.onPressSubmitResult()}}style={styles.button}>=</Button>
            </View>
          </View>

        </View>
      );
    }
}

const styles = EStyleSheet.create({
  component:{
    flex:1,
    flexDirection:'column'
  },
  button:{
    flex:1,
    borderRadius:0,
    height:75,
    shadowRadius:0,
  },
  buttonNumber:{
    backgroundColor:'white',
    flex:1,
    borderRadius:0,
    height:75,
    shadowRadius:0,
  },
  textButton:{
    color:'black',
  },
  operationText:{
    flex:1,
    color:'white',
    textAlign :'right',
    fontSize:30,
    marginRight:16
  },
  resultText:{
    color:'white',
    textAlign :'right',
    fontSize:60,
    marginRight:16
  },
  row:{
    flexDirection:'row',
    justifyContent: 'space-around'
  }
})

AppRegistry.registerComponent('MyCalculator', () => MyCalculator);
