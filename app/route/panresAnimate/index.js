import React, {Component} from 'react'
import {StyleSheet, Text, View, PanResponder,Animated} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class PanresAnimate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY()
    }
  }
  _panResponder:{}
  _changeStyle(){
    return [
      styles.block,
      {
        transform:[
          {translateX: this.state.pan.x},
          {translateY: this.state.pan.y},
          {
            rotate: this.state.pan.x.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: ["-30deg", "0deg", "30deg"]
            })
          }
        ]
      }
    ]
  }
  componentWillMount() {
    this._animatedValueX = 0
    this._animatedValueY = 0
    this.state.pan.x.addListener((value) => {this._animatedValueX = value.value})
    this.state.pan.y.addListener((value) => this._animatedValueY = value.value)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:()=>{return true}, //允许touchstart
      onMoveShouldSetPanResponder:()=>{return true},  //允许touchmove
      // touchstart事件:nativeEvent && gestureState
      onPanResponderGrant:(e, gesture) => {
        this.state.pan.setOffset({x: this._animatedValueX, y: this._animatedValueY})
        this.state.pan.setValue({x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {toValue: 0}).start();
      }
    })
  }
  componentWillUnmount() {
    this.state.pan.x.removeAllListeners()
    this.state.pan.y.removeAllListeners()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"手势动画"} left={true} {...this.props} />
        <View style={styles.main}>
          <Animated.View
            {...this._panResponder.panHandlers}
            style={this._changeStyle()}
          >
          </Animated.View>
        </View>
      </View>
    )
  }
}

export default PanresAnimate
