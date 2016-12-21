import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native'
import styles from './styles'
import Timing from '../timing'
import Spring from '../spring'
import Decay from '../decay'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    _toPage(){
        var {page,navigator,routes} = this.props
        let timingPage = {
          name: "Timing动画",
          index: 1,
          component: Timing
        }
        let springPage = {
          name: "Spring动画",
          index: 2,
          component: Spring
        }
        let decayPage = {
          name: "Decay动画",
          index: 3,
          component: Decay
        }
        if(page == 'timing'){navigator.push(timingPage)}
        if(page == 'spring'){navigator.push(springPage)}
        if(page == 'decay'){navigator.push(decayPage)}
    }
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.9}
                onPress={this._toPage.bind(this)}
            >
                <View style = {styles.button}>
                    <Text style = {styles.buttonText}>
                        { this.props.name }
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}


export default Button
