import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated, Easing} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      burns: new Animated.Value(1.15),
    }
  }
  _startBurnsZoom() {
    this.state.burns.setValue(1)
    Animated.decay(this.state.burns, {
      velocity: 1,                    // sublte zoom
      deceleration: 0.9999,           // slow decay
    }).start()
  }
  componentDidMount() {
    this._startBurnsZoom()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"decay"} left={true} {...this.props} />
        <View style={styles.main}>
          <View style={styles.block}>
            <View style={styles.blockTop}>
              <Text style={styles.topText}>timing:  以一个初始速度开始并且逐渐减慢停止
              </Text>
              <Text style={styles.topText}>velocity: 速度
              </Text>
              <Text style={styles.topText}>deceleration： 速度衰减比例，默认为0.997</Text>
            </View>
            <View style={styles.block}>
              <Animated.View style={[
                styles.animation, {
                  transform: [
                    {scale: this.state.burns.interpolate({
                      inputRange: [1, 3000],
                      outputRange: [1, 1.25]}) // simple multiplier
                    },
                  ]
                }
              ]}>
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default App
