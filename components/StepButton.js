import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const StepButton = (props) => {
  return (
    <TouchableOpacity onPress = {() => props.onPress}>
      <Image style = {styles.checkButton} source={require("./assets/icons/checkmark.png")}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
checkButton: {
  height: 30,
  width : 30
}
});
