import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import styles from './styles'
import Button from './button'
import Header from '../../component/header'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Header center={"首页"} />
        <View style={styles.main}>
          <ScrollView style={styles.scroll}>
            <View style={styles.bottomView}>
              <Button name="Timing动画" page='Timing' {...this.props}/>
              <Button name="Spring动画" page='Spring' {...this.props}/>
              <Button name="decay动画" page='Decay' {...this.props}/>
              <Button name="简单手势" page='PanResponder' {...this.props}/>
              <Button name="手势动画" page='PanresAnimate' {...this.props}/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home
