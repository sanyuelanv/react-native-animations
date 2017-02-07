import React, {Component} from 'react'
import {StyleSheet, Text, View, PanResponder} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class PanResponderTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:"松开",
      text2:"",
    }
  }
  _panResponder:{}
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:()=>{return true}, //允许touchstart
      onMoveShouldSetPanResponder:()=>{return true},  //允许touchmove
      // touchstart事件:nativeEvent && gestureState
      onPanResponderGrant:(e,gesture)=>{
        let {dx,dy} = gesture
        this.setState({text:"触摸开始 dx:"+dx+"& dy:"+dy})
      },
      // touchmove事件
      onPanResponderMove:(e,gesture)=>{
        let {dx,dy} = gesture
        this.setState({text:"移动 dx:"+dx.toFixed(1)+"& dy:"+dy.toFixed(1)})
      },
      // touchend事件
      onPanResponderRelease:()=>{
        this.setState({text:"松开"})
      },
      // touchcancel事件
      onPanResponderTerminate:()=>{
        this.setState({text:"松开"})
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"简单手势"} left={true} {...this.props} />
        <View style={styles.main}>
          <View style={styles.block} {...this._panResponder.panHandlers}>
            <Text style={styles.blockText}>{this.state.text}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PanResponderTest
