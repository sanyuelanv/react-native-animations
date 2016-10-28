import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'
import Content from './content'
import Header from '../../component/header'

class App extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <View style = {styles.container} >
                <Header
                    text="简单动画"
                    back={true}
                    {...this.props}
                />
                <Content />
            </View>
        );
    }
}


export default App
