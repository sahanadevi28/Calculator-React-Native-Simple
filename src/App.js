import React, {PropTypes} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from './components/';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      result:10,
      formula:"5*2",
    }
  }
  onPressOperatorOrNumber=(symbol)=>{
    this.setState({
      formula:this.state.formula+symbol
    })
  }
  onPressSubmitResult=()=>{
    try{
      this.setState({
        result:eval(this.state.formula)
      })
    }catch(e){
      alert("Input wrong.")
    }
  }
  backspaceOperator=()=>{
    this.setState({
      formula:this.state.formula.slice(0,this.state.formula.length-1)
    })
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
                  <Text style={styles.formulaText}>
                    {this.state.formula}
                  </Text>
                  <Icon name={"ios-backspace"} style={{color:'white',marginRight:16}} size={40} onPress={this.backspaceOperator}/>
              </View>
            </View>
            <View style={styles.row}>
            <Button  style={[styles.buttonNumber,{flex:3,backgroundColor:'#2b79c2'}]} titleStyle = {{color:'white'}} onPress={()=>{this.setState({formula:""})}} title="AC"/>
              <Button  style={styles.operation} titleStyle = {{color:'white'}} onPress={()=>{this.onPressOperatorOrNumber("/")}} title="/"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("1")}} title="1"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("2")}} title="2"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("3")}} title="3"/>
              <Button  style={styles.operation} titleStyle = {{color:'white'}} onPress={()=>{this.onPressOperatorOrNumber("*")}} title="X"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("4")}} title="4"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("5")}} title="5"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("6")}} title="6"/>
              <Button  style={styles.operation} titleStyle = {{color:'white'}} onPress={()=>{this.onPressOperatorOrNumber("-")}} title="-"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("7")}} title="7"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("8")}} title="8"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("9")}} title="9"/>
              <Button  style={styles.operation} titleStyle = {{color:'white'}} onPress={()=>{this.onPressOperatorOrNumber("+")}} title="+"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("0")}} title="0"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber("00")}} title="00"/>
              <Button  style={styles.buttonNumber} onPress={()=>{this.onPressOperatorOrNumber(".")}} title="."/>
              <Button  style={[styles.buttonNumber,{backgroundColor:'#4aa7ff'}]} titleStyle = {{color:'white'}} onPress={this.onPressSubmitResult} title="="/>
            </View>
          </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
  component:{
    flex:1,
    flexDirection:'column'
  },
  buttonNumber:{
    flex:1,
    height:75,
  },
  operation:{
    backgroundColor:'#2b79c2',
    height:75,
    flex:1,
  },
  textButton:{
    color:'black',
  },
  formulaText:{
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
