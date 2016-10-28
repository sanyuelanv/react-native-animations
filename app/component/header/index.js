import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native'
import styles from './styles'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    _onPress(){
        // console.log(1);
        var {navigator} = this.props
        navigator.pop()
    }
    _renderBack(){
        if(this.props.back){
            return(
                <TouchableHighlight
                    onPress={this._onPress.bind(this)}
                    activeOpacity = {0.9}
                    underlayColor = {"#f1f1f1"}
                    style = {styles.left}
                >
                    <View style = {styles.back} >
                        <Text style = {styles.backText} >返回</Text>
                    </View>
                </TouchableHighlight>
            )
        }
    }
    render() {
        return (
            <View style = {styles.headerBlock} >
                <View style = {styles.header} >
                    <Text style = {styles.headerText} >{this.props.text}</Text>
                </View>
                {this._renderBack()}
            </View>
        );
    }
}


export default Content
