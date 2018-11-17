import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
        return (
          <TouchableOpacity
            style={Styles.titTatToeButtonNone}
            onPress={() => this.props.onPress(this.props.index)} />
        )
    
    // 記号なしを入れておく
    if (this.props.value === null) {
      
    }

    // ○
    if (this.props.value === 10) {

    }

    // ×
    else if (this.props.value === -10) {

    }
  }
}