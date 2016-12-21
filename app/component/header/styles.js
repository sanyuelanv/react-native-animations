import {
  Platform
} from 'react-native'
let styles
if (Platform.OS == 'ios') {
  styles = {
    headerBlock: {
      flex:1,
      height: 60,
      // height:60,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderBottomColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor:'#f7f7f7',
      // backgroundColor: '#999',
    },
    header: {
      // flex:1,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: "#ccc",
    },
    headerText: {
      fontSize: 18,
      color: '#545454'
    },
    left: {
      // flex:1,
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: "#ccc",
    },
    backText: {
      fontSize: 14,
      color: '#545454'
    }
  }
}
else {
  styles = {
    headerBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: 'row',
      borderBottomColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor:'#f7f7f7',
      // backgroundColor: '#999',
    },
    header: {
      flex:1,
      // height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#ccc",
    },
    headerText: {
      fontSize: 18,
      color: '#545454'
    },
    left: {
      flex:1,
      // height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#ccc",
    },
    backText: {
      fontSize: 14,
      color: '#545454'
    }
  }
}

export default styles
