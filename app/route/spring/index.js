import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class Spring extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounce: new Animated.Value(0),
      text:"动画进行"
    }
  }
  _callBack(){
    this.setState({text:"动画结束"})
  }
  _setTransform() {
    Animated.spring(this.state.bounce, {
      toValue: 1,
      velocity: 3, // 速度
      tension: 0, // 拉力
      friction: 1, // 摩擦力
    }).start(this._callBack.bind(this))
  }
  componentDidMount() {
    this._setTransform()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"spring"} left={true} {...this.props} />
        <View style={styles.main}>
          <View style={styles.block}>
            <View style={styles.blockTop}>
              <Text style={styles.topText}>Spring: 基础的单次弹跳物理模型。
              </Text>
              <Text style={styles.topText}>velocity: 速度</Text>
              <Text style={styles.topText}>friction：摩擦力</Text>
              <Text style={styles.topText}>tension: 拉力</Text>
              <Text style={styles.topText}>*start:动画启动的时候会接受一个回调函数，当动画结束的时候执行 </Text>
            </View>
            <View style={styles.block}>
              <Animated.View style={[
                styles.animation, {
                  transform: [
                    {
                      translateX: this.state.bounce.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 0]
                      })
                    }
                  ]
                }
              ]}>
              <Text style={styles.animationText}>{this.state.text}</Text>
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Spring
