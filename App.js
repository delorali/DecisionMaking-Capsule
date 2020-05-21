import React, {useState, Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Chart from './components/Chart.js';
import StepButton from './components/StepButton.js';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      stepNum: 1
    }
  }

  nextStep = () => {
    this.setState({'stepNum':this.state.stepNum+1})
  }

  render() {
    return(
      <View style = {styles.container}>
        <TouchableOpacity>
          <Image style = {styles.backbutton} source={require("./assets/icons/backbutton.png")}/>
        </TouchableOpacity>
        <View style = {styles.textBox}>
          <Text style = {styles.headerText}>Decision-Making Worksheet</Text>
          <Text style = {styles.text}>Organize your thoughts into a chart</Text>
        </View>
        <Chart/>
        <View style = {styles.bottomView}>
        <StepButton onPress = {this.nextStep}/>
        <Text style = {styles.headerText}>{this.state.stepNum}</Text>
        </View>
      </View>
      );
    }
  }

  const nextStep = (props) => {
    stepNum = stepNum + 1;

  }


  const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    paddingLeft : 30,
    backgroundColor: "#0F194D",
    paddingRight : 30,
  },
  textBox:{
    alignItems: "center",
  },
  headerText:{
    color:"#fff",
    fontSize: 20,
    fontFamily: 'Futura'
  },
  text: {
    paddingTop: 10,
    color: '#717AA7',
    fontSize: 11,
    fontFamily: 'ProximaNova-Regular',
    paddingBottom: 30
  },
  backbutton: {
    height: 10,
    width : 10
  },
  bottomView: {
    paddingTop: 30,
    paddingRight : 10,
    alignItems : "flex-end",
  },
  checkButton: {
    height: 30,
    width : 30
  }
  });
