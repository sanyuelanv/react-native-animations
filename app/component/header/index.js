import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Navigator} from 'react-native'
import styles from './styles'


class App extends Component {
  constructor(props) {
    super(props)
  }
  _handleSetEvent(){

  }
  _renderLeft(){
    let {left,navigator} = this.props
    if(left){
      return(
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={()=>{navigator.pop()}}
          style={styles.side}
        >
          <Text style={styles.sideText}>返回</Text>
        </TouchableOpacity>
      )
    }
    else {return(<View style={styles.side}></View>)}
  }
  _renderRight(){
    let {right,navigator} = this.props
    if(right){
      return(
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this._handleSetEvent.bind(this)}
          style={styles.side}
        >
          <Text style={styles.sideText}>设置</Text>
        </TouchableOpacity>
      )
    }
    else {return(<View style={styles.side}></View>)}
  }
  render() {
    let {center} = this.props
    return (
      <View style={styles.headerBlock}>
        {this._renderLeft()}
        <View style={styles.center}>
          <Text style={styles.centerText}>{center}</Text>
        </View>
        {this._renderRight()}
      </View>
    );
  }
}

export default App
