import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.gamePoint}>
        <Text style={[Styles.gamePointText, {color: this.props.fontColor}]}>
          {this.props.point}
        </Text>
      </View>
  	)
  }
}