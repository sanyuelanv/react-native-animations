import {
  Platform
} from 'react-native'
let flag = Platform.OS == 'ios'
const HEIGHT = flag ? 60:50
const TextHEIGHT = flag ? 40:50

const styles = {
  headerBlock: {
    height: HEIGHT,
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor:'#f7f7f7',
  },
  center: {
    flex:1,
    height: TextHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#ccc",
  },
  centerText: {
    fontSize: 18,
    color: '#545454'
  },
  side: {
    width:50,
    height: TextHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f7f7f7',
    // backgroundColor: "#ccc",
  },
  sideText: {
    fontSize: 14,
    color: '#545454'
  }
}

export default styles
