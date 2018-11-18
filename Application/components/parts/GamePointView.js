import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

// My Components
import GamePoint from './GamePoint'

const iconFontSize = Dimensions.get('window').width / 6;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    // どっちのターンか表示するアイコンのスタイル追加(動的な部分)
    const iconStyle = (this.props.turn % 2 === 0)
                          ? Styles.gamePointIconPositionLeft
                          : Styles.gamePointIconPositionRight
    return (
      <View style={Styles.gamePointView}>
        <View style={Styles.gameLeftPointView}>
          <GamePoint
            fontColor='#DFAEB4'
            point={this.props.playFirstPoint}
          />
        </View>

        <View style={Styles.gameRightPointView}>
          <GamePoint
            fontColor='#119DA4'
            point={this.props.drawFirstPoint}
          />
        </View>

        <Icon name="check-circle" size={iconFontSize} color="#FAFAFA" style={[Styles.gamePointIconCommon, iconStyle]} />
      </View>
  	)
  }
}