import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'
import Content from './content'
import Header from '../../component/header'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.container} >
                <Header
                    text="动画"
                    back={false}
                    {...this.props}
                />
                <Content {...this.props} />
            </View>
        );
    }
}


export default App
