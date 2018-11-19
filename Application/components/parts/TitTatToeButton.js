import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

const iconFontSize = (Dimensions.get('window').width - 112) / 4;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {    
    // 記号なしを入れておく
    if (this.props.value === 0) {
      return (
        <TouchableOpacity
          style={[Styles.titTatToeButton, Styles.titTatToeButtonNone]}
          onPress={() => this.props.onPress(this.props.index)} />
      )
    }

    // ○
    if (this.props.value === 10) {
      return (
        <View
          style={[Styles.titTatToeButton, Styles.titTatToeButtonCircle]}
        >
          <Icon name="panorama-fish-eye" size={iconFontSize} color="#FAFAFA" />
        </View>
      )
    }

    // ×
    else if (this.props.value === -10) {
      return (
        <View
          style={[Styles.titTatToeButton, Styles.titTatToeButtonCross]}
        >
          <Icon name="clear" size={iconFontSize} color="#FAFAFA" />
        </View>
      )
    }
  }
}