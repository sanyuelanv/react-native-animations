import React, {Component} from 'react'
import {StyleSheet,Text,View,ScrollView} from 'react-native'
import styles from './styles'
import Button from './button'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.main} >
                <ScrollView style = {styles.scroll} >
                    <View style = {styles.bottomView}>
                        <Button name="简单动画" page='spring' {...this.props} />
                        <Button name="弹性动画" page='bounce' {...this.props} />
                        <Button name="组合动画" page='compos' {...this.props} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default Content
