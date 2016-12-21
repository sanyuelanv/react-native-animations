import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Navigator} from 'react-native'
import styles from './styles'

let MidTitle = (route, navigator, index, navState)=>{
  let {routeStack,presentedIndex} = navState
  return (
    <View style = {styles.header} >
        <Text style = {styles.headerText} >{route.name}</Text>
    </View>
  )
}
let LeftButton = (route, navigator, index, navState) =>{
  let {routeStack,presentedIndex} = navState
  if(route.index){
    return (
      <TouchableHighlight
        underlayColor = {'#f7f7f7'}
        activeOpacity={0.9}
        onPress= {()=>{navigator.pop()}}
        style = {styles.left}
      >
          <Text style = {styles.backText} >返回</Text>
      </TouchableHighlight>
    )
  }
  else {return(<View></View>)}
}
let RightButton = (route, navigator, index, navState) =>{
  // let {routeStack,presentedIndex} = navState
  // if(presentedIndex){
  //   return (
  //     <View style = {styles.left} >
  //         <Text style = {styles.backText} >返回</Text>
  //     </View>
  //   )
  // }
  // else {return(<View></View>)}
  return(<View style={styles.nullView}></View>)
}

let Header = () => {
  return(
    < Navigator.NavigationBar
      routeMapper = {
        {
          LeftButton:LeftButton,
          RightButton: RightButton,
          Title:MidTitle,
        }
      }
      style = {styles.headerBlock}
    />
)}

export default Header
