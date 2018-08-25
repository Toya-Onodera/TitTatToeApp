import React, { Component } from 'react'

import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from './style/StyleSheetFile'

// My Components
//import Button from './parts/Button'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.container}>
      </View>
    )
  }
}