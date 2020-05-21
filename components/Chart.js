import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Chart extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <Text style = {styles.header}>Your Decision-Making Chart</Text>
        <View style = {styles.chartBox}>
        <Text style = {styles.chartHeader}>Key Issues or{"\n"}
        People Involved</Text>
        </View>
      </View>
      );
    }
  }

  const stepNum = 1;

  const styles = StyleSheet.create({
  container:{
    paddingTop:30,
    alignItems:'center'
  },
  chartBox:{
    backgroundColor: "#20295B",
    width: 330,
    height: 200,
    borderRadius: 20,
  },
  header: {
    paddingTop: 10,
    color: '#A6AFDB',
    fontSize: 13,
    fontFamily: 'ProximaNova-Regular',
    paddingBottom: 15
  },
  chartHeader:{
    paddingTop: 10,
    color: '#A6AFDB',
    fontSize: 11,
    fontFamily: 'ProximaNova-Regular',
    paddingBottom: 15,
    paddingLeft: 20,
  }
});
