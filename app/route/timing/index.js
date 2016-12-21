import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated, Easing} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }
  _setFadeAnime() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000,
      delay: 1000,
      easing: Easing.ease
    }).start()
  }
  componentDidMount() {
    this._setFadeAnime()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"Timing"} left={true} {...this.props} />
        <View style={styles.main}>
          <View style={styles.block}>
            <View style={styles.blockTop}>
              <Text style={styles.topText}>timing: 从时间范围映射到渐变的值。
              </Text>
              <Text style={styles.topText}>duration: 动画持续的时间（单位是毫秒），默认为500。
              </Text>
              <Text style={styles.topText}>easing：一个用于定义曲线的渐变函数</Text>
              <Text style={styles.topText}>delay: 在一段时间之后开始动画（单位是毫秒），默认为0。</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.descText}>延迟一秒，就会出现</Text>
              <Animated.Text style={[
                styles.text, {
                  opacity: this.state.fadeAnim
                }
              ]}>
                Timing动画
              </Animated.Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default App
