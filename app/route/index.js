import React, {Component} from 'react'
import Home from './home'
import Spring from './spring'
import Timing from './timing'
import Decay from './decay'

import {Navigator, Text, StyleSheet, View} from 'react-native'

const routeStack = [
  {
    name: "主页",
    index: 0,
    component: Home
  },
]
class App extends Component {
  constructor(props) {
    super(props)
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case "Spring":
        return (<Spring navigator={navigator} />)
        break
      case "Timing":
        return (<Timing navigator={navigator} />)
        break
      case "Decay":
        return (<Decay navigator={navigator} />)
        break
      default:
        return (<Home navigator={navigator} />)
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    )
  }
}

export default App
