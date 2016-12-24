import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated, Easing} from 'react-native'
import styles from './styles'
import Header from '../../component/header'

class Combin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anim_1: new Animated.Value(0),
      anim_2: new Animated.Value(0),
      anim_3: new Animated.Value(0),
    }
  }
  _setConbinAnime() {
    // Animated.timing(this.state.anim, {toValue: 100,easing: Easing.ease}).start()
    let {timing,sequence,delay,stagger,parallel} = Animated
    sequence([
      timing(this.state.anim_1, {toValue: 100,easing: Easing.ease}),
      delay(400),
      timing(this.state.anim_1, {toValue: 0,easing: Easing.elastic(2)}),
      delay(400),
      stagger(400,[
        timing(this.state.anim_1, {toValue: 100,easing: Easing.ease}),
        timing(this.state.anim_2, {toValue: 100,easing: Easing.ease}),
        timing(this.state.anim_3, {toValue: 100,easing: Easing.ease}),
      ]),
      delay(400),
      parallel([
        timing(this.state.anim_1, {toValue: 0,easing: Easing.ease}),
        timing(this.state.anim_2, {toValue: 0,easing: Easing.ease}),
        timing(this.state.anim_3, {toValue: 0,easing: Easing.ease}),
      ]),
    ]).start()
  }
  componentDidMount() {
    this._setConbinAnime()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"组合动画"} left={true} {...this.props} />
        <View style={styles.main}>
          <View style={styles.block}>
            <View style={styles.blockTop}>
              <Text style={styles.topText}>sequence(array):按照顺序执行动画</Text>
              <Text style={styles.topText}>delay(number):在sequence中执行，延迟指定时间执行下一个动画</Text>
              <Text style={styles.topText}>stagger(numbe,array):按照顺序执行动画，指定每个动画之间延迟间隔</Text>
              <Text style={styles.topText}>parallel(array):同时执行动画</Text>
            </View>
            <View style={styles.block}>
              <Animated.View style={[styles.animation, {left:this.state.anim_1}]}></Animated.View>
              <Animated.View style={[styles.animation, {left:this.state.anim_2}]}></Animated.View>
              <Animated.View style={[styles.animation, {left:this.state.anim_3}]}></Animated.View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Combin
