import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import styles from './styles'
import Button from './button'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <ScrollView style={styles.scroll}>
            <View style={styles.bottomView}>
              <Button name="Timing动画" page='timing' {...this.props}/>
              <Button name="Spring动画" page='spring' {...this.props}/>
              <Button name="decay动画" page='decay' {...this.props}/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default App
